import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Register.css';
import { ToastContainer, toast } from 'react-toastify';

const Register = () => {
  const [username, setUsername] = useState([]);
  const [password, setPassword] = useState([]);
  const [email, setEmail] = useState([]);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/auth/register", {
        username,
        email,
        password
      });
      res.data && window.location.replace("/login")
    } catch (err) {
      setError(true);
      toast.error("Username or Email is already in use !!!");
    }
  }
  return (
    <div className='register'>
        <span className="registerTitle">Register here !</span>
        <form className='registerform' onSubmit={handleSubmit}>
            <label>Username</label>
            <input 
            className='registerInput'
            required
            type="text" placeholder='Enter your username...' 
            autoFocus
            onChange={e => setUsername(e.target.value)} 
            />
            <label>Email</label>
            <input 
            className='registerInput' 
            required
            type="email" 
            placeholder='Enter your email...' 
            onChange={e => setEmail(e.target.value)} 
            />
            <label>Password</label>
            <input 
            className='registerInput' 
            required
            type="password" 
            placeholder='Enter your password...' 
            onChange={e => setPassword(e.target.value)} 
            />
            <button className='registerButton' type='submit'>Register</button>
        </form>
        <button className='registerLoginButton'><Link className='link2' to="/login">Login</Link></button>
        <ToastContainer />
    </div>
  )
}

export default Register