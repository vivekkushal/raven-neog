import './Signup.css';

import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div className="backdrop">
      <div className="center">
        <h1>Signup</h1>
        <form method="post">
          <div className="txt-field">
            <input type="text" required />
            <span></span>
            <label>First Name</label>
          </div>
          <div className="txt-field">
            <input type="text" required />
            <span></span>
            <label>Last Name</label>
          </div>
          <div className="txt-field">
            <input type="email" required />
            <span></span>
            <label>Email</label>
          </div>
          <div className="txt-field">
            <input type="password" required />
            <span></span>
            <label>Password</label>
          </div>
          <input type="submit" value="Create Account" />
          <div className="signup-link">
            Already a member? <Link to="/login">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
