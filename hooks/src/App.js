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
import Use from './useEfect-hook/use';
function App() {
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
  */}
  <Use/>
 
 
 <Footer/>
    </div>
  );
}

export default App;
