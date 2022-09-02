import React, { useEffect, useState } from "react";
import { Box, Slide, Typography } from "@mui/material";
import Header from "../Header/Header.jsx";
import { useSelector } from 'react-redux'
import Message from '../Message';
import ProductList from "../ProductList/ProductList.jsx";
import EcomLayout from "../EcomLayout.jsx";

function Store(params) {
    const [product, setProduct] = useState([])
    const [message, setMessage] = useState()
    const state = useSelector(state => state.cart)
    const obtainJson = async () => {
        let res = await fetch('https://dummyjson.com/products')
        let getData = false
        if (res.ok) {
            getData = res.json()
            return getData
        } else { 
            return false
        }
    }
    useEffect(() => {
        obtainJson()
            .then(data => setProduct(data.products))
            .catch(err => {
                if (err) {
                    setMessage(err)
                    
                }
            })
    }, [])

    return (
        <Box className="bg-light">
            <Message show={state.find(x => x.id === product.id) !== undefined} severity="success" message="Item added successfully" />
            <EcomLayout>
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

                <ProductList product={product} message={message} />
            </EcomLayout>
        </Box>
    )
}
export default Store;