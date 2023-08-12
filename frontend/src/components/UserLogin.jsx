import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Forgot from './Forgot';
import Signup from './Signup';
import '../styles/userlogin.css';

const UserLogin = () => {
    const [name,setName] = useState("");
    const [password,setPassword] = useState("");

  return (
    <div className='fullLogin'>
        <section className='loginSection'>
            <div className='headings'>
                <h2 className='headingLogin'>LOGIN</h2>
                <p>Please enter your username and password</p>
            </div>
            <form className='loginForm' onSubmit={(e) => e.preventDefault()}>
                <input type='text' placeholder='Username' value={name} onChange={(e) => setName(e.target.value)}/>
                <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                <div className='links'>
                    <Link to={"/Forgot"}>Forgot password?</Link>
                    <Link to={"/Signup"}>Need an account?</Link>
                </div>
                <button className = 'loginButton' type='submit'>Login</button>
            </form>
        </section>
    </div>
  )
}

export default UserLogin;