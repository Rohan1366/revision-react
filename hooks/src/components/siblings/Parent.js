import React from 'react'
import First from './First'
import Second from './Second'
import { useState } from 'react'
const Parent = () => {
    const [state1, setState1]=useState()
    const [state2, setState2]=useState()
  return (
    <div style={{display:"flex" , width:"80%" , textAlign:"center",height:"400px",boxShadow:"0px 10px 10px  black",margin:"40px"}}>
        <div style={{width:"50%"}}>
            <First username1={setState1} username2={state2} />
        </div>
        <div style={{width:"50%"}}>
            <Second username1={state1} username2={setState2} />
        </div>
    </div>
  )
}

export default Parent