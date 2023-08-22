import { useState } from "react"
import React  from 'react'

const List = () => {
  let [state, setState]=useState(["apple","mango","rohan","root","fruit"])
  return (
    <div>
      <ol>
        {
          state.map((ele)=>{
           return <li>{ele}</li>
          })
        }
      </ol>
    </div>
  )
}

export default List