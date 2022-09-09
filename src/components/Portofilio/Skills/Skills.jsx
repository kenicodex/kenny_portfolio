import { Box, Typography } from '@mui/material'
import React from 'react'
import { motion } from "framer-motion";

function Skills() {
    return (
        
        <motion.div
            initial={{ y: 400, opacity: 0, rotate: 90 }} whileInView={{ y: 0, opacity: 1, rotate: 0 }} viewport={{ once: true }} transition={{ delay: .5, ease: "easeInOut", }} >
            <Box component="div" sx={{  width: { xs: "95%", md: "90%" }, mx: "auto", height: "400px", my: "10px" }} className="rounded border">
                <Typography sx={{ p: "30px", transform: "rotate('-90deg')" }} fontSize="50px" fontFamily={"open sans"}>
                    <motion.span animate={{ rotate: 360 }}>Skills</motion.span>
                </Typography>
            </Box>
        </motion.div>
    )
}

export default Skills