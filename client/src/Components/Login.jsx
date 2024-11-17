import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const response = await axios.post('http://localhost:5000/login', { username, password });
      const response = await axios.post('https://focus-hb01.onrender.com/login', { username, password });
      localStorage.setItem('token', response.data.token);
      navigate('/dashboard');
    } catch (error) {
      console.error('Login failed', error.response?.data?.message);
      alert("wrong password");
    }
  };

  const navigateToRegister = () => {
    navigate('/register');
  };

  const navigateToMain = () => {
    navigate('/');
  }

  return (
    <div className='bg-teal-900 w-full h-screen flex justify-center items-center'>
      <div className='form-container bg-white p-8 rounded-lg shadow-lg w-96'>
        <div className='head font-bold text-2xl text-black mb-6 text-center'>
          <h1>Login Form:</h1>
        </div>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <label htmlFor='username' className='block text-sm font-medium text-gray-700'><strong>Username:</strong></label>
            <input
              type='text'
              id='username'
              placeholder='Enter Username'
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm text-gray-900'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor='password' className='block text-sm font-medium text-gray-700'><strong>Password:</strong></label>
            <input
              type='password'
              id='password'
              placeholder='Enter Password'
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm text-gray-900'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='flex justify-between items-center'>
            <button
              type='submit'
              className='w-full bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 focus:outline-none focus:bg-teal-600'
            >
              Login
            </button>
            <button
              type='button'
              className='w-full bg-gray-300 text-gray-800 py-2 px-4 rounded-md ml-2 hover:bg-gray-400 focus:outline-none'
              onClick={navigateToRegister}
            >
              Register
            </button>
            <button type='button' className='w-full bg-gray-300 text-gray-800 py-2 px-4 rounded-md ml-2 hover:bg-gray-400 focus:outline-none'
            onClick={navigateToMain}
            >
            Home
            </button> 
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;