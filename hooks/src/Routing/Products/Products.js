import React from 'react'
import './Product.css'
import { Link, Outlet } from 'react-router-dom'
const Products = () => {
  return (
    <div className='productContainer'>
        <div>
         <Link to='jewelery'>jewelery</Link>
         <Link to='electronics'>electronics</Link>
         <Link to='mens clothing'>men's clothing</Link>
         <Link to='womens clothing'>women's clothing</Link>
        </div>

        <div>
            <Outlet/>
        </div>
    </div>
  )
}

export default Products