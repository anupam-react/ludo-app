import React from 'react'
import './style.scss'
import { useNavigate } from 'react-router-dom'
import useLogin from '../../hooks/useLogin'
const LogIn = () => {
    const {
        email,
        setEmail,
        password,
        setPassword,
        handleLogin
    } = useLogin()
    const navigate = useNavigate('')
    return (
        <div className='login-container'>
            <div className='login-body'>
                <img src="../Group 71.png" alt="" className='logo' />
                <p className='text-color'>Welcome Back </p>
                <div className='form-container'>
                    <input type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="text" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button className='login-button' onClick={handleLogin}>
                    Login
                </button>
                <div className='form-footer'>
                    <span>Don’t have an account?  </span>
                    <span className='text1' onClick={() => navigate('/register')}>Sign up Here </span>
                </div>
            </div>

        </div>
    )
}

export default LogIn