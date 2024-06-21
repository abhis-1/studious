import React, { useState } from "react";
import { Button } from "../components/Button";
import { InputBox } from "../components/InputBox";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";


export default function OtpVerify() {

 

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { successMessage } = location.state || {};

  const handleVerify = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/user/verify-otp",
        {
          otp,
        },
        { withCredentials: true }
      );

      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Error verifying OTP: ", error);
    }
  };

  return (
    <>
      <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
          <div className="rounded-lg bg-white w-96 text-center p-2 h-max px-4">
            <h1 className="text-xl font-bold mb-3">OTP Verification</h1>
            {successMessage && (
              <div className="text-green-500 text-sm mb-4">
                {successMessage}
              </div>
            )}
            <InputBox
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              label="OTP"
            />
            <div className="pt-4 mt-3">
              <Button onClick={handleVerify} label="Verify" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}