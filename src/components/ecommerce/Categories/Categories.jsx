import { Box, ListItemButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import EcomNav from '../Navbar/EcomNav';
import Footer from '../Navbar/Footer';

function Categories(params) {
    const [cate, setCate] = useState([])
    useEffect(() => {
        fetch('https://dummyjson.com/products/categories')
            .then(res => res.json())
            .then(data => setCate(data));
    }, [])
    return (
        <>
            <EcomNav />
            < Box className="container" >
                {
                    cate.map((x, i) => {
                        return (
                            <ListItemButton component="a" href="/category" className="border my-1 rounded" key={i} onClick={()=>{localStorage.setItem('category',x)}}>
                                {/* <ListItemText primary="Spam" > ddd</ListItemText> */}{x}
                            </ListItemButton>
                        )
                    })
                }
            </Box >
            <Footer />
        </>
    )
}
export default Categories;