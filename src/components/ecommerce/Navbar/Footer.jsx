import { Divider } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import './footer.css'
import { ecomroutes } from './route';

function Footer(params) {
    return (
        <>
            <footer className='border-top mt-2'>
                <div className="main">
                    <Box sx={{ textAlign: { xs: "center" } }} className="col1">
                        <h3 className="heading text-center">
                            Kenny Inc.
                        </h3>
                        <ul>
                            {ecomroutes.map(({ page, link, icon }, i) => {
                                return (
                                    <li key={i}> <a href={link}> {page} </a> </li> 
                                )
                            })}
                        </ul>
                    </Box>

                    <Box sx={{ textAlign: { xs: "center" } }} className="col2">
                        <h3 className="heading">
                            About the store
                        </h3>
                        <Box sx={{ textAlign: { xs: "center" } }} className="languages">
                            Kenny Inc. Fakestore is an E-commerce Project on kenny inc portfolio to develops skills and proficiency in using react for fronend development
                        </Box>
                    </Box>

                    <div className="col3 ">
                        <h3 className="heading text-center">
                            Get in touch
                        </h3>
                        <div className=" text-dark text-center" style={{letterSpacing:"50px"}}>
                            <a href="/" className="text-right  mx-2">
                                <ion-icon name="logo-facebook"><i className='fa fa-twitter'></i></ion-icon>
                            </a>
                            <a href="/" className="text-right mx-2">
                                <ion-icon name="logo-twitter"><i className='fa fa-linkedin'></i></ion-icon>
                            </a>
                            <a href="/" className="text-right mx-2">
                                <ion-icon name="logo-linkedin"><i className='fa fa-github'></i></ion-icon>
                            </a>
                        </div>
                    </div>
                </div>
<Divider />
                <p className="terms">
                    @copyright 2022 {Date().getYear}
                </p>
            </footer>
        </>
    )
}
export default Footer;