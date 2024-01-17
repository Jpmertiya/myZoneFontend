import React from 'react'

import Notes from './Notes';  
import AddNotes from './AddNotes';


const Home = () => {

  // const [notes,setNotes]=contex
  return (
    <div>
      <div className="container">
        <h1>Add Notes here</h1>
        <AddNotes />
      </div>
      <Notes />

    </div>
  )
}

export default Home
