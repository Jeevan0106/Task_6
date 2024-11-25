import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.name === name && storedUser && storedUser.email === email && storedUser.password === password) {
      alert('Login successful!');
      navigate('/dashboard');
    } else {
      alert('Invalid credentials.');
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <input
        type="name"
        placeholder="Enter your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
