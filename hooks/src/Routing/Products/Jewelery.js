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
        {
          state.length > 0 ?  <ul>
          {
              state.map((ele,index)=>{
                return <NavLink style={{color:"red"}}   ><li key={index} >{ele.title}</li></NavLink>
              })
            }
          </ul> : <h2 style={{color:"black", textAlign:"center"}}>.... Loding ....</h2>
        }
    </div>
  )
}

export default Jewelery