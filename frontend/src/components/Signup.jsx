import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../styles/signup.css';
import UserLogin from './UserLogin';

const Signup = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

  return (
    <div className='fullLogin'>
        <section className='loginSection'>
            <div className='headings'>
                <h2 className='headingLogin'>SIGN UP</h2>
                <p>Please enter username, email & password</p>
            </div>
            <form className='loginForm' onSubmit={(e) => e.preventDefault()}>
                <input type='text' placeholder='Username' value={name} onChange={(e) => setName(e.target.value)}/>
                <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                <div className='links'>
                    <Link to={UserLogin}>Already have an account?</Link>
                </div>
                <button className = 'loginButton' type='submit'>Sign Up</button>
            </form>
        </section>
    </div>
  )
}

export default Signup;