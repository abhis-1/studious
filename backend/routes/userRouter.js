require("dotenv").config();

const express = require("express");
const session = require("express-session");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const sgMail = require("@sendgrid/mail");

const JWT_SECRET = require("../config/jwtSecret");

const User = require("../models/user");
const { userSchema, loginSchema, validate } = require('../middleware/zodValidators');
const isNotLoggedIn = require("../middleware/isNotLoggedIn");

const router = express.Router();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000);
};


// Configure session middleware
router.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } 
}));

router.post("/signup", validate(userSchema), async (req, res) => {
  const { firstname, lastname, email, password, accountType, course, batch } = req.body;

  try {
    let existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: "Email is already registered" });
    }

    const otp = generateOTP();
    //Sending this otp message
    const msg = {
      to: email,
      from: process.env.EMAIL_FROM,
      subject: 'Verify your email',
      text: `Your OTP code is ${otp}`,
      html: `<strong>Your OTP code is ${otp}</strong>`,
    };

    await sgMail.send(msg);

    // Temporarily store user data and OTP in session
    req.session.tempUser = { firstname, lastname, email, password, accountType, course, batch, otp };
    res.status(200).json({ msg: "OTP sent successfully. Please verify your email." });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
  
});

router.post("/verify-otp", async (req, res) => {
  const { email, otp } = req.body;
  const tempUser = req.session.tempUser;

  if (!tempUser || tempUser.email != email) {
    return res.status(400).json({msg: "Invalid session. Please sign up again."});
  }
  if (tempUser.otp != otp) {
    return res.status(400).json({msg: "Invalid OTP. Please try again."});
  }

  try {
    //OTP is correct so creating new user
    const newUser = new User({
      firstname: tempUser.firstname,
      lastname: tempUser.lastname,
      email: tempUser.email,
      password: tempUser.password,
      accountType: tempUser.accountType,
      course: tempUser.course,
      batch: tempUser.batch
    });

    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(newUser.password, salt);
    await newUser.save();

    delete req.session.tempUser;

    const payload = { user: { id: newUser.id } };
    jwt.sign(payload, JWT_SECRET, { expiresIn: 360000 }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
    
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
})

// Login route
router.post("/signin", validate(loginSchema), async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "This user does not exists" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    // Create and return JWT
    const payload = { user: { id: user.id } };
    jwt.sign(payload, JWT_SECRET, { expiresIn: 360000 }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// signout need to be implemented on frontend -> simply delete the token

module.exports = router;
