import { Text } from '@mantine/core'
import { Box } from '@mui/material'
import React from 'react'
import './welcome.css'
import { motion } from 'framer-motion'

function Welcome() {
    // const win = { height: window.innerHeight, width: window.innerWidth }
    return (
        <motion.div initial={{ display: 'block' }} animate={{ display: 'none' }} transition={{delay:1, duration:4}}>
            <Box sx={{
                width: "100vw", height: "100vh", position: "fixed", zIndex: 100, top: 0, left: 0, pt: "300px",
                display: "flex", justifyContent: 'center', letterSpacing: "3px"
            }} className={"bg-secondary "} >

                <h1>
                    <Text weight={200} style={{ marginLeft: '10px' }} component={'span'} > Hey  </Text>
                    <Text weight={200} style={{ marginLeft: '10px' }} component={'span'} > There  ,</Text>
                    <Text weight={200} style={{ marginLeft: '10px' }} component={'span'} > Welcome  </Text>
                    <Text weight={200} style={{ marginLeft: '10px' }} component={'span'} > to </Text>
                    <Text weight={200} style={{ marginLeft: '10px' }} component={'span'} > my </Text>
                    <Text weight={200} style={{ marginLeft: '10px' }} component={'span'} > portfolio  .</Text>
                    <Text weight={200} style={{ marginLeft: '10px' }} component={'span'} > Enjoy   </Text>
                    <Text weight={200} style={{ marginLeft: '10px' }} component={'span'} > Your  </Text>
                    <Text weight={200} style={{ marginLeft: '10px' }} component={'span'} >  Stay   </Text>
                    <Text weight={200} style={{ marginLeft: '10px' }} component={'span'} > browse  </Text>
                    <Text weight={200} style={{ marginLeft: '10px' }} component={'span'} >   </Text>
                    {/* <Text weight={200} style={{marginLeft:'10px'}} component={'span'} > you  </Text>
                <Text weight={200} style={{marginLeft:'10px'}} component={'span'} > place  </Text>
                <Text weight={200} style={{marginLeft:'10px'}} component={'span'} > on  </Text>
                <Text weight={200} style={{marginLeft:'10px'}} component={'span'} > your  </Text>
                <Text weight={200} style={{marginLeft:'10px'}} component={'span'} > own  </Text>
                <Text weight={200} style={{marginLeft:'10px'}} component={'span'} > thinking  .</Text> */}
                </h1>
            </Box>
        </motion.div>
    )
}

export default Welcome