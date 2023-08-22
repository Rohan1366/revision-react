import React from 'react'
import Textto from './Textto'
import { useState } from 'react'
const Inputto = () => {
    // console.log(useState(''))
    const [inputData , setInputData]=useState('no data')
    const [state , setState]=useState('nodata')
    function handle(){
      
      setState(inputData)      
    }
  return (
    <div style={{textAlign:"center",marginTop:"30px",padding:"40px"}}>
        < input type="text" placeholder="PLese Enter" id="tex"  onChange={(event)=>{ setInputData(event.target.value)}}/>
        <button onClick={handle}>submit</button>
        <Textto  name={state}/>
    </div>
  )
}

export default Inputto