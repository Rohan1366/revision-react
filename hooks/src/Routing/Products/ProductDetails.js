import React from 'react'
import { useParams } from 'react-router-dom'
const ProductDetails = () => {
   const pathParams= useParams()
   console.log(pathParams)
  return (
    <div>ProductDetails</div>
  )
}

export default ProductDetails