import React from 'react'
import './Nav.css'
const Nav = () => {
  return (
    <div className="nav">
      <a href="/">Home</a>
      <a href="/profile">Profile</a>
      <a href="/todo">Todo</a>
      <a href="/chat">Chat</a>
      <a href="#">ContactUs</a>
    </div>
  )
}

export default Nav