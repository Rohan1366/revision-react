import React from 'react'
import { useState } from 'react'
const Second = ({username1,username2}) => {
    const[state , setState]=useState('')
    function handle(){
        username2(state)
    }
  return (
    <div>
    <input type='text' placeholder='Lets Chat' onChange={((e)=>setState(e.target.value))} />
    <button onClick={handle} >Send</button>
     <h3>{username1}</h3>
</div>
  )
}

export default Second