import React from 'react'
import './App.css'
import { Box, Typography, Button } from '@mui/material';

function App() {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Box sx={{ backgroundColor: "white" }} >
      {/* <Box sx={{ width: "100vw", height: "400px", zIndex: "100" }} >
            <img src="" width="100%" height="100%" alt="" /></Box> */}
        <Box fontSize={{ xs: "70px", lg: "100px",color:"inherit" }} fontWeight="800" fontFamily="martel" letterSpacing="5px" className='a'
          sx={{height: "400px", color: "white", pt:"150px",backgroundSize:"cover",backgroundRepeat:"no-repaet", backgroundColor:"", backgroundBlendMode:"",
          backgroundImage:"url(https://img.freepik.com/premium-photo/young-programmers_236854-21690.jpg?size=626&ext=jpg&ga=GA1.2.1618634385.1660341906)", opacity: ".7", }} >
          Hey there, I'm <strong style={{ color: "black", }}>Kenny</strong> <br />
          <a href=" https://wa.me/08085503290?text=I'm%20interested%20in%20your%20web%20services.%20My%20name%20is%20_______">
          <Button variant='white'><i style={{ fontSize: "50px" }} class="fa fa-whatsapp"></i> </Button></a>
          <a href="tel+2348056499531"><Button variant='white'> <i style={{ fontSize: "50px" }} class="fa fa-phone"></i></Button></a>
            <a href="mailto:kehindesalaudeen222@gmail.com"><Button variant='white'> <i style={{ fontSize: "50px" }} class="fa fa-envelope"></i> </Button></a>
        </Box>
        <Box sx={{ position:"absolute", top:"", backgroundColor: "lightgrey", mx: { xs: "auto", lg: "100px" } }} >
          <Typography fontSize={{ xs: "40px", lg: "60px" }} fontWeight="300" sx={{ pt: "30px", }} fontFamily="martel">
            Frontend Web Developer
          </Typography>
          <Typography fontSize={{ xs: "30px", lg: "40px" }} fontWeight="300" sx={{ pt: "30px", }} fontFamily="martel">
            Skilled in Html 5, CSS3 and Javascript, Jquery and ReactJs
          </Typography>
          <Box sx={{ display: "flex", flexDirection: { xs: "column", lg: "row" },color:"white", flexWrap: "wrap", justifyContent: "space-between", px: { xs: "auto", lg: "50px" }, mt: "40px" }}>
            <Box sx={{ my: "20px", backgroundColor: 'black', width: { xs: "80%", lg: "25%" }, mx: { xs: "auto" }, borderRadius: "8px", p: "20px", fontSize: "30px" }}>UI/UX Translation
            </Box>
            <Box sx={{ my: "10px", backgroundColor: 'black', width: { xs: "80%", lg: "25%" }, mx: { xs: "auto" }, borderRadius: "8px", p: "20px", fontSize: "30px" }}>API Integration</Box>
            <Box sx={{ my: "10px", backgroundColor: 'black', width: { xs: "80%", lg: "25%" }, mx: { xs: "auto" }, borderRadius: "8px", p: "20px", fontSize: "30px" }}>Redux & Context Use</Box>
            <Box sx={{ my: "10px", backgroundColor: 'black', width: { xs: "80%", lg: "25%" }, mx: { xs: "auto" }, borderRadius: "8px", p: "20px", fontSize: "30px" }}>Component Reusability</Box>
            <Box sx={{ my: "10px", backgroundColor: 'black', width: { xs: "80%", lg: "25%" }, mx: { xs: "auto" }, borderRadius: "8px", p: "20px", fontSize: "30px" }}>Fixing and Debugging</Box>
          </Box>
        </Box>

      </Box>
    </Box>
  );
}

export default App;
