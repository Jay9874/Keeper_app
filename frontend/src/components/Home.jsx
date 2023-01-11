// Importing all the packages and files
import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { CreateKeep } from './Forms/CreateKeep'
import KeepCard from './Cards/KeepCard'
import EmptyNotes from './Exceptions/EmptyKeep'
import Header from './Navigations/Header'
import Footer from './Navigations/Footer'

const url = 'http://localhost:8080'

function Home () {
  const [keeps, setKeeps] = useState([])

  useEffect(() => {
    ;(async()=>{
      try{
        console.log('hello');
        // const result = await axios.get(`/api`)
        // setKeeps(result.data);
      }catch(error){
        console.log(error.message)
      }
    })()
  },[])
  
  function handleDelete (id) {
    // axios.delete(`/api/${id}`)
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
      />
    )
  }

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

export default Home
