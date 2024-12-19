import React, {useState} from 'react';
import './auth.css';

  const Login = (props) => {
  const { showWelcome, signupimg, loginmessage, 
          logininformation, handleLoginChange,
          buttonStyles, loginformData, 
          visibilityOn, visibilityOff, handleLoginSubmit} = props;
 const [showPassword, setShowPassword] = useState(false); 
  const togglePasswordVisibilty =() =>{
    setShowPassword(!showPassword);  
  }

  return (
    <section className='d-flex'>
      <div className='w-50'>
        {showWelcome && (
          <div className="signup-welcome-message">
            <img src={signupimg} alt='handwave' />
            <h1 className='signup-heading'>{loginmessage}</h1>
            <p>{logininformation}</p>
          </div>
        )}
      </div>
      <div className='w-40'>
        <form className='sign-up-form' onSubmit={handleLoginSubmit}>
          <div className='form-group'>
            <input
              type='text'
              name='username'
              id='username'
              placeholder=''
              value={loginformData?.username}  
              onChange={handleLoginChange}
              required
            />
            <label htmlFor='username'>Username</label>
          </div>

          <div className='form-group'>
            <div className='password-container'>
            <input
              type={showPassword ? 'text' : 'password'}
              name='password'
              id='password'
              value={loginformData?.password}  
              placeholder=''
              onChange={handleLoginChange}
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
            <div className='d-flex w-50'>
            <input
              type="checkbox"
              name="rememberMe"
              className='remember-checkbox'
            />
        <span className='remember-me'>Remember Me</span>
        </div>
                <span className='w-50 text-end'>
                <a href="/forgot-password">Forgot Password</a>
               </span>
               </div>
          <div>
            <button type='submit' style={buttonStyles}>
              Login
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
