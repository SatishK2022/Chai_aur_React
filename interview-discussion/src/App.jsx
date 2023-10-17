import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [value, setValue] = useState(1);
  const [multipliedValue, setMultipliedValue] = useState(1);
  // let multipliedValue = value * 3;

  const multiplyby3 = () => {
    setValue(value + 1);
    setMultipliedValue(value * 3);
  }
  
  return (
    <>
      <h1>Value: {value}</h1>
      <button onClick={multiplyby3}>Click to Multiply by 3</button>
      <h2>Multiplied Value: {multipliedValue}</h2>
    </>
  )
}

export default App
