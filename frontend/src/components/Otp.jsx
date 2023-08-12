import React, { useState } from 'react';
import '../styles/otp.css';

const Otp = () => {
    const[otp,setOtp] = useState("");

  return (
    <div className='fullOtp'>
        <section className='optSection'>
            <div className='headingsotp'>
                <h2 className='headingOtp'>OTP VERIFICATION</h2>
                <p>Enter OTP recieved</p>
            </div>
            <form className='otpForm' onSubmit={(e) => e.preventDefault()}>
                <input type='text' placeholder='OTP' value={otp} onChange={(e) => setOtp(e.target.value)}/>
                <button className = 'otpButton' type='submit'>Verify</button>
            </form>
        </section>
    </div>
  )
}

export default Otp