import './Navbar.css';

import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <li>Raven</li>
      <li>
        <NavLink to="/login" className="login-link">
          Login
        </NavLink>
      </li>
      <li>Wishlist</li>
      <li>Cart</li>
    </nav>
  );
}

export default Navbar;
