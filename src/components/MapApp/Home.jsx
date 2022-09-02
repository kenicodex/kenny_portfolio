import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Navbar from '../Semantics/Navbar.tsx'
import $ from 'jquery'
import './style.css'

function MapApp(params) {
    const [location, setLocation] = useState('Lagos')
    const [latlong, setLatLong] = useState({ lat: '', long: '' })
    useEffect(() => {
        $.ajax({
            url: 'http://api.positionstack.com/v1/forward', // dont use https from free version
            data: {
                access_key: 'c39454cf26b4c6f8e761ddee454f239a',
                query: location,
            }
        }).done(function (data) {
            console.log(data); //done parse json
            setLatLong({lat:data.data[0].latitude, long : data.data[0].longitude});
        }).catch(err => console.log(err.responseText))
    })

    return (
        <Box className="bg-dark text-white position-relative" sx={{ height: '100vh', }}>
            <Navbar />
            <Box sx={{
                width: { xs: "95%", md: "70%" }, mx: "auto", left: { xs: "2.5%", md: "  15%" }, top: "60px", transform: "translate(50% 50%)",
                mt: "20px", position: "fixed", overflowY: "scroll", height: "85vh"
            }} className={'border shadow rounded scroll '} >
                <Box component={'header'} className="border-bottom py-3 px-4 " >
                    <strong>Map App Project</strong>
                </Box>

                <Box component={'main'} sx={{ p: '10px', }} className='position-relative'>
                    <input type="text" style={{ width: "100%" }} onChange={(e) => {
                        setLocation(e.target.value)
                    }}
                        className="form-control py-1 pl-2 mb-2 position-sticky" placeholder="Enter a Location" />
                    <Typography fontSize='40px' fontWeight={"600"}
                        sx={{
                            height: "100px", width: "100%", display: "flex", flexDirection: "column",
                            justifyContent: "center", alignItems: "center"
                        }} className="border mb-2 p-1 rounded shadow">
                        15 C 
                        <Typography>{latlong.lat} {latlong.long}</Typography>
                    </Typography>
                    <Box sx={{ height: "600px", width: "100%" }} className="border mb-2 p-1 rounded shadow">
                        {/* <MyComponent /> */}
                    </Box>
                </Box>
            </Box>

        </Box>
    )
}
export default MapApp;