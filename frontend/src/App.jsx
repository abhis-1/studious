import React from "react";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin"
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Semester1 from "./pages/Semester1";

function App() {
  return (
    <>

      <Routes>

        <Route path="/signin" element={<Signin />} />
        <Route path="/" element={<Navigate to="/signin" />} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/semester/semester1" element={<Semester1 />} />

      </Routes>
    </>
  );
}

export default App;
