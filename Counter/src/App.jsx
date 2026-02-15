import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)

  const AddValue = () => {
    
    setCounter(counter +1)
  }
  const DecVal = () => {
    
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Radhe Radhe!</h1>
      <h3>Counter is {counter}</h3>
      <button onClick={AddValue}>increase Counter</button>
      <br />
      <br />
      <button onClick={DecVal}>decrease Counter</button>
    </>
  )
}

export default App
