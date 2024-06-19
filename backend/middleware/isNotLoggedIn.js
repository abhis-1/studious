const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

const isNotLoggedIn = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(403).json({ message: "not allowed 1" });
  }
  const token = authHeader.split(" ")[1];
  if (!token) {
    return next();
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.email = decoded.email;
    return res.status(400).json({ msg: "You are already logged in." });
  } catch (err) {
    next();
  }
};

module.exports = isNotLoggedIn;
