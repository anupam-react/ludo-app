import React from 'react'
import '../LogIn/style.scss'
import { useNavigate } from 'react-router-dom'
import useRegister from '../../hooks/useRegister'
const Register = () => {
    const {
        firstName,
        setFirstName,
        lastName,
        setLastName,
        phone,
        setPhone,
        email,
        setEmail,
        password,
        setPassword,
        handleRegister
    } = useRegister()
    const navigate = useNavigate('')
    return (
        <div className='login-container'>
            <div className='login-body'>
                <img src="../Group 71.png" alt="" className='logo' />
                <p className='text-color'>Welcome to Ludo, Please Register </p>
                <div className='form-container'>
                    <input type="text" placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    <input type="text" placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    <input type="text" placeholder='Mobile Number' value={phone} onChange={(e) => setPhone(e.target.value)} />
                    <input type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button className='login-button' onClick={handleRegister}>
                    Register
                </button>
                <div className='form-footer'>
                    <span>Already have an account?   </span>
                    <span className='text1' onClick={() => navigate('/')}>Login Here  </span>
                </div>
            </div>

        </div>
    )
}

export default Register