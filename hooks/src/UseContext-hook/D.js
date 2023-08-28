import React from 'react'
import { useContext } from 'react'
import myContext from './Context'
const D = (props) => {
  const data= useContext(myContext)
  return (
    <div>
        <h1>
            D
        </h1>
        <p>name :{data.name}</p>
        <p>city :{data.city}</p>
        <p>age :{data.age}</p>
    </div>
  )
}

export default D