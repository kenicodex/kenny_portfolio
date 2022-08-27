import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import EcomNav from "../Navbar/EcomNav.jsx";
import Footer from "../Navbar/Footer.jsx";
import Header from "../Header/Header.jsx";
import './card.css'
// import { getAllProduct } from "../fetchproduct.js";

function Store(params) {
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => setProduct(data.products))
    },[])

    return (
        <Box>
            <EcomNav />
            <Header />
            <Box component={"div"} sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", mx: "1.5%", gap:"5px", width:"97%" }}>
            
                {product !== undefined ? product.map(({  title, thumbnail},i) => {
                    return (<Box sx={{width:{xs:"30%",lg:"20%"},flexGrow:"1", height:"auto"}} key={i}>
                        <figure className="card card-product">
                            <div className="img-wrap">
                                <img src={thumbnail} alt="k" width="100%" height="70%"/>
                                {/* <a className="btn-overlay" href="/fakestore"><i className="fa fa-search-plus"></i> Quick view</a> */}
                            </div>
                            <figcaption className="info-wrap">
                                <h6 className="title text-dots b"><a href="/fakestore">{title}</a></h6>
                                <div className="action-wrap">
                                    <div className="price-wrap h5 text-primary">
                                        <span className="price-new">$1280</span>
                                        <del className="price-old ">$1980</del>
                                    </div>
                                    <a href="/fakestore" className="btn btn-outline-primary btn-sm float-right w-100"> Add to cart </a>

                                </div>
                            </figcaption>
                        </figure>
                    </Box>)
                }) : <Box className="alert alert-danger text-center" component={"span"}> Network Error: Can't Load Products</Box>}
            </Box>
            <Footer />
        </Box>
    )
}
export default Store;