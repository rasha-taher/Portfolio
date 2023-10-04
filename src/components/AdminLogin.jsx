import React, { useState } from 'react';
import './LoginForm.css';
import { useNavigate } from 'react-router-dom';
import Dashboard from './Dashboard';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:5000/Portfolio/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      if (response.ok) {
        alert('Admin logged in');
        console.log('Login successful');
        navigate('/dashboard'); 
      } else {
        const data = await response.json();
        setError(data.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('Internal Server Error');
    }
  };
  
  return (
    <div className="login-form-container">
      <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <label>
          Username:<br></br>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Enter your Email' />
        </label>
        <label>
          Password:<br></br>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter your Password' />
        </label>
        <button type="submit" style={{ backgroundColor: '#3066BE' }} 
        preventDefault>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
