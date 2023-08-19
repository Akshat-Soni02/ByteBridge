import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/userlogin.css';
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useDispatch, useSelector} from 'react-redux';
import { loginUser } from '../../Store/UserSlice';
import { clearError } from '../../Store/UserSlice';

const UserLogin = () => {
    const navigate = useNavigate();
    const [name,setName] = useState("");
    const [password,setPassword] = useState("");

    const toastOptions = {
        position: "top-right",
        autoClose: 4000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark"
    }


    const{loading,error} = useSelector((state) => state.user);

    useEffect(() => {
        if (error) {
          toast.error(error, toastOptions);
          dispatch(clearError());
        }
      }, [error]);


    const dispatch = useDispatch();
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(handleValidation()){
            let userCredentials = {
                name,
                password
            }
            dispatch(loginUser(userCredentials)).then((result)=>{
                if(result.payload){
                    setName("");
                    setPassword("");
                    navigate("/");
                }
            });

        }
    };

    const handleValidation = () => {
        if(name.length === 0 || password.length === 0){
            toast.error("Username and Password is required!",toastOptions);
            return false;
        }
        return true;
    }

  return (
    <div className='fullLogin'>
        <section className='loginSection'>
            <div className='headings'>
                <h2 className='headingLogin'>LOGIN</h2>
                <p>Please enter your username and password</p>
            </div>
            <form className='loginForm' onSubmit={handleSubmit}>
                <input type='text' placeholder='Username' value={name} onChange={(e) => setName(e.target.value)}/>
                <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                <div className='links'>
                    <Link to={"/forgotpassword"}>Forgot password?</Link>
                    <Link to={"/signup"}>Need an account?</Link>
                </div>
                <button className = 'loginButton' type='submit'>Login</button>
            </form>
        </section>
        <ToastContainer/>
    </div>
  )
}

export default UserLogin;