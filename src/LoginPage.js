import React, { useState } from 'react';
import './LoginPage.css';


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div className="login-container">
      <div className="login-image-section">
        <div className="login-image">Meal Map</div>
      </div>
      <div className="login-form-section">
        <h1>MealMap</h1>
        <p className='welcome-text'>Welcome Back!</p>
        <p className='login-text'>Log In</p>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <a href="#forgot" className="forgot-password-link">Forgot Password</a>
          <button type="submit" className="login-button">Login</button>
        </form>
        <div className="sign-up-section">
          <span>Or </span><a href="#signup" className="sign-up-link"> Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

