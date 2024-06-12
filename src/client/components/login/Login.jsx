import React from 'react';
import './Login.css';

const Login = ({ isOpen, onClose }) => {
  if (!isOpen || isOpen === false) return null;

  return (
    <div className="overlay">
      <div className='ring'>
        <i></i>
        <i></i>
        <i></i>
        <i></i>

        <div className="login-container">
          <div className="closeBtn" onClick={onClose}><button>X</button></div>
          <h2>Login</h2>
          <p>Have an account?</p>
          <form>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" name="username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" />
            </div>
            <button type="submit">Sign In</button>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" name="remember" /> Remember Me
              </label>
              <a href="#">Forgot Password</a>
            </div>
            <p>— Or Sign In With —</p>
            <div className="social-login">
              <a href="https://www.facebook.com/taovietduc" className="facebook">Facebook</a>
              <a href="https://www.instagram.com/taovietduc_" className="instagram">Instagram</a>
              <a href="https://www.tiktok.com/@taovietduc_" className="tiktok">Tiktok</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

