import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";

export default function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [accountType, setAccountType] = useState("");
  const [batch, setBatch] = useState("");
  const navigate = useNavigate();

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


  useEffect(() => {
    const storedAccountType = localStorage.getItem("accountType");
    const storedBatch = localStorage.getItem("batch");
    if (storedAccountType)
      setAccountType(storedAccountType);
    if (storedBatch)
      setBatch(storedBatch);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("accountType");
    localStorage.removeItem("batch");
    navigate("/signin");
  }


  return (
    <>
      <div
        className={`w-full fixed top-0 left-0 right-0 z-50 ${sticky ? "sticky-navbar shadow-md duration-300 transition-all ease-in-out" : ""
          }`}
        style={{ backgroundColor: 'rgb(25,118,210)', color: 'white' }}
      >
        <div className="navbar max-w-screen-2xl container mx-auto md:px-20 px-4">
          <div className="navbar-start">

            <a className="text-3xl font-bold cursor-pointer no-underline">Studious</a>
          </div>

          <div className="navbar-end space-x-2 flex item-center">
            {/* {accountType && ( */}
              <div className="flex items-center space-x-2">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-black text-white" title={accountType}>
                  {accountType === "teacher" ? "T" : "S"}
                </div>
                {/* <div className="flex items-center justify-center w-20 h-10 text-lg rounded-md bg-black text-white" title={batch}>{batch}</div> */}

              </div>
            {/* )} */}
            <div className="navbar-center hidden lg:flex">

            </div>
            <div>
              <a
                onClick={handleLogout}
                className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-900 cursor-pointer text-lg no-underline">
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}