// Importing all the packages and files
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { CreateKeep } from './Forms/CreateKeep'
import KeepCard from './Cards/KeepCard'
import EmptyNotes from './Exceptions/EmptyKeep'
import Header from './Navigations/Header'
import Footer from './Navigations/Footer'

const url = 'http://localhost:8080';

function Home () {
  const [keeps, setKeeps] = useState([])
  const [isBlured, setBlured] = useState(false)

  useEffect(() => {
    axios
      .get(`${url}/api`)
      .then(res => {
        console.log(res.data)
        setKeeps(res.data)
        console.log(keeps)
      })
      .catch(err => {
        console.log(err.message)
      })
  }, [])

  function handleDelete (id) {
    axios.delete(`/api/${id}`)
    setKeeps(data => {
      return data.filter(keep => keep._id !== id)
    })
  }

  function updateKeep (newKeep) {
    setKeeps(keeps => [...keeps, newKeep])
  }

  function showNotes (note, index) {
    const { _id, title, description } = note
    return (
      <KeepCard
        key={_id}
        id={_id}
        title={title}
        desc={description}
        onDelete={handleDelete}
        handleBlur={handleBlur}
      />
    )
  }

  function handleBlur (shouldBlur) {
    setBlured(shouldBlur)
  }
  console.log('is blured: ', isBlured)

  return (
    <div className='root-container'>
      {/* <div className={isBlured ? 'blur' : ''}> */}
        <Header />
        <CreateKeep onAdd={updateKeep} />
        <div>
          {keeps.length === 0 ? (
            <EmptyNotes />
          ) : (
            <div className='notes-container'>{keeps.map(showNotes)}</div>
          )}
        </div>
        <Footer />
      </div>
    // </div>
  )
}

export default Home;
