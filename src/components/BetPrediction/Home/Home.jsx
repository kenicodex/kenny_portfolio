import React, { useState } from 'react'
import { Typography, Divider, Box, Button } from '@mui/material'
import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

function BetLikely() {
  // const name = new Creator('test');
  const page = useRef()
  useEffect(() => {
    // name.writeText()
    // page.current.innerHTML += name.
  }, [])
  // const createElement = () => {

  // }

  const [file, setfile] = useState([])
  const uploadFile = (e) => {
    for (const key in e.target.files) {
      if (Object.hasOwnProperty.call(e.target.files, key)) {
        setfile([...file, e.target.files[key]]);
      }
    }
  }



  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: "center", height: "400px", flexDirection: 'column', textAlign: "center" }} >
          <Typography component={'div'} fontSize={"50px"} fontFamily={"sans-serif"} fontWeight={"700"}>
            Astalavee Site Builder
          </Typography>
          <Typography component={'div'}>
            no.1 content managing site
          </Typography>
        </Box>
      </motion.div>
      <Divider />

      <Box className='w-100 container'>
        <label htmlFor="file-upload" className='text-center d-block p-2' style={{ cursor: 'pointer' }}>
          <Typography component={"div"} sx={{ width: "30%", textAlign: 'center' }} fontSize={"30px"} className={'btn btn-outline-primary'}>
            Upload a file
          </Typography>
        </label>
        <input type="file" multiple={true} style={{ opacity: 0 }} id='file-upload' onChange={(e) => { uploadFile(e) }} />
        {file !== [] ? file.map((x, i) => {
          return <div key={i}>{x.name} <img src={URL.createObjectURL(x)} alt="" style={{ maxWidth: "300px", maxHeight: "300px" }} /></div>
        }) : 'v'}
        {typeof (file)}
      </Box>
      <Divider />

      <Box className='w-100 container' ref={page}>
        <h3>Page Builder</h3>
      </Box>

      <Button>
        Create text 
      </Button>
    </>
  )
}

export default BetLikely