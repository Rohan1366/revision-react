import React from 'react'
import { useState } from 'react'
function Todo  () {
    const [state , setState]=useState()

    const [myArray, setMyArray] = useState([]);
    const handleAdd = () => {
        setMyArray([...myArray, state]);
        setState('');
    };
   // console.log(...myArray)
    // const getInputData = (event)=>{
    //              setState(event.target.value)
    //       } 
  
//console.log(myarr)
  return (
    <div style={{textAlign:"center"}}>
     <h1>TODO</h1>
     <  input type="text" placeholder="enter somthing" id="input" onChange={(e)=>setState(e.target.value)}  />
     <button onClick={handleAdd}>Submit</button>
     <ol>
        {
            myArray.map((ele)=>{
                return <li>{ele}</li>
            })
        }
     </ol>

    </div>
    ) 
  {/*  const [name,setName] = useState("");
  var myArray = [];
  const handleAdd = () => {
    myArray = [...myArray,name]
    setName("")
  }
  return (
    <div className="App">
      <input placeholder="type a name" onChange={(e) => setName(e.target.value)}/>
      <button onClick={handleAdd}>add</button> 
      <button onClick={() => console.log(myArray)}>test</button>
      {myArray.map((n) => {
        return <h2>{n}</h2> 
      })}
    </div>
    ); */}
}

export default Todo