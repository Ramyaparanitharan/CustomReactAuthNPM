import React from 'react';
import './auth.css';

const ForgotPassword = (props) => {
  const {
    showWelcome,
    signupimg,
    forgotpasswordmessage,
    forgotpasswordinformation,
    SendLink,
    handleForgotPasswordChange,
    handleForgotPasswordSubmit,
    forgotpasswordData,
    buttonStyles
  } = props;

  const isEmailValid = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  return (
    <section className="d-flex">
      <div className="w-50">
        {showWelcome && (
          <div className="signup-welcome-message">
            <img src={signupimg} alt="handwave" />
            <h1 className="signup-heading">{forgotpasswordmessage}</h1>
            <p>{forgotpasswordinformation}</p>
          </div>
        )}
      </div>

      <div className="w-40">
        <form className="sign-up-form" onSubmit={handleForgotPasswordSubmit}>
          <div className="form-group">
            <input
              type="email"
              name="email"
              id="email"
              value={forgotpasswordData.email}
              onChange={handleForgotPasswordChange} 
              placeholder=""
              required
            />
            <label htmlFor="email">Email</label>
          </div>

          <div className="d-flex">
            <span className="w-40">
              <a href="/login">Return To Login</a>
            </span>
            <button
              type="submit"
              onClick={() => SendLink(forgotpasswordData.email)}
              style={buttonStyles}
              disabled={!forgotpasswordData.email || !isEmailValid(forgotpasswordData.email)} 
            >
              Send Reset Link
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ForgotPassword;
