import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Catalog from './pages/catalog';
import Product from './components/product';
import Footer from './components/footer';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <h1>Hello World from React!</h1>

      <Catalog></Catalog>

      <Footer></Footer>
    </div>
  );
}

export default App;
