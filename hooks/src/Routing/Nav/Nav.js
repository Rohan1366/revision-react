import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/todo">Todo</Link>
      <Link to="/chat">Chat</Link>
      <Link to="#">ContactUs</Link>
    </div>
  )
}

export default Nav