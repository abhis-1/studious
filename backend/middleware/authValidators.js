const { z } = require('zod');

const userSchema = z.object({
  firstname: z.string().min(2, "First name must be at least 2 characters").max(50, "First name must be at most 50 characters"),
  lastname: z.string().min(2, "Last name must be at least 2 characters").max(50, "Last name must be at most 50 characters"),
  email: z.string().email("Please include a valid email").regex(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, "Email must be a valid @iic.ac.in address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const loginSchema = z.object({
  email: z.string().email("Please include a valid email").regex(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, "Email must be a valid @iic.ac.in address"),
  password: z.string().min(1, "Password is required")
});

const validate = (schema) => (req, res, next) => {
  try {
    schema.parse(req.body);
    next();
  } catch (e) {
    return res.status(400).json({ errors: e.errors.map(err => ({ msg: err.message })) });
  }
};

module.exports = {
  userSchema,
  loginSchema,
  validate
};