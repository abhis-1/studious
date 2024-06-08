import React from "react"
import Subjects from "./subjects/Subjects";
import Home from "./home/Home";
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import About from "./about/About";
import Contact from "./contact/Contact";

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subject" element={<Subjects />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />


      </Routes>
    </>
  )
}

export default App
