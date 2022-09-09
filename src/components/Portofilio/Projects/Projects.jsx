import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { Divider, Typography } from '@mui/material';
import { motion } from "framer-motion";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2, borderRadius: "10px",
  // padding: '20px 40px',
  // padding: theme.spacing(1),
  textAlign: 'center', 
  color: theme.palette.text.secondary,
}));

const project = [
  { project: 'Ecommerce Site', img: process.env.PUBLIC_URL + '/images/ecommerce.png', link: '/fakestaore', mdSize: 7 },
  { project: 'Weather App', img: process.env.PUBLIC_URL + '/images/WeatherApp.png', link: '/weatherapp', mdSize: 5 },
  { project: 'Todolist App', img: process.env.PUBLIC_URL + '/images/todolist.png', link: '/todolist', mdSize: 4 },
  { project: 'Movie Trailer Finder', img: process.env.PUBLIC_URL + '/images/movies.png', link: '/movies', mdSize: 8 },
]

export default function Projects() {
  return (
    <div id='projects'>
      <Box sx={{ flexGrow: 1, width: { xs: "95%", md: "90%" }, mx: "auto" }} >
        <Typography component={'div'} color={'white'} fontWeight={200} fontSize={40} sx={{my:"10px"}}> My Projects</Typography>
        <Grid container spacing={1}>
          {project.map(({ project, img, link, mdSize }) => {
            return (
              <Grid xs={12} md={mdSize}>
                <motion.div initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ delay: .4, duration: .5 }}>
                  <Item className='bg-dark' sx={{height:{xs:'auto',md:"300px"}}} >
                    <motion.img initial={{ scale: 1 }} whileHover={{ scale: 1.1, }} onClick={()=>{window.location.assign(link)}}
                    className='rounded' src={img} alt="" style={{ maxHeight: "100%", maxWidth: '100%' }} />
                  </Item>
                </motion.div>
              </Grid>
            )
          })}
        </Grid>
      </Box>
      <Divider sx={{ mt: "30px" }} />
    </div>
  );
}
