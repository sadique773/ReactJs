import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  let [count, setCount] = useState(0)

  const addValue = () =>{
    count++;
    setCount(count)
  }

  const decValue = () =>{
    count--;
    setCount(count)
  }


  return (
    <>
     <h1
     className='bg-yellow-300
     text-rose-600
     rounded-xl
     font-extrabold
     p-5
     text-xl'
     >Basic Project for Understanding of useState Hooks</h1>



    <div className='flex justify-around'>
    <button onClick={addValue}
     className='bg-blue-600
     hover:bg-blue-800
     text-yellow-400
     rounded-md
     m-2
     p-2'
     
     >Add Value</button>
     <br />
     <br />
     <button
     className='bg-blue-600
      hover:bg-blue-800
     text-yellow-400
     rounded-md
     m-2
     p-2'
     onClick={decValue}>Remove Value</button>

    </div>
      <h3
      className='bg-pink-500
     rounded-xl
      p-3
      m-1
      text-gray-50
      '><strong>Current Value: </strong>{count}</h3>
      
    <div className='flex'>
    <Card laptop="AsusBook"/>
    <br />
    <Card laptop="Vivobook"/>
    </div>
    </>
  )
}

export default App
