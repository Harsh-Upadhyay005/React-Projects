import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState('aqua')

  return (
    <div className='w-full h-screen duration-200'
    style={{backgroundColor: color}}
    >
      <div className='fixed flex-wrap justify-center top-10 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg
         bg-lightpink px-3 py-2 rounded-3xl'>
          <button onClick={() => setColor("red")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: "red"}}
          >Red</button>
          <button onClick={() => setColor("green")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: "green"}}
          >green</button>
          <button onClick={() => setColor("olive")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: "olive"}}
          >olive</button>
          <button onClick={() => setColor("blue")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: "blue"}}
          >blue</button>
          <button onClick={() => setColor("Yellow")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: "Yellow"}}
          >Yellow</button>
          <button onClick={() => setColor("black")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: "black"}}
          >black</button>
          <button onClick={() => setColor("purple")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: "Purple"}}
          >Purple</button>
          <button onClick={() => setColor("Lavender")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: "Lavender"}}
          >Lavender</button>
    
         </div>
      </div>
    </div>
  )
}

export default App
