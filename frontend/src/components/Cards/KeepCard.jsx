import { Button} from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import DeleteButton from '../Buttons/DeleteButton'
import EditButton from '../Buttons/EditButton'
import axios from 'axios'
import Textarea from '../Inputs/Textarea'

function Keep ({ id, title, desc, onDelete}) {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);
  const [keep, setKeep] = useState({
    title: title,
    description: desc
  })

  useEffect(() => {
    const handleClickOutside = (event) =>{
      if(ref.current && !ref.current.contains(event.target)){
        isOpen && onClickOutside();
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [onClickOutside, isOpen])


  function onClickOutside () {
    submitEdit()
  }

  function handleChange ({name, value}) {
    setKeep(prevKeep => ({ ...prevKeep, [name]: value}))
  }

  function submitEdit () {
    axios
      .put(`/api/${id}`, keep)
      .then(res => {
        setOpen(false);
        console.log(res.data.message)
      })
      .catch(err => {
        console.log('error could not update')
        console.log(err.message)
      })
  }

  return (
      <div className='shadow-container'>
        <div ref={ref}
          className={`note-card ${
            isOpen ? 'note-card-expanded' : 'note-card-normal'
          }`}
          onClick={()=>{
            setOpen(true);
          }}
        >
          <div className='note-title'>
            <Textarea
              data={keep.title}
              onEdit={handleChange}
              name='title'
              className='note-title-h1'
              editing={isOpen}
              hint='Title'
            />
          </div>
          <div className='note-desc'>
            <Textarea
              data={keep.description}
              onEdit={handleChange}
              name='description'
              className='note-desc-p'
              editing={isOpen}
              hint='Note'
            />
          </div>
          <div className={`update-options${isOpen?'-expand':''}`}>
            {!isOpen && (
              <div className='push-left'>
                <div className='delete-btn'>
                  <DeleteButton id={id} onClick={onDelete} />
                </div>
                <div className='edit-btn'>
                  <EditButton />
                </div>
              </div>
            )}

            <div
              style={
                isOpen
                  ? { display: 'block' }
                  : {
                      display: 'none'
                    }
              }
              className='close-btn push-right'
            >
              <Button style={{color: '#000', padding: '8px 24px', margin: '0 15px 0 0'}} onClick={submitEdit} size='small'>
                Close
              </Button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Keep
