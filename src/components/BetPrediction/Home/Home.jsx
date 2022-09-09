import React from 'react'
import { Typography, Divider, Box } from '@mui/material'
import { motion } from 'framer-motion'
import { useEffect } from 'react'

function BetLikely() {

  useEffect(() => {
  }, [])
  // const [file, setfile] = useState([])
  // const uploadFile = (e) => {
  // }
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: "center", height: "400px", flexDirection: 'column', textAlign: "center" }} >
          <Typography component={'div'} fontSize={"50px"} fontFamily={"sans-serif"} fontWeight={"700"}>
            Rigid Prediction Algorithm
          </Typography>
          <Typography component={'div'}>
            The aim of these website is to find a list of soccer events that has an already highly predictable outcome
          </Typography>
        </Box>
      </motion.div>
      <Divider />

      <Box className='w-100 container'>
        <h3>Page Builder</h3>
      </Box>
    </>
  )
}

export default BetLikely