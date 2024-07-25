import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setcolor] = useState("black")

  return (
    <>

    <div className='h-screen w-full'
    style={{backgroundColor:color}}>
    <div className='flex justify-between p-10'>
    <button
      onClick={()=>setcolor("red")}
      className='bg-red-600
      text-white
     mx-2
     p-3
     px-6
     rounded-xl'
     >Red</button>
      
      <button
       onClick={()=>setcolor("green")}

      className='bg-green-600
       text-white
      mx-2
      p-3
      px-6
      rounded-xl'>Green</button>
      <button
      onClick={()=>setcolor("blue")}
      className='bg-blue-600
       text-white
      mx-2
      p-3
      px-6
      rounded-xl'>Blue</button>
      <button
      onClick={()=>setcolor("yellow")}
      className='bg-yellow-600
       text-white
      mx-2
      p-3
      px-6
      rounded-xl'>Yellow</button>
      <button
      onClick={()=>setcolor("gray")}
      className='bg-gray-500
       text-white
      mx-2
      p-3
      px-6
      rounded-xl'>Gray</button>
      <button
      onClick={()=>setcolor("maroon")}
      className='bg-red-800
       text-white
      mx-2
      p-3
      px-6
      rounded-xl'>Maroon</button>
      <button
      onClick={()=>setcolor("black")}
      className='bg-black
      text-white
      mx-2
      p-3
      px-6
      rounded-xl'>Black</button>
    </div>
    </div>
    </>
  )
}

export default App
