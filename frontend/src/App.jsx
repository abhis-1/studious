import Signup from "./pages/Signup";
import Signin from "./pages/Signin"
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import OtpVerify from "./pages/OtpVerify";
import SubjectPage from "./pages/SubjectPage";

function App() {
  return (
    <>

      <Routes>

        <Route path="/signin" element={<Signin />} />
        <Route path="/" element={<Navigate to="/signin" />} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/verify-otp" element={<OtpVerify />} />
        <Route path="/dashboard/subject/:id" element={<SubjectPage/>}/>

      </Routes>
    </>
  );
}

export default App;
