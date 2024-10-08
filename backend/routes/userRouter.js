require("dotenv").config();

const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const sgMail = require("@sendgrid/mail");

const JWT_SECRET = process.env.JWT_SECRET;

const User = require("../models/user");
const { userSchema, loginSchema, validate } = require('../middleware/authValidators');
const isNotLoggedIn = require("../middleware/isNotLoggedIn");


sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000);
};


const router = express.Router();
router.use(express.json());
router.use(cookieParser());
// router.use(cors({
//   credentials: true,
//   origin: process.env.CLIENT_URL
// }))
router.use(express.urlencoded({ extended: true }));


router.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { 
    httpOnly: true,
    maxAge: parseInt(process.env.SESSION_MAX_AGE),
    secure: false } 
}));

router.use((req,res,next) => {
  console.log(req.session);
  next();
})

router.post("/signup", validate(userSchema), async (req, res) => {
  const { firstname, lastname, email, password} = req.body;

  try{
    // Checking if user already exists
    let existingUser = await User.findOne({ email });
    if (existingUser) {
      req.session.errors = [{ msg: 'This Email is already registered. Please try another email.' }];
      return res.status(400).json({msg: "Email is already registered"});
    }

    const otp = generateOTP();
    const msg = {
      to: email,
      from: process.env.EMAIL_FROM,
      subject: 'Verify your email: OTP Generated by Studious',
      text: `Hello ${firstname}, Your OTP code is ${otp}`,
      html: `<strong>Hello ${firstname}, Your OTP code is ${otp}</strong>`,
    };
  
    try {
      await sgMail.send(msg);
      const message = `OTP sent to ${email} successfully. Please check and verify your email.`;
      // Store user data and OTP in session
      let tempUser = { firstname, lastname, email, password, otp };
      console.log(tempUser);
      req.session.tempUser = tempUser;
      res.status(200).send({ msg: message });
    } catch (err) {
      console.error('Error sending OTP:', err);
      req.session.errors = [{ msg: 'Failed to send OTP. Please try again later.' }];
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  } 
});

router.post("/verify-otp", async (req, res) => {
  const { otp } = req.body;
  try {
    const tempUser = req.session.tempUser;
    console.log(tempUser);
    if (tempUser.otp == otp) {
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
      req.session.tempUser = null;
      console.log(newUser.id, newUser);
  
      const payload = { user: { id: newUser.id } };
      jwt.sign(payload, JWT_SECRET, { expiresIn: parseInt(process.env.JWT_TOKEN_MAX_AGE) },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    }else {
      return res.status(400).json({msg: "Invalid OTP. Please try again."});
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
})

// Login route
router.post("/signin", validate(loginSchema), async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email }).lean();
    if (!user) {
      return res.status(403).json({ msg: "This user does not exists" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(403).json({ msg: "Invalid password" });
    }

    // Create and return JWT
    const payload = { user: { id: user.id } };
    jwt.sign(payload, JWT_SECRET, { expiresIn: parseInt(process.env.JWT_TOKEN_MAX_AGE) },
      (err, token) => {
        if (err) throw err;
        res.json({
          message:"Authentication Successful!",
          token
        });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(400).send("Something went wrong: Server error");
  }
});

module.exports = router;
