import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
const Use = () => {

  const [state , setState]=useState("https://digitalsynopsis.com/wp-content/uploads/2014/06/supercar-wallpapers-bugatti-3.jpg")
  function handle(){
    setState('https://th.bing.com/th/id/OIP._m4cSsae1MrQkzBQYyP5DAHaE7?pid=ImgDet&rs=1')
    localStorage.setItem("first",10)
}
useEffect(()=>{
    console.log("First")
    return localStorage.removeItem("first")
},[])
    return (
    <div style={{width:"450px", textAlign:"center"  }}>
        <h1>useEfect</h1>
        <img src={state} width="100%" height="100%" />
        <button onClick={handle}>Change</button>
    </div>
  )
}

export default Use