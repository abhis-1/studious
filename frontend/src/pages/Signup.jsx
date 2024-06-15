import React, { useState } from "react";
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
  const [accountType, setAccountType] = useState("");
  const [courseCategory, setCourseCategory] = useState("");
  const [batch, setBatch] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <div className=" h-full bg-slate-300 flex justify-center">
        <div className="flex flex-col justify-center py-20">
          <div className="rounded-lg bg-white w-96 text-center p-2 h-max px-6">
            <Heading label={"Sign up"} />

            <SubHeading label={"Enter your information to create an account"} />

            <InputBox
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              placeholder="John"
              label={"First Name"}
            />

            <InputBox
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              placeholder="Doe"
              label={"Last Name"}
            />

            <InputBox
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="johndoe@gmail.com"
              label={"Email"}
            />

            <InputBox
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="123456"
              label={"Password"}
            />

            {/* <InputBox placeholder="Student/Teacher" label={"Account Type"} /> */}

            <div className="text-left mt-3">
              <label className="text-md font-bold text-gray-900 text-left px-2 py-1 mt-3 ">
                Account Type
              </label>
              <select
                value={accountType}
                onChange={(e) => setAccountType(e.target.value)}
                className="mt-1 block w-full py-2 px-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-md"
              >
                <option value="student" className="text-md">
                  Student
                </option>
                <option value="teacher" className="text-md">
                  Teacher
                </option>
              </select>
            </div>

            <div className="text-left mt-3">
              <label className="text-md font-bold text-gray-900 text-left px-2 py-1 mt-3">
                Select Course
              </label>
              <select
                value={courseCategory}
                onChange={(e) => setCourseCategory(e.target.value)}
                className="mt-1 block w-full py-2 px-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-md"
              >
                <option value="Electronics" className="text-md ">
                  Electronics
                </option>
                <option value="Informatics" className="text-md">
                  Informatics
                </option>
              </select>
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
                <option value="2021-23" className="text-md ">
                  2021-2023
                </option>
                <option value="2022-24" className="text-md ">
                  2022-2024
                </option>
                <option value="2023-25" className="text-md">
                  2023-2025
                </option>
              </select>
            </div>

            <div className="pt-4">
              <Button
                // onClick={async () => {
                //     const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
                //         email,
                //         firstName,
                //         lastName,
                //         password,
                //         accountType,
                //         courseCategory,
                //         batch
                //     });
                //     localStorage.setItem("token", response.data.token)
                //     navigate("/dashboard")
                //}}
                label={"Sign up"}
              />
            </div>

            <BottomWarning
              label={"Already have an account?"}
              buttonText={" Sign in"}
              to={"/signin"}
            />
          </div>
        </div>
      </div>
    </>
  );
};
