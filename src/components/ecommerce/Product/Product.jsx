import React, { useEffect, useState } from "react";
import EcomNav from "../Navbar/EcomNav";
import Footer from "../Navbar/Footer";
import LeftImage from "./LeftImage.jsx";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import './style.css'
import { getData } from "./fetch";
import { Box, Typography } from "@mui/material";
import { useDispatch } from 'react-redux'
import { addcart } from "../../../redux/cartSlice";

function SingleProduct(params) {
    const [product, setProduct] = useState({})
    const [items, setItems] = useState(1);
    const dispatch = useDispatch()
    useEffect(() => {
        fetch('https://dummyjson.com/products/' + sessionStorage.getItem('product'))
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    return (
        <React.Fragment>
            <EcomNav />
            <div className="hero-sec content-div">
                <div className="hero-row">
                    <div className="hero-col hero-col1">
                        <LeftImage thumbnail={product.thumbnail} images={product.images} />
                    </div>
                    <Box className="hero-col hero-col2" component={"div"} sx={{pt:{xs:"40px",md:"0"}}}>
                        <div className="col2-wrapper">
                            <h4 className="hero-subHeading text-primary">{product.brand} {getData().id} </h4>
                            <h1 className="main-heading">{product.title} </h1>
                            <p className="hero-para">
                                {product.description} <br />
                                {/* {product.thumbnail} */}
                            </p>
                            <span className="dollar">${product.price} </span>
                            <span className="discount hero-subHeading text-primary">{product.discountPercentage}%</span>
                            <Typography className="discount2 hero-para text-secondary" fontSize={"14px"} sx={{textDecoration:"line-through"}}>
                                ${Math.round(product.price + (product.price * (product.discountPercentage / 100)))}</Typography>
                            <div className="cart2-sec">
                                <div className="cart2-col cart2-col1 ">
                                    <RemoveIcon onClick={() => {
                                        let count = items - 1;
                                        if (count < 1) {
                                            count = 0;
                                        }
                                        setItems(count);
                                    }} />
                                    <span className="cart2-values">{items}</span>
                                    <AddIcon onClick={() => {
                                        let count = items + 1;
                                        if (count < 1) {
                                            count = 0;
                                        }
                                        setItems(count);
                                    }} />
                                </div>
                                <div className="cart2-col cart2-col2">
                                    <button className=" btn btn-outline-primary" onClick={()=>{dispatch(addcart({product:product, number : items }))}}>
                                        <AddShoppingCartIcon />Add to cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Box>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}
export default SingleProduct;