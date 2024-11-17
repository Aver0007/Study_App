import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const Navigate= useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/register', { username, password });
      Navigate('/login');
    } catch (error) {
      console.error('Registration failed:', error.response.data);
    }
  };

  return (
    <div className='bg-teal-900 w-full h-screen flex justify-center items-center'>
      <div className='form-container bg-white p-8 rounded-lg shadow-lg w-96'>
        <div className='head font-bold text-2xl text-black mb-6 text-center'>
          <h1>Registration Form:</h1>
        </div>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <label htmlFor='name' className='block text-sm font-medium text-gray-700'><strong>Name:</strong></label>
            <input type='text' id='name' placeholder='Enter Name' className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm' 
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor='password' className='block text-sm font-medium text-gray-700'><strong>Password:</strong></label>
            <input type='password' id='password' placeholder='Enter Password' className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          <div>
            <button type='submit' className='w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-700 hover:bg-teal-800'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;


