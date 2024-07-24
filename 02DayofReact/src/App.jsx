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



    <div className=''>
    <button onClick={addValue}
     className='bg-blue-600
     text-yellow-400
     rounded-md
     m-2
     p-2'
     
     >Add Value</button>
     <br />
     <br />
     <button
     className='bg-blue-600
     text-yellow-400
     rounded-md
     m-1
     p-2'
     onClick={decValue}>Remove Value</button>

    </div>
      <h3
      className='bg-pink-500
      inline-block rounded-xl
      p-3
      m-1
      text-gray-50'>Current Value:{count}</h3>
      
    <Card></Card>
    </>
  )
}

export default App
