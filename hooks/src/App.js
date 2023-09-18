import logo from './logo.svg';
import './App.css';
import Footer from './components/footer/Footer';
import Counter from './components/Counter/Counter';
import List from './components/List/List';
import Todo from './components/Todo/Todo';
import Nav from './Routing/Nav/Nav';
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
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './Routing/Home/Home';
import PagenotFound from './Routing/PagenotFound/PagenotFound';
import Products from './Routing/Products/Products';
import Jewelery from './Routing/Products/Jewelery';
import Electronics from './Routing/Products/Electronics';
import Category from './Routing/Products/Category';
import Mens from './Routing/Products/Mens';
import ProductDetails from './Routing/Products/ProductDetails';
function App(props) {
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
         <Routes>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/todo' element={<Todo/>}/>
            <Route path='/chat' element={<Parent/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='*' element={<PagenotFound/>}/>
            <Route path='/products' element={<Products/>}  >
              <Route path="" element={<Navigate to="electronics" />} />
              <Route path='jewelery' element={<Jewelery/>} />
              <Route path='electronics' element={<Electronics/>} />
              <Route path='mens clothing' element={<Mens/>} />
            </Route>
            <Route path='/productDetails/:id' element={<ProductDetails/>}/>
         </Routes>
      
 <Footer/>
    </div>
  );
}

export default App;
