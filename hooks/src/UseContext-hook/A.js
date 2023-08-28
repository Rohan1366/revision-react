import React from 'react'
import { useState } from 'react'
import B from './B'
import myContext from './Context'
const A = (props) => {
    const [state,setState]=useState({
        name:"rohan",
        city:"vita",
        age:21
    })
  return (
    <div style={{textAlign:"center"}}>
        <p>name :{state.name}</p>
        <p>city :{state.city}</p>
        <p>age :{state.age}</p>
        <button onClick={()=>setState({
            name:"Pooja",
            city:"Aundh",
            age:22
        })}>Change</button>
        <myContext.Provider value={state}>
        <B />
        </myContext.Provider>
    </div>
  )
}

export default A