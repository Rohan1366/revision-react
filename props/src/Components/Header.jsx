import React from 'react'

const Header = (props) => {
  return (
    <div>
        <h1>{props.name}</h1>
        <h1>{props.age}</h1>
        <h1>{props.city}</h1>
    </div>
  )
}

export default Header