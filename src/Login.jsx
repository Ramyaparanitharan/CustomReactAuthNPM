import React, { useState } from 'react';
import './auth.css';
import { useSearchParams } from "react-router-dom";
import Notification from './common/Notification';
const Login = (props) => {
  const { showWelcome, signupimg, loginmessage,
    logininformation,
    buttonStyles,
    visibilityOn, visibilityOff } = props;

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibilty = () => {
    setShowPassword(!showPassword);
  }
  const [loginFormData, setLoginFormData] = useState({ username: '', password: '' });
  const [token, setToken] = useState('');
  const [searchParams] = useSearchParams();
  const [notification, setNotification] = useState(false);

  useEffect(() => {
    const tokenFromURL = searchParams.get("token");
    if (tokenFromURL) {
      setToken(tokenFromURL);
    }
  }, [searchParams]);

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData({ ...loginFormData, [name]: value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...loginFormData, token }),
      });

      const result = await response.json();
      if (response.ok) {
        setWelcomeMsg(`Welcome ${result.firstname} ${result.lastname}!`);
      } else {
        setNotification({ message: "Login failed.", success: false, error: true });
      }
    } catch (error) {
      setNotification({ message: "Error Occured.", success: false, error: true });
    }
  };

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
              value={loginFormData?.username}
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
                value={loginFormData?.password}
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
                    <img src={visibilityOn} alt="eyeopen" />
                  )
                  :
                  (
                    <img src={visibilityOff} alt="eyeclose" />
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
      {notification && (
        <Notification
          notifymessage={notification.message}
          success={notification.success}
          error={notification.error}
        />
      )}
    </section>
  );
};

export default Login;
