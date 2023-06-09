import './Login.css';

import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="backdrop">
      <div className="center">
        <h1>Login</h1>
        <form method="post">
          <div className="txt-field">
            <input type="text" required />
            <span></span>
            <label>Username</label>
          </div>
          <div className="txt-field">
            <input type="password" required />
            <span></span>
            <label>Password</label>
          </div>
          <input type="submit" value="Login" />
          <input className="guest-user" type="submit" value="Guest User" />
          <div className="signup-link">
            Not a member? <Link to="/signup">Signup</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
