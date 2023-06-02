import './Navbar.css';

import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [navbarClass, setNavbarClass] = useState('');

  const toggleHandler = () => {
    setNavbarClass((prev) => (prev === '' ? ' active' : ''));
  };

  return (
    <nav className="navbar">
      <Link to="/" className="home-link">
        Raven
      </Link>
      <Link to="/search" className="search-link">
        Q
      </Link>
      <div className={`navbar-links${navbarClass}`}>
        <li>
          <Link to="/search" className="inner-search-link">
            Q
          </Link>
        </li>
        <li>
          <Link to="/wishlist" className="wishlist-link">
            Wish<sup></sup>
          </Link>
        </li>
        <li>
          <Link to="/cart" className="cart-link">
            Cart<sup></sup>
          </Link>
        </li>
        <li>
          <Link to="/login" className="login-link">
            Login
          </Link>
        </li>
      </div>
      <div onClick={toggleHandler} className="navbar-toggle">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
}

export default Navbar;
