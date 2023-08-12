import React, { useState } from 'react'
import '../styles/forgot.css';

const Forgot = () => {
  const [email,setEmail] = useState("");
  return (

    <div className='fullForgot'>
      <section className='forgotSection'>
            <div className='headingsforgot'>
                <h2 className='headingForgot'>FORGOT PASSWORD</h2>
                <p>Please enter your Email</p>
            </div>
            <form className='forgotForm' onSubmit={(e) => e.preventDefault()}>
                <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <button className = 'forgotButton' type='submit'>Get OTP</button>
            </form>
        </section>
    </div>
  )
}

export default Forgot;