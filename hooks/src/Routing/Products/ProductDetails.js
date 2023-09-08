import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const ProductDetails = () => {
   const pathParams= useParams()
   
   const [state,setState]=useState({})
   useEffect(()=>{
       fetch("https://fakestoreapi.com/products/1")
       .then((res)=>res.json())
       .then((data)=>{
        setState(data)
       })
   },[])
  return (
    <div>ProductDetails</div>
  )
}

export default ProductDetails