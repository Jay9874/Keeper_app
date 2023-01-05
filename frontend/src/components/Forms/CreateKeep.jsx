import React, { useState } from "react";
import axios from "axios";
import AddButton from '../Buttons/AddButton'
import TitleInput from '../Inputs/TitleInput'
import ClickAwayListener from '@mui/base/ClickAwayListener';

export function CreateKeep({onAdd}){
    const [isExpanded, setExpanded] = useState(false)
    const [keep, setKeep] = useState({
        title: '',
        description: ''
      })


      function handleChange (event) {
        const { name, value } = event.target
        setKeep(prevValue => {
          return {
            ...prevValue,
            [name]: value
          }
        })
      }
    
      function expand () {
        setExpanded(true);
      }
      function shrink(event){
        console.log(event);
        setExpanded(false);
      }

    function handleSubmit(e) {
        e.preventDefault();
        axios
            .post("/api", keep)
            .then((res) => {
                console.log(res.data.message);
                shrink();
                onAdd(keep);
                setKeep({title: "", description: ""});
            })
            .catch((err) => {
                console.log("error could not create");
                console.log(err.message);
            });
    }

    
    return (
        <ClickAwayListener onClickAway={(event)=>{
          console.log(event);
          setExpanded(false);
        }}>
    <div className='creator-container'>
      <form>
          {isExpanded && (
            <TitleInput
              placeholder='Title'
              name='title'
              title={keep.title}
              handleChange={handleChange}
            />
          )}
          <textarea
            className='creator-input input-desc'
            placeholder='Take a note...'
            name='description'
            value={keep.description}
            onChange={handleChange}
            rows={isExpanded ? 4 : 1}
            onClick={expand}
          />
          {isExpanded && (
            <AddButton
              type='submit'
              onClick={handleSubmit}
              expand={isExpanded}
            />
          )}
      </form>
    </div>
    </ClickAwayListener>
    );
}