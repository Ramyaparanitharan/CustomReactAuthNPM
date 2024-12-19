import React, {useState} from 'react';
import './auth.css';
  const UpdatePassword = (props) => {
  const { showWelcome, signupimg, updatepasswordmessage, updatepasswordinformation,
    buttonStyles, handleUpdatePasswordChange,SetUpdatePassword,visibilityOn, visibilityOff,
    updatepasswordformData } = props;
 const [showPassword, setShowPassword] = useState(false); 
  const togglePasswordVisibilty =() => {
    setShowPassword(!showPassword);  
  }
  return (
    <section className='d-flex'>
      <div className='w-50'>
        {showWelcome && (
          <div className="signup-welcome-message">
            <img src={signupimg} alt='handwave' />
            <h1 className='signup-heading'>{updatepasswordmessage}</h1>
            <p>{updatepasswordinformation}</p>
          </div>
        )}
      </div>
      <div className='w-40'>
        <form className='sign-up-form'>
        <div className='form-group'>
            <div className='password-container'>
            <input
              type={showPassword ? 'text' : 'password'}
              name='password'
              id='password'
              value={updatepasswordformData?.password}  
              placeholder=''
              onChange={handleUpdatePasswordChange}
              required
            />
            <label htmlFor='password'>Password</label>
            <button type='button' className='eye-icon'
            onClick={togglePasswordVisibilty}
            >
              {showPassword ? 
              (
               <img src={visibilityOn} alt="eyeopen"/>
              )
              :
              (
                <img src={visibilityOff} alt="eyeclose"/>
              )
              }
            </button>
            </div>
          </div>
          <div className='d-flex'>
         
               <button type='submit' onClick={SetUpdatePassword}
                style={buttonStyles}
                disabled={!updatepasswordformData.password}>
               Update Password
            </button>
               </div>
        </form>
      </div>
    </section>
  );
};

export default UpdatePassword;
