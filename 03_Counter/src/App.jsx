import { useState } from 'react';
import './App.css'

function App() {
  const [counter, setCounter] = useState(10);

  function addValue() {
    if (counter < 20) 
    setCounter(counter + 1)
  }

  function decValue() {
    if (counter > 0)
    setCounter(counter - 1)
  }

  return (
    <>
      <h2>Count is {counter}</h2>
      <button onClick={decValue}>Dec</button>
      <button onClick={addValue}>Inc</button>
    </>
  )
}

export default App
