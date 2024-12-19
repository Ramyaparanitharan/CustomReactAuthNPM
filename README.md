# Custom React Auth Component

## Introduction

A customizable and fully functional authentication module for React applications. This package includes a set of reusable components for implementing user authentication, including Login, Signup, and Forgot Password forms. The components are designed to be flexible, easy to integrate, and highly customizable to suit a variety of application needs.

## Features
1. Login Form: Allows users to log in with a username and password. Includes password visibility toggle and form validation.
2. Signup Form: Enables new users to create an account with fields for username, email, password, and terms agreement.
3. Forgot Password: A form for users to request a password reset link by entering their email address.
4. Update Password: A form enabling users to update password.
Customizable Styling: Easily modify the appearance and behavior of components using props and CSS.
5. State Management: Built-in state management using React hooks (useState) to handle form data, validation, and user interaction.
Responsive Layout: The components are designed to be responsive and work well across a variety of screen sizes.

## Demo
Check out the live demo on CodeSandbox to see how to use this package in action:
https://codesandbox.io/p/devbox/vzgdfn

## Installation
```bash
npm i customreactauthcomponent
```

Once installed, you can import and use the components in your application.

Here's an example of how to use the

```javascript
## Signup component

import React, { useState } from 'react';
import {Signup } from 'customreactauthcomponent';

const App = () => {
  const [signupFormData, setSignupFormData] = useState({
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  phone: '',
  agreeTerms: false,
});

const handleSignupChange = (e) => {
  const { name, value } = e.target;
  setSignupFormData((prevData) => ({
    ...prevData,
    [name]: value,
  }));
}
const handleSignupSubmit = (e) =>{
  e.preventDefault();
  alert("signup done successfully")
}

  return (
    <div>
  <Signup
               showWelcome = {true}
                visibilityOn = "../src/assets/images/visibilityon.svg"
                visibilityOff = "../src/assets/images/visibilityoff.svg"
                signupimg = "../src/assets/images/handwaving.svg"
               signupmessage="Signup"
               signupinformation= "Please Enter Your Details."
               handleSignupChange = {handleSignupChange}
               handleSignupSubmit = {handleSignupSubmit}
               signupFormData= {signupFormData}
               buttonStyles = {{ backgroundColor: '#ccc', 
                       color: '#000',              
                       padding: '10px', border: 'none',             
                       borderRadius: '5px', cursor: 'pointer'}}
             />
    </div>
  );
};

export default App;

```
```javascript
## Login component

import React, { useState } from 'react';
import { Login } from 'customreactauthcomponent';

const App = () => {
  const [loginFormData, setLoginFormData] = useState({ username: '', password: '' });

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData({ ...loginFormData, [name]: value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    alert("Login successful!");
  };

  return (
    <div>
      <Login 
      showWelcome = {true}
      signupimg = "../src/assets/images/handwaving.svg"
      visibilityOn = "../src/assets/images/visibilityon.svg"
      visibilityOff = "../src/assets/images/visibilityoff.svg"
      buttonStyles = {{ backgroundColor: '#ccc', 
                       color: '#000',              
                       padding: '10px', border: 'none',             
                       borderRadius: '5px', cursor: 'pointer'}}
      loginmessage="Login"
      logininformation="Please enter your username and password"
      handleLoginChange={handleLoginChange}
      handleLoginSubmit={handleLoginSubmit}
      loginformData={loginFormData}
      />
    </div>
  );
};

export default App;
```
```javascript
## Forgot Password component

import React, { useState } from 'react';
import { ForgotPassword } from 'customreactauthcomponent';

const App = () => {

const handleForgotPasswordChange = (e) => {
  const { name, value } = e.target;
  setForgotPassswordData((prevData) => ({
    ...prevData,
    [name]: value,
  }));
};

const handleForgotPasswordSubmit = (email) => {
  if (!email) {
    setEmailError('Email is required.');
    return;
  }
  SendLink(email);
};

const SendLink = (email) => {
  if (email) {
    alert('Password reset link sent to ' + email);
    setSendLink(true);
  }
};

const [forgotpasswordData, setForgotPassswordData] = useState({
  email: '',
});

  return (
    <div>
        <ForgotPassword
              showWelcome = {true}
              signupimg = "../src/assets/images/handwaving.svg"
              visibilityOn = "../src/assets/images/visibilityon.svg"
              visibilityOff = "../src/assets/images/visibilityoff.svg"
              buttonStyles = {{ backgroundColor: '#ccc', 
                       color: '#000',              
                       padding: '10px', border: 'none',             
                       borderRadius: '5px', cursor: 'pointer'}}
              forgotpasswordmessage="Forgot Password"
              forgotpasswordinformation="Please Enter Your Email We Will Send A Reset Link."
              handleForgotPasswordChange = {handleForgotPasswordChange}
              handleForgotPasswordSubmit = {handleForgotPasswordSubmit}
              SendLink={SendLink}
              forgotpasswordData  = {forgotpasswordData}
            />
    </div>
  );
};

export default App;
```
```javascript
# Update Password component

import React, { useState } from 'react';
import { UpdatePassword } from 'customreactauthcomponent';

const App = () => {

const [sendLink, setSendLink] = useState(false);
  const updatepasswordmessage = "Update Your Password";
  const updatepasswordinformation = "Please Enter A New Password";
 
  const [updatepasswordformData, setUpdatePasswordData] = useState({
    password: '',
  });

  const SetUpdatePassword = () => {
    alert("Password updated")
    const navigate = useNavigate();
    navigate('/login');
  }

  const handleUpdatePasswordChange = (e) =>{
    const { name, value } = e.target;
    setUpdatePasswordData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  return (
    <div>
         <UpdatePassword showWelcome = {true}
          signupimg = "../src/assets/images/handwaving.svg"
          updatepasswordmessage="Update Your Password"
          updatepasswordinformation="Please Enter A New Password"
          SetUpdatePassword = {SetUpdatePassword}
          buttonStyles = {{ backgroundColor: '#ccc', 
                       color: '#000',              
                       padding: '10px', border: 'none',             
                       borderRadius: '5px', cursor: 'pointer'}}       
          visibilityOn = "../src/assets/images/visibilityon.svg"
          visibilityOff = "../src/assets/images/visibilityoff.svg"
          updatepasswordformData = {updatepasswordformData}
          handleUpdatePasswordChange  = {handleUpdatePasswordChange}
          />
    </div>
  );
};

export default App;
```
## Props
Each component accepts customizable props for different configurations:

## Login:

1. loginmessage: Title of the login form.
2. logininformation: Additional information for the user (optional).
3. handleLoginChange: Function to handle form field changes.
4. handleLoginSubmit: Function to handle form submission.
5. loginformData: The state representing form data (username and password).
6. visibilityOn: Path to the image for password visibility on.
7. visibilityOff: Path to the image for password visibility off.
8. buttonStyles: Styles for the submit button.
  
## Signup:

1. signupmessage: Title of the signup form.
2. signupinformation: Additional information for the user (optional).
3. handleSignupChange: Function to handle form field changes.
4. handleSignupSubmit: Function to handle form submission.
5. signupFormData: The state representing form data (first name, last name, email,    password, etc.).
6. signupFormErrors: Errors to be displayed on the form.
7. visibilityOn: Path to the image for password visibility on.
8. visibilityOff: Path to the image for password visibility off.
9. buttonStyles: Styles for the submit button.

## Forgot Password:

1. forgotpasswordmessage: Title of the forgot password form.
2. forgotpasswordinformation: Additional instructions for the user (optional).
3. handleForgotPasswordChange: Function to handle form field changes.
4. handleForgotPasswordSubmit: Function to handle form submission.
5. forgotpasswordData: The state representing the email field.
6. SendLink: Function to send the reset link to the provided email.
7. visibilityOn: Path to the image for password visibility on.
8. visibilityOff: Path to the image for password visibility off.
9. buttonStyles: Styles for the submit button.

## Update Password

1. updatepasswordmessage: Title of the update password form.
2. updatepasswordinformation: Additional instructions for the user (optional).
3. SetUpdatePassword: Function to handle password update submission.
4. updatepasswordformData: The state representing the new password.
5. handleUpdatePasswordChange: Function to handle form field changes.
6. visibilityOn: Path to the image for password visibility on.
7. visibilityOff: Path to the image for password visibility off.
8. buttonStyles: Styles for the submit button.

## Contributing
Feel free to contribute to this project! If you encounter any issues or have suggestions for improvements, please open an issue or submit a pull request.

1. Fork the repository
2. Create your feature branch (git checkout -b feature/your-feature)
3. Commit your changes (git commit -am 'Add some feature')
4. Push to the branch (git push origin feature/your-feature)
5. Create a new Pull Request

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Feedback

We'd love to hear your thoughts on Custom React Auth Component! Please open an issue or contact us at ramyaparanitharan57@gmail.com


