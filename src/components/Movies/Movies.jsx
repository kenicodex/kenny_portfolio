import React, { useEffect, useState } from "react"
import { Box, Divider, Slide, Typography } from "@mui/material";
import Navbar from "../Semantics/Navbar.tsx";
import './movie.css'
import { movies } from "./moviedata";

function Movies(params) {
    const [move, setMove] = useState([])
    const genrepicks = ["Comedy", "Sci-Fi", "Crime", "Drama", "Adventure", "Animation", "Family", "Mystery", "Action", "Romance", "Horror"]
    useEffect(() => {
        setMove(movies.movies)
    }, [move])
    return (
        <Box className="bg-light">
            <Navbar />
            <Box sx={{
                display: "flex", flexDirection: { xs: "column", lg: "row" }, justifyContent: "space-center",
                width: "100%", height: "auto", bgcolor: "white", pl: { xs: "10px", lg: "40px" },
                // backgroundImage: " url(" + "'" + process.env.PUBLIC_URL + "movie-banner.jpg ') ", backgroundPosition: "center center"
            }}>
                <Box>
                    <Slide direction="down" in={true} timeout={2000}>
                        <Typography component="div" fontSize={{ xs: "30px", lg: "60px" }} sx={{ mt: "40px" }} color="black" >Kenny Inc Movies</Typography>
                    </Slide>
                    <Typography color="black">
                        A project to created to show case a fake movie website
                    </Typography>
                </Box>
                <Slide direction="up" in={true} timeout={2000}><img width={"100%"} src={process.env.PUBLIC_URL + "/images/watching.png"} alt="" /></Slide>
            </Box>
            <Divider />
            {genrepicks.map(category => {
                return (
                    <Box className="border rounded shadow bg-white" sx={{ my: '10px', mx: { xs: "2.5%", lg: "2.5%" }, width: "95%" }}>
                        <Typography fontSize={{ xs: "20px", lg: "30px" }} sx={{ pt: "5px", pl: "20px" }}>{category}</Typography>
                        <Divider />
                        <Box sx={{ display: "flex", flexDirection: "row", mt: "10px", width: "100%", overflowX: "scroll" }} className="scroll pb-1">
                            {move.filter(x => x.genres.includes(category)).map(({ id, title, posterUrl, year, genres }) => {
                                return (
                                    <a href="/movie">
                                        <Box component={"div"} sx={{
                                            height: { xs: 150, lg: 200 }, cursor: "pointer", mx: { xs: "5px", lg: "5px" },
                                            minWidth: { xs: "100px", lg: "150px" }, width: { xs: "100px", lg: "150px" }, maxWidth: { xs: "100px", lg: "150px" }, position: "relative"
                                        }}  onClick={()=>{sessionStorage.setItem('currentMovie',id) }}
                                            className="border rounded-lg shadow bg-white text-dark ">
                                            <img src={posterUrl} alt="network" width="100%" height="100%" className="rounded" />
                                    </Box>
                                    </a>
                                )
                            })}
                        </Box>
                    </Box>
                )
            })}
            {/* <Box sx={{
                mx: { xs: "2.5%", lg: "1%" }, width: { xs: "95%", lg: "98%" }, display: "grid", mt: "10px",
                gridTemplateColumns: { xs: "repeat(3, auto)", lg: "repeat(7, auto)" }, gridGap: "10px"
            }} className="bg-light">

                {move.filter(x => x.genres.includes("Comedy")).map(({ id, title, posterUrl, year, genres }) => {
                    return (
                        <Box sx={card} className="border rounded shadow bg-white text-dark" onClick={() => { window.location.assign('/movie?id=' + id + "&title=" + title) }}>
                            <img src={posterUrl} alt="network" width="100%" height="100%" className="rounded" />
                            <Typography sx={{ position: "absolute", top: "60%", pl: "5px", fontSize: "16px", fontWeight: "600", }}>
                                {title} {year} {genres.length}
                            </Typography>
                        </Box>
                    )
                })}
            </Box> */}
        </Box>
    )
}
export default Movies;