import React from 'react'
import { useRef } from 'react'
const Dom = () => {
    const ref1=useRef(null)
    function handle(){
        ref1.current.innerText="Rohan is not coder"
        ref1.current.style.color="red"
    }
  return (
    <div>
        <h2 ref={ref1} style={{color:"green"}}>Rohan is Coder</h2>
        <button onClick={handle}>Change text</button>
    </div>
  )
}

export default Dom