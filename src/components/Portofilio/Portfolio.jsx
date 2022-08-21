import React, { useState } from 'react'
import './portfolio.css'
import { Box, Typography, Button, Grow, Slide, Fade, Zoom } from '@mui/material';
function Portfolio() {
  const ref = React.useRef(null)
  const [bool, setBool] = useState([false,false])
  React.useEffect(() => {
    window.addEventListener('scroll',()=>{
      if(window.scrollY > window.innerHeight/2 && window.scrollY < window.innerHeight*1.3){
        setBool([true,false])
      }else if(window.scrollY > window.innerHeight*1.3){

        setBool([true,true])
      }
    })
  }, []);
  const know = [{ name: "UI/UX Translation" }, { name: "API Integration" }, { name: "Redux & Context Use" }, { name: "Material UI" }, { name: "Fixing and Debugging" }]
  return (
    <Box sx={{ backgroundColor: "auto", textAlign: "center" }} >
      {/* <Grow in={true} timeout={2000}> */}
      <Box fontSize={{ xs: "40px", lg: "70px" }} fontWeight="800" fontFamily="martel" letterSpacing="5px" className='a' 
        sx={{
          height: "100vh", color: "black", backgroundRepeat: "no-repeat", backgroundSize: "cover", display: "flex", flexDirection: "column", justifyContent: "center",
          backgroundImage: "url(https://img.freepik.com/premium-photo/young-programmers_236854-21690.jpg?size=626&ext=jpg&ga=GA1.2.1618634385.1660341906)", opacity: "1",
        }} >
        <Slide direction='right' in={true} timeout={2000} children={'div'}>
          <Typography ref={ref}  fontSize={{ xs: "50px", lg: "80px" }}> Hey there, {bool}</Typography></Slide>
        <Grow in={true} timeout={3000}><Typography style={{ color: "blue" }} fontSize={{ xs: "50px", lg: "80px" }}>I'm Kenny</Typography></Grow>
        <div>
          <Fade in={true} timeout={2000}><a href="https://wa.me/+2348085503290?text=I'm%20interested%20in%20your%20web%20services.%20My%20name%20is%20_______">
            <Button variant='white'><i style={{ fontSize: "50px" }} class="fa fa-whatsapp"></i> </Button></a></Fade>
            <Fade in={true} timeout={2000}><a href="https://tel+2348056499531"><Button variant='white'> <i style={{ fontSize: "50px" }} class="fa fa-phone"></i></Button></a></Fade>
            <Fade in={true} timeout={2000}><a href="mailto:kehindesalaudeen222@gmail.com"><Button variant='white'> <i style={{ fontSize: "50px" }} class="fa fa-envelope"></i> </Button></a></Fade>
        </div>
        <Slide direction='left' in={true} timeout={2000} ><Button onClick={() => { window.location.assign("/todolist") }} sx={{ color: "black", fontSize: "30px" }}>
          View Projects
        </Button></Slide>
      </Box>
      {/* </Grow> */}
      <Box sx={{ height: "100vh", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center" }} className='bg-success'>
        <Slide direction='up' in={bool[0]} timeout={2000}>
          <Typography fontSize={{ xs: "40px", lg: "60px" }} fontWeight="300" sx={{ pt: "30px", px: { xs: "20px" } }} fontFamily="martel">
            Full Stack Web Developer
          </Typography>
        </Slide>
        <Slide direction='down' in={bool[0]} timeout={2000}>
          <Typography fontSize={{ xs: "30px", lg: "40px" }} fontWeight="300" sx={{ pt: "30px", }} fontFamily="martel">
            Html 5, CSS3 and Javascript, Jquery and ReactJs
          </Typography>
        </Slide>
      </Box>
        <Box sx={{ display: "flex", height: "100vh", flexDirection: { xs: "column", lg: "row" }, color: "white",justifyContent: "center", px: { xs: "auto", lg: "50px" }, mt: "40px" }}>
          {know.map(({ name }) =>{return ( <Zoom in={bool[1]} timeout={3000}>
            <Box sx={{display:"flex", flexDirection:"column", justifyContent:'space-around', my: "20px", bgcolor: 'black', 
            width: { xs: "80%", lg: "25%" }, mx: { xs: "10%" , lg:"10px"}, borderRadius: "8px", fontSize: "30px", height:"200px" }}> 
            {name} </Box></Zoom>)} )}
        </Box>
    </Box>
  );
}
export default Portfolio;