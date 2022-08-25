import React, { useEffect, useState } from "react"
import { Box, Divider, Slide, Typography } from "@mui/material";
import Navbar from "../../Semantics/Navbar.tsx";
import { movies } from "./moviedata";

function Movies(params) {
    const [move, setMove] = useState([])
    useEffect(() => {
        setMove(movies.movies)
    }, [move])
    const card = { height: 200, cursor:"pointer", position: "relative", }
    return (
        <Box>
            <Navbar />
            <Box sx={{
                display: "flex", flexDirection: { xs: "column", lg: "row" }, justifyContent: "space-center",
                width: "100%", height: "auto", bgcolor: "white", pt: "60px", pl: { xs: "10px", lg: "40px" },
                // backgroundImage: " url(" + "'" + process.env.PUBLIC_URL + "movie-banner.jpg ') ", backgroundPosition: "center center"
            }}>
                <Box>
                    <Slide direction="down" in={true} timeout={2000}>
                        <Typography component="div" fontSize={{ xs: "30px", lg: "60px" }} sx={{ mt: "150px" }} color="black" >Kenny Inc Movies</Typography>
                    </Slide>
                    <Typography color="black">
                        A project to created to show case a fake movie website
                    </Typography></Box>
                <Slide direction="up" in={true} timeout={2000}><img src={process.env.PUBLIC_URL + "/images/watching.webp"} alt="" /></Slide>
            </Box>
            <Divider />
            <Box sx={{
                mx: { xs: "2.5%", lg: "1%" }, width: { xs: "95%", lg: "98%" }, display: "grid", mt: "10px",
                gridTemplateColumns: { xs: "repeat(3, auto)", lg: "repeat(7, auto)" }, gridGap: "10px"
            }} className="bg-light">

                {move.filter(x => x.year > 2000 ).map(({ id, title, posterUrl, year }) => {
                    return (
                        <Box sx={card} className="border rounded shadow bg-white" onClick={()=>{window.location.assign('/movie?id='+id+"-"+title)}}>
                            <img src={posterUrl} alt="network" width="100%" height="100%" className="rounded" />
                            <Typography sx={{ position: "absolute", top: "60%", pl: "5px", fontSize: "16px", fontWeight: "600", color: "white" }}>
                                {title} {year}
                            </Typography>
                        </Box>
                    )
                })}
            </Box>
        </Box>
    )
}
export default Movies;