import React from 'react'
import Inpux from './Inpux'
import { useState } from 'react'
const Texx = () => {
    const [state,setState]=useState('')
  return (
    <div style={{textAlign:"center", height:"400px", marginTop:"60px"}}>
        
        <Inpux name={setState} />
        <h3>{state}</h3>
    </div>
  )
}

export default Texx