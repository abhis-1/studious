import { useState } from "react";
import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { BottomWarning } from "../components/BottomWarning";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [accountType, setAccountType] = useState("");
  const [course, setCourse] = useState("");
  const [batch, setBatch] = useState("");
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();

  const handleSignup = async () => {
    let validationErrors = {};
    if (!firstName) validationErrors.firstName = "First name is required";
    if (!lastName) validationErrors.lastName = "Last name is required";
    if (!email) validationErrors.email = "Email is required";
    if (!password) validationErrors.password = "Password is required";
    if (password !== confirmPassword)
      validationErrors.confirmPassword = "Passwords do not match";
    if (!accountType) validationErrors.accountType = "Account type is required";
    if (!course) validationErrors.course = "Course is required";
    if (!batch) validationErrors.batch = "Batch is required";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/user/signup", {
        firstname: firstName,
        lastname: lastName,
        email,
        password,
        accountType,
        course,
        batch,
      },
    { withCredentials: true });

      setSuccessMessage(response.data.msg);
      console.log(successMessage);

      navigate("/verify-otp", { state: { successMessage, email } });
    } catch (error) {
      if (error.response && error.response.data && error.response.data.errors) {
        const backendErrors = {};
        error.response.data.errors.forEach((err) => {
          backendErrors[err.path[0]] = err.message;
        });
        setErrors(backendErrors);
      } else {
        console.error("Error signing up: ", error);
        setErrors({ general: "Signup failed. Please try again." });
      }
    }
  };

  return (
    <>
      <div className="h-full bg-slate-300 flex justify-center">
        <div className="flex flex-col justify-center py-20">
          <div className="rounded-lg bg-white w-96 text-center p-2 h-max px-6">
            <Heading label={"Sign up"} />
            <SubHeading label={"Enter your information to create an account"} />
            {successMessage && (
              <div className="text-green-500 text-sm mb-4">
                {successMessage}
              </div>
            )}

            <InputBox
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="John"
              label={"First Name"}
            />
            {errors.firstName && (
              <div className="text-red-500 text-sm">{errors.firstName}</div>
            )}

            <InputBox
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Doe"
              label={"Last Name"}
            />
            {errors.lastName && (
              <div className="text-red-500 text-sm">{errors.lastName}</div>
            )}

            <InputBox
              onChange={(e) => setEmail(e.target.value)}
              placeholder="johndoe@iic.ac.in"
              label={"Email"}
            />
            {errors.email && (
              <div className="text-red-500 text-sm">{errors.email}</div>
            )}

            <div className="relative">
              <InputBox
                type={showPassword ? "text" : "password"}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password here"
                label={"Password"}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center px-4"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {errors.password && (
              <div className="text-red-500 text-sm">{errors.password}</div>
            )}

            <div className="relative">
              <InputBox
                type={showPassword ? "text" : "password"}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password here"
                label={"Confirm Password"}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center px-4"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {errors.confirmPassword && (
              <div className="text-red-500 text-sm">
                {errors.confirmPassword}
              </div>
            )}

            <div className="text-left mt-3">
              <label className="text-md font-bold text-gray-900 text-left px-2 py-1 mt-3">
                Account Type
              </label>
              <select
                value={accountType}
                onChange={(e) => setAccountType(e.target.value)}
                className="mt-1 block w-full py-2 px-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-md"
              >
                <option value="" disabled>
                  Select Account Type
                </option>
                <option value="Student" className="text-md">
                  Student
                </option>
                <option value="Teacher" className="text-md">
                  Teacher
                </option>
              </select>
              {errors.accountType && (
                <div className="text-red-500 text-sm">{errors.accountType}</div>
              )}
            </div>

            <div className="text-left mt-3">
              <label className="text-md font-bold text-gray-900 text-left px-2 py-1 mt-3">
                Select Course
              </label>
              <select
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                className="mt-1 block w-full py-2 px-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-md"
              >
                <option value="" disabled>
                  Select Course
                </option>
                <option value="Informatics" className="text-md">
                  Informatics
                </option>
              </select>
              {errors.course && (
                <div className="text-red-500 text-sm">{errors.course}</div>
              )}
            </div>

            <div className="text-left mt-3">
              <label className="text-md font-bold text-gray-900 text-left px-2 py-1 mt-3">
                Select Batch
              </label>
              <select
                value={batch}
                onChange={(e) => setBatch(e.target.value)}
                className="mt-1 block w-full py-2 px-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-md"
              >
                <option value="" disabled>
                  Select Batch
                </option>
                <option value="2022-2024" className="text-md">
                  2022-2024
                </option>
                <option value="2023-2025" className="text-md">
                  2023-2025
                </option>
                <option value="2024-2026" className="text-md">
                  2024-2026
                </option>
              </select>
              {errors.batch && (
                <div className="text-red-500 text-sm">{errors.batch}</div>
              )}
            </div>

            {errors.general && (
              <div className="text-red-500 text-sm">{errors.general}</div>
            )}

            <div className="pt-4">
              <Button onClick={handleSignup} label={"Sign up"} />
            </div>

            <BottomWarning
              label={"Already have an account?"}
              buttonText={"Sign in"}
              to={"/signin"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
