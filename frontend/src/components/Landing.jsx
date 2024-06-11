import React from "react";
import Login from "./Loginform";
import Footer from "./Footer";

export default function Landing() {
  return (
    <>
      <div
        className="max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50"
        style={{ backgroundColor: "rgb(25,118,210)", color: "white" }}
      >
        <div className="navbar">
          <div className="navbar-start">
            <a className="text-2xl font-bold cursor-pointer">Studious</a>
          </div>
        </div>
      </div>

      <div className="min-h-screen flex flex-col md:flex-row">
        <div className="w-full flex items-center justify-center md:p-0">
            <Login />
        </div>
      </div>
      <Footer />
    </>
  );
}