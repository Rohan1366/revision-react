import React from 'react'
import D from './D'
const C = (props) => {
  return (
    <div>
        <h1>C</h1>
        <D info={props.data} />
    </div>
  )
}

export default C