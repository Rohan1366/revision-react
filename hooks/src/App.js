import logo from './logo.svg';
import './App.css';
import Footer from './components/footer/Footer';
import Counter from './components/Counter/Counter';
import List from './components/List/List';
import Todo from './components/Todo/Todo';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
function App() {
  return (
    <div className="App">
      {/*<h1>Hello</h1>
      <List/>
      <Counter/>
  <Footer/>*/}
  <Nav/>
 {/* <Todo/> */}
 <Profile/>
 <Footer/>
    </div>
  );
}

export default App;
