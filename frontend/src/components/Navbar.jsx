import { useState, useEffect } from "react";
import React from "react";

export default function Navbar() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const Navitems = (
    <>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/subject">Courses</a>
      </li>
      <li>
        <a href="/about">About</a>
      </li>
    </>
  );

  return (
    <>
      <div
        className={`w-full fixed top-0 left-0 right-0 z-50 ${
          sticky ? "sticky-navbar shadow-md duration-300 transition-all ease-in-out" : ""
        }`}
        style={{ backgroundColor: 'rgb(25,118,210)', color: 'white' }}
      >
        <div className="navbar max-w-screen-2xl container mx-auto md:px-20 px-4">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-blue-500 rounded-box w-52"
              >
                {Navitems}
              </ul>
            </div>
            <a className="text-3xl font-bold cursor-pointer">Studious</a>
          </div>

          <div className="navbar-end space-x-3">
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1 text-lg">{Navitems}</ul>
            </div>
            <div>
              <a className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-900 cursor-pointer text-lg">
                Signin
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}