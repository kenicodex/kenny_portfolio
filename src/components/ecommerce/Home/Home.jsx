import React, { useEffect, useState } from "react";
import { Box, Slide, Typography } from "@mui/material";
import EcomNav from "../Navbar/EcomNav.jsx";
import Footer from "../Navbar/Footer.jsx";
import Header from "../Header/Header.jsx";
import './card.css'
// import { getAllProduct } from "../fetchproduct.js";

function Store(params) {
    const [product, setProduct] = useState([])
    const [message, setMessage] = useState()
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => setProduct(data.products))
            .catch(err => {
                if (err) {
                    setMessage(err)
                }
            })
    }, [])

    return (
        <Box className="bg-light">
            <EcomNav />
            <Header />
            <Box sx={{ height: "400px", display: 'flex', flexDirection: { xs: "column", lg: "row" }, justifyContent: "space-evenly", alignItems: "center" }} className="bg-white">
                <Box sx={{ width: { xs: "100%", lg: "48%" }, height: { xs: "auto", lg: "370px" }, justifyContent: "center", alignItems: "center" }} className="d-flex" >
                    <Typography fontSize={{ xs: "25px", lg: "40px" }} fontWeight="600" fontFamily={"open sans"} component="div" sx={{ width: { xs: "80%", lg: "80%" } }} className="text-primary" >
                        With ease from your remote location make orders and purschase products
                    </Typography>
                </Box>
                <Box sx={{ width: { xs: "100%", lg: "48%" }, height: "auto" }} className="" >
                    <Slide in={true} direction="right" timeout={2000}><img src={process.env.PUBLIC_URL + '/images/ecom.webp'} width={"90%"} height={"auto"} alt="" /></Slide>
                </Box>
            </Box>
            <Box component={"div"} sx={{
                display: "flex", flexDirection: "row", flexWrap: "wrap", mx: { xs: "1.5%", md: "10%" },
                width: { xs: "97%", md: "80%" }, gap: { xs: "1%", md: "1.5%" }, color: "black"
            }}>
                {product !== undefined ? product.map(({id, title, thumbnail, price }, i) => {
                    return (
                            <Box sx={{ width: { xs: "32.34%", md: "18.8%" }, height: {xs:"150px",md:"250px"}, my: "5px" }} className="border rounded bg-light shadow text-center " key={i}
                            onClick={()=>{window.location.assign("/product"); sessionStorage.setItem('product',id)}}>
                            <Box sx={{ height: "70%", display:"flex", alignItems:"center" }}>
                                <img src={thumbnail} alt="" width="100%" style={{ maxHeight: "100%", minHeight: "30%" }} />
                            </Box>
                            <Box sx={{ height: "30%",  }} className="text-center">
                                <Typography sx={{ height: "30%" }} fontSize={{xs:"50%",lg:"70%"}} fontWeight={"600"} >{title} </Typography>
                                <Typography sx={{ height: "30%" }} fontSize={{xs:"50%",lg:"70%"}} fontWeight={"600"} className="text-danger"> ${price}</Typography>
                                <Typography sx={{ height: "30%", ml: "12.5%" }} className="btn-outline-primary w-75 border rounded " fontSize={{xs:"50%",lg:"70%"}}> Add to Cart</Typography>
                            </Box>
                        </Box>
                         )
                }) : <Box className="alert alert-danger text-center" component={"span"}> {message}</Box>}
            </Box>
            <Footer />
        </Box>
    )
}
export default Store;