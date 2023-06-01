import './Navbar.css';

import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <li>Raven</li>
      <li>
        <Link to="/login" className="login-link">
          Login
        </Link>
      </li>
      <li>Wishlist</li>
      <li>Cart</li>
    </nav>
  );
}

export default Navbar;
