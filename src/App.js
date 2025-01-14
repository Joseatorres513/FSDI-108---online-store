import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Catalog from './pages/catalog';
import Product from './components/product';
import Footer from './components/footer';
import Homepage from './pages/homepage';
import About from './pages/about';
import Admin from './pages/admin';
import Cart from './pages/cart';


import { BrowserRouter, Route, Routes } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import GlobalProvider from './state/globalProvider';

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar></Navbar>
          <h1>Welcome to Sports Essentials!</h1>

          <Routes>
            <Route path="/" element={<Homepage></Homepage>} />
            <Route path="/catalog" element={<Catalog></Catalog>} />
            <Route path="/about" element={<About></About>} />
            <Route path="/admin" element={<Admin></Admin>} />
            <Route path="/cart" element={<Cart></Cart>} />

          </Routes>

        

          <Footer></Footer>
        </div>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
