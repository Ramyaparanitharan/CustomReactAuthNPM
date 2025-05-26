import './auth.css';
import React, { useState } from 'react';
import Notification from './common/Notification';
const Signup = (
  { showWelcome,
    signupimg, signupmessage, signupinformation, buttonStyles, signupFormData,
    visibilityOn, visibilityOff, signupapiurl
  }
) => {
  const initialSignupData = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    phone: '',
    agreeTerms: false,
  }

  const [signupFormData, setSignupFormData] = useState(initialSignupData);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibilty = () => {
    setShowPassword(!showPassword);
  };

  const passwordRegex = /^(?=[a-zA-Z])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...signupFormData,
    }
    try {
      const response = await fetch(signupapiurl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      if (response.ok) {
        alert("Signup successful! Email has been sent.");
      } else {
        alert(`Signup failed: ${result.message}`);
      }
    } catch (error) {
      console.error("Signup Error:", error);
      alert("Something went wrong. Please try again.");
    }
    setSignupFormData(initialSignupData);
  }

  return (
    <section className='d-flex md-signup-block'>
      <div className={`signup-section ${showWelcome ? 'signup-welcome show-welcome w-50' : 'no-welcome'}`}>
        {
          showWelcome && (
            <div className="signup-welcome-message">
              welcome
              <img src={signupimg} alt='handwave' />
              <h1 className='signup-heading'>{signupmessage}</h1>
              <p>{signupinformation}</p>
            </div>
          )
        }
      </div>
      <div>
        <form className='sign-up-form' onSubmit={handleSignupSubmit}>
          <div className='form-group'>
            <input
              type='text'
              name='firstname'
              id='firstname'
              value={signupFormData.firstname}
              placeholder=''
              onChange={handleSignupChange}
              required
            />
            <label htmlFor='firstname'>First Name</label>
          </div>
          <div className='form-group'>
            <input
              type='text'
              name='lastname'
              id='lastname'
              value={signupFormData.lastname}
              placeholder=''
              onChange={handleSignupChange}
              required
            />
            <label htmlFor='lastname'>Last Name</label>
          </div>
          <div className='form-group'>
            <input
              type='email'
              name='email'
              id='email'
              value={signupFormData.email}
              placeholder=''
              onChange={handleSignupChange}
              required
            />
            <label htmlFor='email'>Email</label>
          </div>
          <div className='form-group'>
            <div className='password-container'>
              <input
                type={showPassword ? 'text' : 'password'}
                name='password'
                id='password'
                value={signupFormData.password}
                placeholder=''
                onChange={handleSignupChange}
                required
                pattern={passwordRegex.source}
                title="Password must be at least 8 characters, contain 1 uppercase letter, 1 lowercase letter, 1 special character, and 1 number, and start with a letter."
              />
              <label htmlFor='password'>Password</label>
              <button type='button' className='eye-icon' onClick={togglePasswordVisibilty}>
                {showPassword ?
                  <img src={visibilityOn} alt="eyeopen" />
                  :
                  <img src={visibilityOff} alt="eyeclose" />
                }
              </button>
            </div>
          </div>
          <div className="form-group">
            <input
              type="tel"
              id="phone"
              name="phone"
              value={signupFormData.phone}
              onChange={handleSignupChange}
              placeholder=''
              required
              pattern="^\+?[0-9\s\-]{8,15}$"
              minLength="8"
              maxLength="15"
              title="Please enter a valid phone number."
            />
            <label htmlFor="phone">Phone</label>
          </div>
          <div>
            <div className='d-flex'>
              <input
                type="checkbox"
                name="agreeTerms"
                checked={signupFormData.agreeTerms}
                onChange={handleSignupChange}
                required
                className='custom-checkbox'
              />
              <span className='agreeterm'>I agree to the Terms and Conditions</span>
            </div>
          </div>
          <div>
            <button style={buttonStyles} type='submit'>Sign Up</button>
          </div>
        </form>
      </div>
      {notification && (
        <Notification
          notifymessage={notification.message}
          success={notification.success}
          error={notification.error}
        />
      )}
    </section>

  );
}

export default Signup;
