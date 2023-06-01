import './App.css';
import Mockman from 'mockman-js';

import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Products from './components/products/Products';
import SingleProduct from './components/singleProduct/SingleProduct';
import Cart from './components/cart/Cart';
import Wishlist from './components/wishlist/Wishlist';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Error from './components/error/Error';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} alt="mockBee logo" width="180" height="180" />
        <h1 className="brand-title">
          Welcome to <span>mockBee!</span>
        </h1>
        <p className="brand-description">
          Get started by editing <code>src/App.js</code>
        </p>
        <div className="links">
          <a
            href="https://mockbee.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Explore mockBee
          </a>
          <a
            href="https://mockbee.netlify.app/docs/api/introduction"
            target="_blank"
            rel="noreferrer"
          >
            API Documentation
          </a>
          <a
            href="https://github.com/neogcamp/mockBee"
            target="_blank"
            rel="noreferrer"
          >
            Contribute
          </a>
        </div>
      </header> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
