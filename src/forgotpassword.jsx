// ForgotPasswordForm.js
import React, { useState } from 'react';
import axios from 'axios';

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState('');

  const handleForgotPassword = async () => {
    try {
      // Send a request to the backend to initiate the password reset process
      await axios.post('http://localhost:8000/forgot-password/', { email });

      // Display a success message to the user
      alert('Password reset instructions sent to your email.');
    } catch (error) {
      // Handle error, display a message to the user, etc.
      console.error('Error:', error);
    }
  };

  return (
    <div className='border border-primary small p-5 rounded bg-white'>
      <form onSubmit={handleForgotPassword}>
      <h3 className='text-center'>Forgot Password</h3>
      <div className='text-center mb-2'>
      <label htmlFor="email" className="form-label">Enter Your Email</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className=" text-center small d-grid mt-2">
          <button className="btn btn-primary">Reset Password</button>
      </div>
      
      </form>
    </div>
  );
};

export default ForgotPasswordForm;
