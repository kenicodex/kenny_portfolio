import React, { useState } from 'react'
import './portfolio.css'
import { Box, Typography, Button, Grow, Slide, Fade, Zoom, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import Navbar from "../Semantics/Navbar.tsx";
import { motion } from "framer-motion";
function Portfolio() {
  const ref = React.useRef(null)
  const [bool, setBool] = useState([false, false])
  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > window.innerHeight / 2 && window.scrollY < window.innerHeight * 1.3) {
        setBool([true, false])
      } else if (window.scrollY > window.innerHeight * 1.3) {

        setBool([true, true])
      }
    })
  }, []);

  const know = [{ name: "UI/UX Translation" }, { name: "API Integration" }, { name: "Redux & Context Use" }, { name: "Material UI" }, { name: "Fixing and Debugging" }]
  return (
    <Box sx={{ backgroundColor: "auto" }} >
      <Navbar />
      {/* <Grow in={true} timeout={2000}> */}
      <Box fontSize={{ xs: "40px", lg: "70px" }} fontFamily="martel" letterSpacing="5px" className='a'
        sx={{
          height: { xs: "500px", md: "100vh" }, color: "white", display: "flex", flexDirection: { xs: "column", lg: "row-reverse" }, justifyContent: "space-around"
          , backgroundImage: "url(https://images.unsplash.com/photo-1629904853716-f0bc54eea481?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)",
          backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat"
        }} >
        {/* <Grow in={true} timeout={2000}><img className="w-sm-100 pt-4 w-lg-50 theimg" src={process.env.PUBLIC_URL + '/images/developer.webp'} alt="" /></Grow> */}
        <Box sx={{ mt: "80px", width: { xs: "100%", lg: "50%" }, pl: { xs: "20px", lg: "200px" }, textAlign: { xs: "left", lg: "left" } }} >
          <Slide direction='right' in={true} timeout={2000} children={'div'}>
            <Typography ref={ref} fontSize={{ xs: "30px", lg: "45px" }} fontWeight="600" letterSpacing="5px"> Hey there, {bool}</Typography></Slide>
          <Grow in={true} timeout={3000}>
            <Typography className='text-primary' fontSize={{ xs: "40px", lg: "55px" }} letterSpacing="5px" fontWeight="600">I'm Kenny</Typography></Grow>
          {/* <Slide direction='left' in={true} timeout={2000} ><Button variant='outline' onClick={() => { window.location.assign("/todolist") }} sx={{ fontSize: "30px" }} className="btn-outline btn-outline-primary">
            Click to like my website
          </Button></Slide> */}
          <div className='pb-2'>
            <Fade in={true} timeout={2000}><a href="https://wa.me/+2348085503290?text=I'm%20interested%20in%20your%20web%20services.%20My%20name%20is%20_______">
              <Button variant='white' sx={{ fontSize: { xs: "30px", lg: "50px" } }}><i class="fa fa-whatsapp"></i> </Button></a></Fade>
            <Fade in={true} timeout={2000}><a href="https://tel+2348056499531"><Button variant='white' sx={{ fontSize: { xs: "30px", lg: "50px" } }}> <i class="fa fa-phone"></i></Button></a></Fade>
            <Fade in={true} timeout={2000}><a href="https://github.com/kenicodex"><Button variant='white' sx={{ fontSize: { xs: "30px", lg: "50px" } }}> <i class="fa fa-github"></i></Button></a></Fade>
            <Fade in={true} timeout={2000}><a href="mailto:kehindesalaudeen222@gmail.com"><Button variant='white' sx={{ fontSize: { xs: "30px", lg: "50px" } }}> <i class="fa fa-envelope"></i> </Button></a></Fade>
          </div>
        </Box>
      </Box>
      {/* </Grow> */}
      <Divider />
      <Box sx={{ height: "70vh", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center" }} className='bg-white text-center'>
        {/* <Slide direction='up' in={bool[0]} timeout={2000}> */}
        <motion.div initial={{  opacity: 0, scale: 0 }} whileInView={{  opacity: 1, scale: 1,}} viewport={{ once: false }} transition={{ duration: 1, ease: 'easeIn', staggerChildren:1}}>

          <Typography fontSize={{ xs: "40px", lg: "60px" }} fontWeight="300" sx={{ pt: "30px", px: { xs: "20px" } }} fontFamily="martel">
            Full Stack Web Developer
          </Typography>
          {/* </Slide> */}
          <Typography fontSize={{ xs: "20px", lg: "30px" }} fontWeight="300" sx={{ pt: "30px", }} fontFamily="martel">
            Html 5, CSS3 and Javascript,Typescript, Jquery, ReactJs and NodeJS
          </Typography>
          {/* <Slide direction='down' in={bool[0]} timeout={2000}> */}
          <Typography sx={{ my: "20px" }} id="projects">Here are some projects i'm working on</Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }} >
            <Link to="/todolist"><Button variant="outlined" color="primary" className='m-1' sx={{ width: "150px" }}>Todolist</Button></Link>
            <Link to="/movies"><Button variant="outlined" color="primary" className='m-1' sx={{ width: "150px" }}>Movies</Button></Link>
            <Link to="/fakestore"><Button variant="outlined" color="primary" className='m-1' sx={{ width: "150px" }}>Ecommerce</Button></Link>
          </Box>
        </motion.div>
      </Box>
      <Divider />

      <Box sx={{ display: "flex", height: "100vh", flexDirection: { xs: "column", lg: "row" }, color: "white", justifyContent: "center", px: { xs: "auto", lg: "50px" }, mt: "40px" }}>
        {know.map(({ name }) => {
          return (<Zoom in={bool[1]} timeout={3000}>
            <Box sx={{
              display: "flex", flexDirection: "column", justifyContent: 'space-around', my: "20px", bgcolor: 'black', textAlign: "center",
              width: { xs: "80%", lg: "25%" }, mx: { xs: "10%", lg: "10px" }, borderRadius: "8px", fontSize: "30px", height: "200px"
            }}>
              {name} </Box></Zoom>)
        })}
      </Box>
    </Box>
  );
}
export default Portfolio;