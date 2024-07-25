import { useState,useCallback,useEffect,useRef } from 'react'

import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [number, setnumber] = useState(false)
  const [character, setcharacter] = useState(false)
  const [password, setpassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(number) str+="1234567890"
    if(character) str+="!@#$%^&*()_+{}[]"

    for(let i=1;i<=length;i++){
      let idx = Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(idx)
    }
    setpassword(pass)
  },[length,number,character,setpassword])

  useEffect(()=>{
    passwordGenerator()
  },[length,number,character,passwordGenerator])

  const passwordRef = useRef("null")

  const copytoClipboard = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,100)
    window.navigator.clipboard.writeText(password)
  },[password])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800'>
        <h1 className='text-white text-3xl text-center'>Passwod Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-5 mt-4'>
          <input type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
            ref={passwordRef}/>
          <button className='bg-blue-600 hover:bg-orange-400 text-white p-2' 
          onClick={copytoClipboard}>Copy</button>
        </div>

        <div className='flex items-center gap-x-2 text-yellow-500'>
          <input type="range"
           min={8}
           max={100}
           value={length}
           className='cursor-pointer'
           onChange={(e)=>{setlength(e.target.value)}}/>
           <label htmlFor="rang">Length: {length} </label>

           <input type="checkbox"
           defaultChecked={number}
           id='numberInput'
           onChange={()=>{
            setnumber((prev) =>!prev)
           }}/>
           <label htmlFor="checkbox">Number</label>

           <input type="checkbox"
           defaultChecked={character}
           id='characterInput'
           onChange={()=>{
            setcharacter((prev) =>!prev)
           }}/>
           <label htmlFor="checkbox">Charcater</label>


        </div>
      </div>
    </>
  )
}


export default App
