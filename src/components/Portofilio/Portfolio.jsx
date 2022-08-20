import React from 'react'
import './portfolio.css'
import { Box, Typography, Button, Grow, Slide } from '@mui/material';
// import { Parallax, ParallaxLayer } from '@react-spring/parallax'
function Portfolio() {
  return (
    <Box sx={{ backgroundColor: "auto", textAlign: "center" }} >
      {/* <Grow in={true} timeout={2000}> */}
      <Box fontSize={{ xs: "40px", lg: "70px" }} fontWeight="800" fontFamily="martel" letterSpacing="5px" className='a'
        sx={{
          height: "100vh", color: "black", backgroundRepeat: "no-repeat", backgroundSize: "cover", display: "flex", flexDirection: "column", justifyContent: "center",
          backgroundImage: "url(https://img.freepik.com/premium-photo/young-programmers_236854-21690.jpg?size=626&ext=jpg&ga=GA1.2.1618634385.1660341906)", opacity: "1",
        }} >
        <Slide direction='right' in={true} timeout={2000} children={'div'}>
          <Typography fontSize={{ xs: "50px", lg: "80px" }}> Hey there,</Typography></Slide>
        <Grow in={true} timeout={3000}><Typography style={{ color: "blue" }} fontSize={{ xs: "50px", lg: "80px" }}>I'm Kenny</Typography></Grow>
        <div>
          <a href="https://wa.me/+2348085503290?text=I'm%20interested%20in%20your%20web%20services.%20My%20name%20is%20_______">
            <Button variant='white'><i style={{ fontSize: "50px" }} class="fa fa-whatsapp"></i> </Button></a>
          <a href="https://tel+2348056499531"><Button variant='white'> <i style={{ fontSize: "50px" }} class="fa fa-phone"></i></Button></a>
          <a href="mailto:kehindesalaudeen222@gmail.com"><Button variant='white'> <i style={{ fontSize: "50px" }} class="fa fa-envelope"></i> </Button></a>
        </div>

        <Slide direction='left' in={true} timeout={2000} ><Button onClick={() => { window.location.assign("/todolist") }} sx={{ color: "black", fontSize: "30px" }}>
          View Projects
        </Button></Slide>
      </Box>
      {/* </Grow> */}
      <Box sx={{ height: "100vh", position: "relative", bgcolor: "green", display: "flex", flexDirection: "column", justifyContent: "center" }} >
        <Slide direction='up' in={true} timeout={2000}>
          <Typography fontSize={{ xs: "40px", lg: "60px" }} fontWeight="300" sx={{ pt: "30px", px: { xs: "20px" } }} fontFamily="martel">
            Full Stack Web Developer
          </Typography>
        </Slide>
        <Slide direction='down' in={true} timeout={2000}>
          <Typography fontSize={{ xs: "30px", lg: "40px" }} fontWeight="300" sx={{ pt: "30px", }} fontFamily="martel">
            Html 5, CSS3 and Javascript, Jquery and ReactJs
          </Typography>
        </Slide>
      </Box>
      <Grow in={true} timeout={2000}>
        <Box sx={{ display: "flex", height: "100vh", flexDirection: { xs: "column", lg: "row" }, color: "white", flexWrap: "wrap", justifyContent: "space-between", px: { xs: "auto", lg: "50px" }, mt: "40px" }}>
          <Box sx={{ my: "20px", bgcolor: 'black', width: { xs: "80%", lg: "25%" }, mx: { xs: "auto" }, borderRadius: "8px", p: "20px", fontSize: "30px" }}>UI/UX Translation          </Box>
          <Box sx={{ my: "10px", bgcolor: 'black', width: { xs: "80%", lg: "25%" }, mx: { xs: "auto" }, borderRadius: "8px", p: "20px", fontSize: "30px" }}>API Integration</Box>
          <Box sx={{ my: "10px", bgcolor: 'black', width: { xs: "80%", lg: "25%" }, mx: { xs: "auto" }, borderRadius: "8px", p: "20px", fontSize: "30px" }}>Redux & Context Use</Box>
          <Box sx={{ my: "10px", bgcolor: 'black', width: { xs: "80%", lg: "25%" }, mx: { xs: "auto" }, borderRadius: "8px", p: "20px", fontSize: "30px" }}>Component Reusability</Box>
          <Box sx={{ my: "10px", bgcolor: 'black', width: { xs: "80%", lg: "25%" }, mx: { xs: "auto" }, borderRadius: "8px", p: "20px", fontSize: "30px" }}>Fixing and Debugging</Box>
        </Box>
      </Grow>
    </Box>
  );
}

export default Portfolio;
