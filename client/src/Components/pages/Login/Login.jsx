import axios from 'axios';
import React, { useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../../context/Context';
import './Login.css';
import { toast } from 'react-toastify';

const Login = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context)

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({type: "LOGIN_START"});
    try {
      const res = await axios.post("https://blogappdot.herokuapp.com/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({
        type: "LOGIN_SUCCESS", 
        payload: res.data
      });
    } catch (err) {
      dispatch({type: "LOGIN_FAILURE"});
      toast.error("wrong credentials !")
    }
  };

  return (
    <div className='login'>
        <span className="loginTitle">Login here !</span>
        <form className='loginform' onSubmit={handleSubmit}>
            <label>Username</label>
            <input 
            className='loginInput' 
            type="text" 
            placeholder='Enter your username...' 
            autoFocus
            ref={userRef}
            />
            <label>Password</label>
            <input 
            className='loginInput' 
            type="password" 
            placeholder='Enter your password...' 
            ref={passwordRef}
            />
            <button className='loginButton' type='submit' disabled={isFetching}>Login {isFetching ? "⌛" : null}</button>
        </form>
        <button className='loginRegisterButton'><Link className='link2' to="/register">Register</Link></button>
    </div>
  )
}

export default Login