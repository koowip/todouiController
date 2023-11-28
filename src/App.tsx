import { useState } from 'react'
import './App.css'
import OutlinedCard from './ToDoCard'

function App() {

  return (
    <>
      <div className="input-form">
           <input type="text" placeholder="Enter todo" />
           <button>Add Todo</button>
      </div>
      <div className='cards'>
        <OutlinedCard />
        <OutlinedCard />
        <OutlinedCard />
        <OutlinedCard />
      </div>

    </>
)
}

export default App
