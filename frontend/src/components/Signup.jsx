import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../styles/signup.css';
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import { signupRoute } from '../api/APIRoutes';

const Signup = () => {
    const navigate = useNavigate();
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const toastOptions = {
        position: "top-right",
        autoClose: 4000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark"
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(handleValidation()){
            const config = {
                headers: {
                    "Content-Type": "application/json",
                }
            }
            await axios.post(signupRoute,{
                name,
                email,
                password
            },config).then(
                (data) => {
                    toast.success("Successfully Logged In",toastOptions);
                    navigate("/")
                }).catch((err) => {
                 toast.error(err.response.data.message,toastOptions);
            });
        }
    };


    const handleValidation = () => {
        if(name.length === 0){
            toast.error("Username required!",toastOptions);
            return false;
        }
        else if(name.length !==0 && name.length <= 3){
            toast.error("Username must be greater than 3 characters!",toastOptions);
            return false;
        }
        else if(email.length === 0){
            toast.error("Email required!",toastOptions);
            return false;
        }
        else if(password.length === 0){
            toast.error("Password required!",toastOptions);
            return false;
        }
        else if(password.length !== 0 && password.length < 8){
            toast.error("Password must be atleast 8 characters!",toastOptions);
            return false;
        }
        return true;
    }

  return (
    <div className='fullLogin'>
        <section className='loginSection'>
            <div className='headings'>
                <h2 className='headingLogin'>SIGN UP</h2>
                <p>Please enter username, email & password</p>
            </div>
            <form className='loginForm' onSubmit={handleSubmit}>
                <input type='text' placeholder='Username' value={name} onChange={(e) => setName(e.target.value)}/>
                <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                <div className='links'>
                    <Link to={"/login"}>Already have an account?</Link>
                </div>
                <button className = 'loginButton' type='submit'>Sign Up</button>
            </form>
        </section>
        <ToastContainer/>
    </div>
  )
}

export default Signup;