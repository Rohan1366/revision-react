import logo from './logo.svg';
import './App.css';
import Footer from './components/footer/Footer';
import Counter from './components/Counter/Counter';
import List from './components/List/List';
import Todo from './components/Todo/Todo';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Inputto from './components/Parent-Child/Inputto';
import Texx from './components/child-Parent/Texx';
import Parent from './components/siblings/Parent'
import Use from './useEfect-hook/Use';
import { useState } from 'react';
import Use2 from './useEfect-hook/Use2';
import Timer from './useRef/Timer';
import Dom from './useRef/Dom';
import UnComtrolleForm from './useRef/Form/UnComtrolleForm';
import ControlleForm from './useRef/Form/ControlleForm';
import A from './UseContext-hook/A';
function App() {
  const [state, setState]=useState(true)
  return (
    <div className="App">
      {/*<h1>Hello</h1>
      <List/>
      <Counter/>
  <Footer/>*/}
  <Nav/>
 {/* <Todo/>
 <Profile/>
 <Inputto/>
 <Texx/>
 <parent/>
  <Parent/>
  <Use/>
  <Use2/>
  */}
  
  {/*
  {state ? <Use /> : <Use2 />}
      <div style={{ textAlign: "center" }}>
        <button
          onClick={() => {
            setState(true);
          }}
        >
          Show Card
        </button>
        <button
          onClick={() => {
            setState(false);
          }}
        >
          Show Table
        </button>
        </div>
         <Timer/>
         <Dom/> 
         <UnComtrolleForm/>
         <ControlleForm/>
         <A/>*/}
      
 <Footer/>
    </div>
  );
}

export default App;
