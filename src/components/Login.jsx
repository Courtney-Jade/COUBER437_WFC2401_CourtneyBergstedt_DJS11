import React, { useState } from 'react';
import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './login.css'; 

const Login = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent default form submission behavior (if using a form)
    
    // Perform authentication logic here (e.g., API call, local state check)
    // For demonstration, assume login is successful
    navigate('/showhome'); // Navigate to '/homepage' route upon successful login
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <form className="login-form" onSubmit={handleLogin}>
          <h2 className="login-title">Log In</h2>
          <div className="form-group">
            <input type="email" placeholder="Email" required className="input-field" />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Password" required className="input-field" />
          </div>
          <button type="submit" className="login-button">
            Log In
          </button>
          <p className="signup-link">
            New user? <a href="/signup" className="signup-link-text">Sign Up</a>
          </p>
          <div className="social-icons">
            <FaFacebook className="icon facebook" />
            <FaGoogle className="icon google" />
            <FaTwitter className="icon twitter" />
          </div>
          <p className="error-message">If an error occurs when filling out the form, a message will show here.</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
