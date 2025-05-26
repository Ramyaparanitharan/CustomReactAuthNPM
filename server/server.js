const express = require('express');
const nodemailer = require('nodemailer');
const jwt = require("jsonwebtoken");

const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const fakeUserStore = {}; 
app.post('/api/signup', async (req, res) => {
  const { email, firstname, lastname, password } = req.body; 
  const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });
  fakeUserStore[email] = { firstname, lastname, email, password, token };

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email, // Can be @gmail.com, @yopmail.com, etc.
    subject: 'Signup Successful!',
    html: `<h2>Welcome ${firstname} ${lastname} !</h2><p>Your signup was successful.</p>
    <p><a href="http://localhost:3000/login?token=${token}">Click here to LOGIN</a></p>`,
  };
  
  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully', token });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email' });
  }
});

app.post('/api/login', async (req, res) => {
  const { username, password, token } = req.body;

  console.log("Login request received:", req.body);

  try {
    const user = fakeUserStore[username];

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    if (user.token !== token) {
      return res.status(401).json({ message: "Invalid token" });
    }

    return res.status(200).json({
      message: "Login successful",
      firstname: user.firstname,
      lastname: user.lastname,
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Login failed" });
  }
});


app.listen(5000, () => console.log('Backend running at http://localhost:5000'));
