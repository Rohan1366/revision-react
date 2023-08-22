import React from 'react'
import { useState } from 'react'
const Inpux = (props) => {
    const [state, setState]=useState('')
    function handle(){
        props.name(state)


    }
  return (
    <div>
        <input type='text' placeholder='enter' onChange={((e)=>setState(e.target.value))} />
        <button onClick={handle} >Submit</button>
    </div>
  )
}

export default Inpux