import React from 'react'
import Inpux from './Inpux'
import { useState } from 'react'
const Texx = () => {
    const [state,setState]=useState('')
  return (
    <div>
        <h3>{state}</h3>
        <Inpux name={setState} />
    </div>
  )
}

export default Texx