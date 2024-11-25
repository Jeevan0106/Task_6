import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';


const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    if (name && email && password) {
      localStorage.setItem('user', JSON.stringify({ name,email, password }));
      alert('Registration successful!');
      navigate('/login');
    } else {
      alert('Please Enter The reqiurements.');
    }
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <input
        type="name"
        placeholder="Enter your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Enter your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter your Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
