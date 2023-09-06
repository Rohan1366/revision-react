import React from 'react'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
const Jewelery = () => {
  const [state,setState]=useState([])
  useEffect(()=>{
       fetch("https://fakestoreapi.com/products/category/jewelery")
       .then((res)=>res.json())
       .then((data)=>{
         console.log(data)
         setState(data)
       })
  },[])
  return (
    <div>
        <h1 style={{textAlign:"center"}} >Jewelery</h1>
        <ul>
        {
            state.map((ele,index)=>{
              return <NavLink style={{color:"red"}} ><li key={index} >{ele.title}</li></NavLink>
            })
          }
        </ul>
    </div>
  )
}

export default Jewelery