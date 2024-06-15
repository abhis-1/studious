// models/User.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstname: {
      type: String,
      required: [true, "First name is required"],
      trim: true,
      minlength: [2, "First name must be at least 2 characters"],
      maxlength: [50, "First name must be at most 50 characters"],
    },
    lastname: {
      type: String,
      required: [true, "Last name is required"],
      trim: true,
      minlength: [2, "Last name must be at least 2 characters"],
      maxlength: [50, "Last name must be at most 50 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters"],
    },
    accountType: {
      type: String,
      required: [true, "Account type is required"],
      enum: {
        values: ["Student", "Teacher"],
        message: "Account type can only be Student or Teacher",
      },
    },
    course: {
      type: String,
      required: [true, "Course is required"],
      enum: {
        values: ["Informatics"],
        message: "Course can only be Informatics",
      },
    },
    batch: {
      type: String,
      required: [true, "Batch is required"],
      match: [/^(20\d{2})-(20\d{2})$/, "Batch must be in the format YYYY-YYYY"],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
