import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'
const Timer = () => {
const [state,setstate]=useState(0)
const ref1=useRef(null)
function startTime(){
  ref1.current= setInterval(()=>{
      setstate((prev)=>prev+1)
   },1000)
}
function stopTime(){
  clearInterval(ref1.current)
  setstate(0)
}
  return (
    <div style={{textAlign:"center", padding:"70px",width:"400px", boxShadow: "0 0 10px red" , margin:"50px auto" }}>
        <h2>Time is {state}</h2>
        <button onClick={startTime}>start</button> &nbsp;  &nbsp;  &nbsp; 
        <button onClick={stopTime}>stop</button>
    </div>
  )
}

export default Timer