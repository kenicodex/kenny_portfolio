import { Box, Typography } from '@mui/material';
import React from 'react'
import './header.css'
import { Button, Text } from '@mantine/core';

function Header() {
    return (
        <Box className="bgimage" component={"section"} sx={{
            height: { xs: "500px", lg: "100vh" }, backgroundImage: 'url(https://images.unsplash.com/photo-1524508762098-fd966ffb6ef9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)'
        }}>
            {/* <div className="container-fluid"> */}
            <Box className="row text-center h-100" sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Typography component={'div'} className=" text-white w-100" sx={{ flexDirection: "column", width: "100%" }}>
                    <Text size={'36px'} color='black' weight={'bolder'} lassName='w-100'>Welcome to Kenny Inc Store</Text>
                    <Text size={'24px'} py={'xl'} color='black' weight={'600'}>Start your purchases easy and cheap. </Text>
                    {/* <p><a href="/fakestore" className="btn btn-outline-primary btn-large px-4">Learn more </a></p> */}
                    <Button variant='outline' size='lg'>Learn more</Button>
                </Typography>
            </Box>
            {/* </div> */}
        </Box>
    )
}
export default Header;