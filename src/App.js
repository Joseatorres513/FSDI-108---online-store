import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Catalog from './pages/catalog';
import Product from './components/product';
import Footer from './components/footer';
import Homepage from './pages/homepage';
import About from './pages/about';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar></Navbar>
        <h1>Hello World from React!</h1>

        <Routes>
          <Route path="/" element={<Homepage></Homepage>} />
          <Route path="/catalog" element={<Catalog></Catalog>} />
          <Route path="/about" element={<About></About>} />
        </Routes>

        

        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
