import { useState } from 'react'

const Datatypes = () => {
    console.log("render")
    const [value, setValue] = useState({
        value: 1
    });

    function clickme() {
        // console.log("Clicked")
        setValue({
            value: 1
        })
    }

  return (
    <div>
        <h1>Value: {value.value}</h1>
        <button onClick={clickme}>Click Me</button>
    </div>
  )
}

export default Datatypes