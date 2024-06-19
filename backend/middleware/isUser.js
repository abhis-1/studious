// write middle ware function that checks if the user is a user or not. If the user is a user, then the request should be passed to the next middleware. If the user is not a user, then the request should be rejected with a status code of 403. The middleware function should be exported as isUser.
const isUser = (req, res, next) => {
  // write your code here
  if (req.session && req.session.user && !req.session.user.isAdmin) {
    next();
  } else {
    res.status(403).json({ message: "not allowed" });
  }
};