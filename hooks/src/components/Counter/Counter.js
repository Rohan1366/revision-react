import React , {useState} from 'react'
import './Counter.css'

const Counter = () => {
       const [count, setCount]=useState(0)
      
      function handleAdd(){
        console.log(count)
        setCount(count+1)
        console.log(count)
      }
      function handleReduce(){
        
         setCount(count-1)
      }

  return (
    <div className='counter'>
        <h1>Counter</h1>
        <h3>Counter is {count}</h3>
        <button onClick={handleAdd} >ADD</button>
        <button onClick={handleReduce}>REDUCE</button>


    </div>
  )
}

export default Counter