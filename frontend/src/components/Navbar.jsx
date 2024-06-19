// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import React from "react";

// export default function Navbar() {
//   const [sticky, setSticky] = useState(false);
//   const [accountType, setAccountType] = useState("");
//   const [batch, setBatch] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 0) {
//         setSticky(true);
//       } else {
//         setSticky(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);


//   useEffect(() => {
//     const storedAccountType = localStorage.getItem("accountType");
//     const storedBatch = localStorage.getItem("batch");
//     if (storedAccountType)
//       setAccountType(storedAccountType);
//     if (storedBatch)
//       setBatch(storedBatch);
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("accountType");
//     localStorage.removeItem("batch");
//     navigate("/signin");
//   }


//   return (
//     <>
//       <div
//         className={`w-full fixed top-0 left-0 right-0 z-50 ${sticky ? "sticky-navbar shadow-md duration-300 transition-all ease-in-out" : ""
//           }`}
//         style={{ backgroundColor: 'rgb(25,118,210)', color: 'white' }}
//       >
//         <div className="navbar max-w-screen-2xl container mx-auto md:px-20 px-4">
//           <div className="navbar-start">

//             <a className="text-3xl font-bold cursor-pointer no-underline " style={{fontFamily: "Playwrite PL"}}>Studious</a>
//           </div>

//           <div className="navbar-end space-x-2 flex item-center">
//             {/* {accountType && ( */}
//               <div className="flex items-center space-x-2">
//                 <div className="flex items-center justify-center w-10 h-10 rounded-full bg-black text-white" title={accountType}>
//                   {accountType === "teacher" ? "T" : "S"}
//                 </div>
//                 {/* <div className="flex items-center justify-center w-20 h-10 text-lg rounded-md bg-black text-white" title={batch}>{batch}</div> */}

//               </div>
//             {/* )} */}
//             <div className="navbar-center hidden lg:flex">

//             </div>
//             <div>
//               <a
//                 onClick={handleLogout}
//                 className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-900 cursor-pointer text-lg no-underline">
//                 Logout
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

function Navbar() {

  const navigate = useNavigate();

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // if (window.scrollY > 0) {
      //   setSticky(true);
      // } else {
      //   setSticky(false);
      // }
      setSticky(window.scrollY>0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  const handleLogout = () => {
    // Logic for logging out the user
    console.log("Logout button clicked");

    localStorage.removeItem("token");
    navigate("/signin");

  };

  return (
    <AppBar position={sticky?"fixed":"static"} sx={{zIndex:1300}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#"
            id='website-logo'
          >
            Studious
          </Typography>
          <div id='navbar-searchBar'>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </div>
          <Box sx={{ flexGrow: 1 }} />
          <Button
            onClick={handleLogout}
            id='logout-button'
          >
            Logout
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));