import { Box, Typography } from '@mui/material'
import React from 'react'
import { motion } from "framer-motion";

function Skills() {
    const dots = ['.', '.', '.']
    const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux Toolkit']
    return (

        <motion.div
            initial={{ y: 400, opacity: 0, rotate: 90 }} whileInView={{ y: 0, opacity: 1, rotate: 0 }} viewport={{ once: true }} transition={{ delay: .5, ease: "easeInOut", }} >
            <Box component="div" sx={{ width: { xs: "95%", md: "95%" }, p: "10px", mx: "auto", height: "auto", my: "10px" }} className="rounded border">
                <Typography sx={{ transform: "rotate('-90deg')" }} fontSize="30px" color={'white'} fontFamily={"open sans"}>
                    I can use {dots.map((x, i) => <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .5, duration: 2 * i, repeat: 100 }}>{x}</motion.span>)}
                </Typography>
                <Box sx={{ pl: 10 }} >
                    {skills.map(x => {
                        return (<Typography color='white' contentEditable> <span className='text-primary'>{`>`} </span> console.<span className='text-warning'>log</span>
                            <span className='text-primary'>(</span>'{x}'<span className='text-primary'>)</span>;
                            <div className='pl-3' contentEditable={false}>{x}</div>
                        </Typography>)
                    })}
                </Box>

            </Box>
        </motion.div>
    )
}

export default Skills