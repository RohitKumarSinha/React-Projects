// Login.js
import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import { loginStyles } from './styles/LoginStyles';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // You can perform login logic with email and password here
    // For simplicity, we are redirecting to /todos for now
    login(() => {
      navigate('/todos');
    });
  };

  return (
    <div style={loginStyles.container}>
      <div style={loginStyles.card}>
        <h2 style={loginStyles.title}>Login</h2>
        <form style={loginStyles.form} onSubmit={(e) => e.preventDefault()}>
          <div style={loginStyles.formGroup}>
            <label htmlFor="email" style={loginStyles.label}>
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={loginStyles.input}
            />
          </div>

          <div style={loginStyles.formGroup}>
            <label htmlFor="password" style={loginStyles.label}>
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={loginStyles.input}
            />
          </div>

          <button onClick={handleLogin} style={loginStyles.button}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
