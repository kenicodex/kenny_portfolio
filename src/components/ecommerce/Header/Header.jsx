import { Box, Typography } from '@mui/material';
import React from 'react'
import './header.css'

function Header() {
    return (
        <Box className="bgimage" component={"section"} sx={{ height: { xs: "auto", lg: "500px" },backgroundImage:'url(https://images.unsplash.com/photo-1524508762098-fd966ffb6ef9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)' 
        }}>
            <div className="container-fluid">
                <div className="row text-center">
                    <Typography component={'div'} className=" text-white w-100" sx={{ flexDirection: "column", width: "100%" }}>
                        <h3 className='w-100'>Welcome to Kenny Inc Store</h3>
                        <Typography sx={{ py: { xs: "20px", lg: "70px" } }}>Start your purchases easy and cheap. </Typography>
                        <p><a href="/fakestore" className="btn btn-outline-primary btn-large px-4">Learn more </a></p>
                    </Typography>
                </div>
            </div>
        </Box>
    )
}
export default Header;