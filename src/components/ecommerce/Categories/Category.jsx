import React, { useEffect, useState } from "react";
import EcomLayout from "../EcomLayout";
// import { Box } from "@mui/material";
// import EcomNav from '../Navbar/EcomNav';
// import Footer from '../Navbar/Footer';
import ProductList from "../ProductList/ProductList";

function Category(params) {
    const [cate, setCate] = useState([])
    useEffect(() => {
        fetch(`https://dummyjson.com/products/category/${localStorage.getItem('category')}`)
            .then(res => res.json())
            .then(data => setCate(data.products));

    }, [])
    return (
        <>
            <EcomLayout>
                <ProductList product={cate} messase="something went wrong: try again" />
            </EcomLayout>

        </>
    )
}
export default Category;