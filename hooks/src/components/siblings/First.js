import React from 'react'
import { useState } from 'react'
const First = ({username1,username2}) => {
    const [state, setState]=useState('')
    function handle(){
        username1(state)
    }
  return (
    <div>
        <input type='text' placeholder='Lets Chat' onChange={((e)=>setState(e.target.value))} />
        <button onClick={handle} >Send</button>
         <h3>{username2}</h3>
    </div>
  )
}

export default First