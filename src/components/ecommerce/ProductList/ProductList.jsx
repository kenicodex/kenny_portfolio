import React from "react";
import { Box, Typography } from "@mui/material";
import { useDispatch } from 'react-redux'
import { addcart } from "../../../redux/cartSlice";

function ProductList(props) {
    // const [message, setMessage] = useState()
    const dispatch = useDispatch()
    return (
        <Box component={"div"} sx={{
            display: "flex", flexDirection: "row", flexWrap: "wrap", mx: { xs: "1.5%", md: "10%" },
            width: { xs: "97%", md: "80%" }, gap: { xs: "1%", md: "1.5%" }, color: "black"
        }}>
            {props.product !== undefined ? props.product.map(({ id, title, thumbnail, price }, i) => {
                return (
                    <Box sx={{ width: { xs: "32.34%", md: "18.8%" }, height: { xs: "150px", md: "250px" }, my: "5px" }} className="border rounded bg-light shadow text-center " key={i}
                        onClick={() => { window.location.assign("/product"); sessionStorage.setItem('product', id) }}>
                        <Box sx={{ height: "70%", display: "flex", alignItems: "center" }}>
                            <img src={thumbnail} alt="" width="100%" style={{ maxHeight: "100%", minHeight: "30%" }} />
                        </Box>
                        <Box sx={{ height: "30%", }} className="text-center">
                            <Typography sx={{ height: "30%" }} fontSize={{ xs: "50%", lg: "70%" }} fontWeight={"600"} >{title} </Typography>
                            <Typography sx={{ height: "30%" }} fontSize={{ xs: "50%", lg: "70%" }} fontWeight={"600"} className="text-danger"> ${price}</Typography>
                            <Typography sx={{ height: "30%", ml: "12.5%" }} className="btn-outline-primary w-75 border rounded " fontSize={{ xs: "50%", lg: "70%" }}
                                onClick={() => { dispatch(addcart({ product: props.product, number: 0 })) }}> Add to Cart</Typography>
                        </Box>
                    </Box>
                )
            }) : <Box className="alert alert-danger text-center" component={"span"}> {props.message}</Box>}
        </Box>
    )
}
export default ProductList;