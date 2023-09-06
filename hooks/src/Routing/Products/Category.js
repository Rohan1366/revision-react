
import React from 'react'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
const Category = ({url,title}) => {
    const [state,setState]=useState([])
    useEffect(()=>{
         fetch({url})
         .then((res)=>res.json())
         .then((data)=>{
           console.log(data)
           setState(data)
         })
    },[])
  return (
    <div>
         <h1 style={{textAlign:"center"}} >{title}</h1>
        <ul>
        {
            state.map((ele)=>{
              return <NavLink style={{color:"red"}} ><li>{ele.title}</li></NavLink>
            })
          }
        </ul>
    </div>
  )
}

export default Category