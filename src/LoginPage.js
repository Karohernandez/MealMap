import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault(); // Prevent the form from submitting traditionally
    
    // Here you would replace this with your actual login logic, perhaps sending a request to your server
    const loginSuccessful = username === 'admin' && password === 'password'; // Placeholder condition

    if (loginSuccessful) {
      navigate('/home'); // Redirect to the home page on successful login
    } else {
      alert('Login failed: Incorrect username or password');
      // Here you can set state to show an error message instead of using alert in a real app
    }
  };

  return (
    <div className="login-container">
      <h2>Login to MealMap</h2>
      <form onSubmit={handleLogin} className="login-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input 
            type="text" 
            id="username" 
            value={username}
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" className="login-button">Log In</button>
      </form>
    </div>
  );
}

export default LoginPage;
