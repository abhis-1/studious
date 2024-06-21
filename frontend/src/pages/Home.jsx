import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useEffect } from 'react';
import { useState } from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function Home() {


  const [sticky, setSticky] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  return (
    <>
      <AppBar position={sticky ? "fixed" : "static"} sx={{ zIndex: 1300 }}>
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
            <Box sx={{ flexGrow: 1 }} />
            <Link to="/signin"

              id='signin-button'
            >
              Sign in
            </Link>
            <Box sx={{}} />
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
          <img src="../../public/about.jpg" />
        </div>
        <div className='w-1/2 mb-5 mt-3'>
          <h1 className='text-4xl font-bold mb-9 mt-20'>Welcome Student</h1>
          <span className='text-md font-md'>Studious, is a versatile and intuitive ed-tech platform designed to provide an immersive learning experience to students. <br /> We aim to transform traditional education by making it more accessible, engaging, personalized and collaborative. We wish to make learning, fun, accessible, organized for all. <br /> <br />
            Start Learning Today!</span><br /> <br /> <br />


        </div>

      </div>
      <Footer />
    </>

  );
}

export default Home;
