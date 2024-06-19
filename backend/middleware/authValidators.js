const { z } = require('zod');

const userSchema = z.object({
  firstname: z.string().min(2, "First name must be at least 2 characters").max(50, "First name must be at most 50 characters"),
  lastname: z.string().min(2, "Last name must be at least 2 characters").max(50, "Last name must be at most 50 characters"),
  email: z.string().email("Please include a valid email").regex(/^[a-zA-Z0-9._%+-]+@iic\.ac\.in$/, "Email must be a valid @iic.ac.in address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  accountType: z.enum(["Student", "Teacher"], { errorMap: () => ({ message: "Account type can only be Student or Teacher" }) }),
  course: z.literal("Informatics", { errorMap: () => ({ message: "Course must be Informatics" }) }),
  batch: z.string().regex(/^(20\d{2})-(20\d{2})$/, "Batch must be in the format YYYY-YYYY")
});

const loginSchema = z.object({
  email: z.string().email("Please include a valid email").regex(/^[a-zA-Z0-9._%+-]+@iic\.ac\.in$/, "Email must be a valid @iic.ac.in address"),
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