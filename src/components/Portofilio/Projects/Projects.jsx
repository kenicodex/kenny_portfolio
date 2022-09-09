import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { Divider, Typography } from '@mui/material';
import { motion } from "framer-motion";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2, padding: '20px 40px',
  // padding: theme.spacing(1),
  textAlign: 'center', height: "300px",
  color: theme.palette.text.secondary,
}));

const project = [
  { project: 'Ecommerce Site', img: 'img', link: '', mdSize: 7 },
  { project: 'Weather App', img: 'img', link: '', mdSize: 5 },
  { project: 'Todolist App', img: 'img', link: '', mdSize: 4 },
  { project: 'Movie Trailer Finder', img: 'img', link: '', mdSize: 8 },
]

export default function Projects() {
  return (
    <>
      <Box sx={{ flexGrow: 1, width: { xs: "95%", md: "90%" }, mx: "auto" }}>
        <Typography component={'span'} fontWeight={200} fontSize={40}> My Projects</Typography>
        <Grid container spacing={1}>
          {project.map(({ project, img, link, mdSize }) => {
            return (
              <Grid xs={12} md={mdSize}>
                <motion.div initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ delay: .4, duration: .5 }}>
                  <Item>{project}</Item>
                </motion.div>
              </Grid>
            )
          })}
        </Grid>
      </Box>
      <Divider sx={{mt:"30px"}} />
    </>
  );
}
