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
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();

  const handleSignup = async () => {
    let validationErrors = {};
    if (!firstName) validationErrors.firstName = "First name is required";
    if (!lastName) validationErrors.lastName = "Last name is required";
    if (!email) validationErrors.email = "Email is required";
    if (!password) validationErrors.password = "Password is required";

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
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password here"
                label={"Password"}
              />
            </div>
            {errors.password && (
              <div className="text-red-500 text-sm">{errors.password}</div>
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
