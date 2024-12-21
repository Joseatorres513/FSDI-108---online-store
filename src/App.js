import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <h1>Hello World from React!</h1>
    </div>
  );
}

function footer() {
  return (
    <div className="Footer">
      <Navbar></Navbar>
      <h3>"Created by: Jose_Torres"</h3>
    </div>
  )
}

export default App;
