import React from 'react'
import { Link } from 'react-router-dom';
import './Register.css'

const Register = () => {
    return (
        <form action='#'>
            <div className='container'>
                <div className='login-box'>
                    <img className='brand-logo' src='https://gym.oceanwp.org/wp-content/uploads/2022/04/fitness-1.png' alt='logo' />
                    <input autoComplete="off" className='input-field' type="email" placeholder='Enter your email' />
                    <input autoComplete="off" className="input-field" type="text" placeholder='Enter your password' />
                    <input autoComplete="off" className="input-field" type="password" placeholder='Confirm Password' />
                    <button type='submit' className='input-field reg-btn'>Register</button>

                    <p className='newReg'> Already have an account?<Link to="/login"><span className='spanReg'> <u>Login</u></span></Link></p>
                </div>
            </div>
        </form>
    )
}

export default Register;
