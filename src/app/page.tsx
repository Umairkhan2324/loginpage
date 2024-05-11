"use client";
// pages/login.tsx
import React, { useState } from 'react';
import Input from './components/Input';
import Button from './components/Button';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (username === '' || password === '') {
      setError('Please fill in all fields');
    } else {
      // Call API or perform login logic here
      console.log('Login successful!');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-white p-4 rounded shadow-md">
        <h1 className="text-3xl font-bold mb-4">Login</h1>
        <form onSubmit={handleSubmit}>
          <Input
            label="Username"
            placeholder="Enter your username"
            type="text"
            name="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            error={error}
          />
          <Input
            label="Password"
            placeholder="Enter your password"
            type="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            error={error}
          />
          <Button label="Login" onClick={handleSubmit} type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Login;