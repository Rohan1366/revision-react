import React from 'react'

const D = (props) => {
  return (
    <div>
        <h1>
            D
        </h1>
        <p>name :{props.info.name}</p>
        <p>city :{props.info.city}</p>
        <p>age :{props.info.age}</p>
    </div>
  )
}

export default D