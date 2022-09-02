import { Alert, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Navbar from '../Semantics/Navbar.tsx'
import $ from 'jquery'
import './style.css'
import { motion } from "framer-motion";

function WeatherApp(params) {

    const [location, setLocation] = useState('')
    const [isLoaded, setisLoaded] = useState({ status: false, message: '' })
    const [latlong, setLatLong] = useState({})
    const [weatherData, setweatherData] = useState(undefined)
    const dateNow = new Date()
    const errorCatch = (status, message) => setisLoaded({ status: status, message: message })
    useEffect(() => { // getTheIntialPosition
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((coords) => {
                setLatLong({ lat: coords.coords.latitude, long: coords.coords.longitude })
                errorCatch(true, 'connected to browser location')
            }, (e) => {
                errorCatch(false, 'error in browser location')
            })
        } else {
            errorCatch(false, 'error in getting current location website blocked from getting location')
        }
    }, [])
    // const getAddressFromCoordinates = async (latitude, longitude) => {

    // }
    const getWeatherCondition = async (latitude, longitude) => {
        const key = 'd09096771f71572a27876227e2000d34'
        if (latitude !== undefined && longitude !== undefined) {
            let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`)
            // setweatherData(undefined)
            let getData = await response.json()
            console.log(response.ok);
            if (response.ok) {
                setisLoaded({ status: response.ok, message: 'successfully fetched weather data' })
                return getData
            }
        } else {
        }
    }
    useEffect(() => {
        getWeatherCondition(latlong.lat, latlong.long)
            .then(data => {
                console.log("weather condition - ", data);
                if (data !== undefined) {
                    setweatherData(data)
                } else {
                    errorCatch(false, 'loading.....')
                }
            })
            .catch(e => {
                errorCatch(false, 'error in getting weather data please refresh page')
                console.log(e.message);
            })
    }, [latlong.lat, latlong.long])
    const getCoordinatesFromAddress = (e) => { //getCoordinatesFromAddress
        setLocation(e.target.value)
        if (e.target.value.length > 3) {
            $.ajax({ // convert address to coordinates forward geocoding
                url: 'http://api.positionstack.com/v1/forward', // dont use https from free version
                data: {
                    access_key: 'c39454cf26b4c6f8e761ddee454f239a',
                    query: e.target.value,
                }
            }).done(function (data) {
                console.log(data); //done parse json
                setLatLong({ lat: data.data[0].latitude, long: data.data[0].longitude });
            }).catch(err => console.log(err.responseText))
        }
    }
    return (
        <Box className="bg-dark text-white position-relative" sx={{ height: '100vh', }}>
            <Navbar />
            <motion.div

                // dragConstraints={{top:-50}}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <Box sx={{
                    width: { xs: "95%", md: "30%" }, mx: "auto", left: { xs: "2.5%", md: "35%" }, top: "60px", transform: "translate(50% 50%)",
                    mt: "20px", position: "fixed", overflowY: "scroll", height: "85vh"
                }} className={'border shadow rounded scroll '} >
                    <Box component={'header'} className="border-bottom py-3 px-4 " >
                        <strong>Weather App Project  <br />{'App in construction'}  </strong> <br />
                        {isLoaded.message}
                    </Box>

                    <Box component={'main'} sx={{ p: '10px', }} className='position-relative'>
                        {/* <Box sx={{ height: "50%", width: "100%" }} className="border mb-2 p-1 rounded"> */}
                        <input type="search" style={{ width: "100%" }} onChange={(e) => { getCoordinatesFromAddress(e) }} value={location}
                            className="form-control py-1 pl-2 mb-2 position-sticky" placeholder="Enter a Location" />
                        {/* </Box> */}
                        {
                            isLoaded === false || weatherData === undefined ?
                                <Alert severity='warning'>Gathering weather data</Alert> :
                                <>
                                    <Typography fontSize='40px' fontWeight={"600"}
                                        sx={{
                                            height: "100px", width: "100%", display: "flex", flexDirection: "column",
                                            justifyContent: "center", alignItems: "center"
                                        }} className="border mb-2 p-1 rounded shadow">
                                        {/* 20C */}
                                        {weatherData.main.temp !== undefined ? Math.round(weatherData.main.temp - 273, 2) : 'Loading data...'} &#176; C
                                        <Typography component={'span'}>
                                            <span>{dateNow.getDate().toString().length === 1 ? "0" + dateNow.getDate() : dateNow.getDate()}
                                                -{dateNow.getMonth().toString().length === 1 ? "0" + dateNow.getMonth() : dateNow.getMonth()}
                                                -{dateNow.getFullYear()}
                                                <br /> <span style={{fontSize:"12px"}}>{latlong.lat} {latlong.long}</span>
                                            </span>
                                        </Typography>
                                    </Typography>
                                    <Box sx={{ height: "150px", width: "100%", backgroundImage: `url( http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png)` }} className="border mb-2 p-1 rounded shadow text-center">
                                        <span style={{fontSize:"20px", fontWeight:"800"}} className={`text-primary pt-5`}>{weatherData.weather[0].description}</span>
                                    </Box>
                                    <Box sx={{ height: "150px", width: "100%" }} className="border text-center mb-2 p-1 rounded shadow">
                                        <Typography sx={{ py: "5px" }}>
                                            Temperature : 
                                            {weatherData.main.temp !== {} ? Math.round(weatherData.main.temp - 273) : 'Loading data...'} &#176; C
                                        </Typography>
                                        <Divider />
                                        <Typography sx={{ py: "5px" }}>Pressure : 
                                            {weatherData.main.temp !== {} ? weatherData.main.pressure : 'Loading data...'}Pa
                                        </Typography>
                                        <Divider />
                                        <Typography sx={{ py: "5px" }}> Humuity : 
                                            {weatherData.main.temp !== {} ? weatherData.main.humudity : 'Loading data...'}g.kg-1
                                        </Typography>
                                        <Divider />
                                        <Typography sx={{ py: "5px" }}>Wind : {weatherData.wind.speed}</Typography>
                                        <Divider />
                                    </Box>
                                </>
                        }
                    </Box>
                </Box>
            </motion.div>
        </Box>
    )
}
export default WeatherApp;