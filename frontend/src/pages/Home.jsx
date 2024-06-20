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
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function Home() {

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
    
    navigate("/signin");

  };

  

  return (
    <>
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
          {/* <Link to="/signin" className='flex ml-90 bg-black text-white rounded-md p-3 font-semibold hover:bg-white hover:text-black'>SIGN IN</Link> */}
          <Box sx={{ flexGrow: 1 }} />
          <Link to="/signin"
            
            id='signin-button'
          >
            Sign in
          </Link>
          <Box sx={{  }} />
          <Link to="/signup"
            
            id='signin-button'
          >
            Sign up
          </Link>
        </Toolbar>
        
      </Container>
      
    </AppBar>
    <div className='flex jusify-center'>
        <div className='w-1/2 mb-5 mt-3'>
            <img src="../../public/about.jpg"  />
        </div>
        <div className='w-1/2 mb-5 mt-3'>
        <h1 className='text-4xl font-bold mb-9 mt-20'>Welcome Student</h1>
        <span className='text-md font-md'>Studious, is a versatile and intuitive ed-tech platform designed to provide an immersive learning experience to students. <br/> We aim to transform traditional education by making it more accessible, engaging, personalized and collaborative. We wish to make learning, fun, accessible, organized for all. <br/> <br/>
        Start Learning Today!</span><br/> <br/> <br/>
        

        </div>

    </div>
    <Footer/>
    
    </>
    
  );
}

export default Home;



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
})
);
