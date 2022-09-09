import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Text } from '@mantine/core';
import { motion } from 'framer-motion'
import { Divider } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  height: "300px",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  // textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export function About() {
  return (
    <>
        <Box sx={{ flexGrow: 1, my: "20px",  width: { xs: "95%", md: "90%" }, mx: "auto"}}>
    <Grid container spacing={2} sx={{ display: "flex", flexDirection: { xs: "column-reverse", md: "row" } }}>
      <Grid item xs={12} lg={6.5}>
        <motion.div initial={{x:-300, opacity:0}} whileInView={{x:0, opacity:1}} viewport={{once:true}} transition={{delay:.5, duration:1}}>
        <Item>
          <Text weight={300} size="40px" mb={30}>
            Get to know me
          </Text>
          <Text weight={500} size="lg" mb={50} >
            Young Programmer
          </Text>
          <Text weight={200} size="12px" mb={15} color="black">
            Hi there, i'm kenny a young and enthusiatic problem solver. My journey as a Frontend Developer started back in my undergraduate program. Discovered coding in my first
            year and now its a hobby, designing with logical and precise defined keywords. Many skills include HTML CSS and JavaScript, ReactJS, Redux State Management, NextJS and NodeJS. 
            {/* You know what we can friends, why not justv WhatsApp me below */}
          </Text>
          {/* <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Hey kenny, i'm ... let's connect" aria-label="Hey kenny, i'm ... let's connect" aria-describedby="basic-addon2" />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary rounded-right" type="button">WhatsApp Me</button>
            </div>
          </div> */}

        </Item>
        </motion.div>
      </Grid>
      <Grid item xs={12} lg={5.5}>
        <motion.div initial={{ opacity:0}} whileInView={{ opacity:1}} viewport={{once:true}} transition={{delay:.5, duration:1}}>
          <Item>
            <Box component={'img'} sx={{ maxWidth: "100%", maxHeight: "100%" }}
              src="https://img.freepik.com/free-vector/offline-concept-illustration_114360-6953.jpg?size=626&ext=jpg&ga=GA1.2.1618634385.1660341906"></Box>
          </Item>
        </motion.div>
      </Grid>
      {/* <Grid item xs={12} lg={4}>
        <Item>xs={12} lg=4</Item>
      </Grid>
      <Grid item xs={12} lg={8}>
        <Item>xs={12} lg=8</Item>
      </Grid> */}
    </Grid>
  </Box>
   <Divider />
   </>
  );
}
