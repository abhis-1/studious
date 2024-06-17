import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { BottomWarning } from "../components/BottomWarning";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signin() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignin = async () => {
    try {

      const response = await axios.post("http://localhost:3000/user/signin", {
        email,
        password,
      });


      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        navigate("/dashboard");
      }

    } catch (error) {

      console.error("Error signing in : ", error);

    }
  };
  

  return (
    <>
      <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
          <div className="rounded-lg bg-white w-96 text-center p-2 h-max px-4">
            <Heading label={"Sign in"} />
            <SubHeading
              label={"Enter your credentials to access your account"}
            />
            <InputBox
              onChange={(e) => setEmail(e.target.value)}
              placeholder="johndoe@iic.ac.in"
              label={"Email"} />


            <InputBox
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="123456"
              label={"Password"} />

            <div className="pt-4 mt-3">
              <Button
              onClick={handleSignin}
              label={"Sign in"} />
            </div>
            <BottomWarning
              label={"Don't have an account?"}
              buttonText={"Sign up"}
              to={"/signup"}
            />
          </div>
        </div>
      </div>

    </>
  );
};
