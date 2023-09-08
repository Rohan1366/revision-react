import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const ProductDetails = () => {
   const pathParams= useParams()
   
   const [state,setState]=useState({})
   useEffect(()=>{
       fetch(`https://fakestoreapi.com/products/${pathParams.id}`)
       .then((res)=>res.json())
       .then((data)=>{
        setState(data)
        console.log(data)
       })
   },[])
  return (
    
       
           
               <div style={{alignItem:"center",textAlign:"center",width:"400px",margin:"30px auto ",boxShadow:"0 0 10px black",borderRadius:"10px"}}>
                
                    <h1 style={{paddingTop:"10px"}}>{state.category} Details</h1>
                    <img src={state.image} style={{height:"300px",width:"300px"}} />
                    <h3>Price :{state.price}</h3>
                    <p>{state.description}</p>
               </div>
        


   
  )
}

export default ProductDetails