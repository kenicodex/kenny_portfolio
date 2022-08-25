import { Typography } from '@mui/material';
import { Box } from '@mui/system'
import React, { useEffect } from 'react'
import { useLocation } from 'react-router';
import Navbar from "../../Semantics/Navbar.tsx";
import { movies } from './moviedata';
function Movie() {
    const [get, setGet] = React.useState("")
    const search = useLocation().search
    useEffect(() => {
        const id = new URLSearchParams(search).get("id");
        movies.movies.map(x => {
            if (x.id.toString() === id) {
                setGet(x)
            }
            return 0
        })
        // alert(getFilm)
    }, [search])
    return (
        <>
            <Navbar />
            <Box sx={{ my: {xs:"0",lg:"10px"}, border: "2px", width: "100%", height: { xs: "auto", lg: "85vh" }, display: "flex", flexDirection: { xs: "column", lg: "row" }, justifyContent: "space-around" }}
                className="border container rounded bg-light shadow">
                <Box sx={{ width: { xs: "100%", lg: "50%" } }}>
                    <img src={get.posterUrl} width="100%" height="100%" alt="error" />
                </Box>
                <Typography sx={{ width: { xs: "100%", lg: "50%" }, color: "black", p: "20px", lineHeight:"30px"}} >
                    <h4 className='text-dark pt-5'>{get.title}</h4>
                    <div className="text-secondary">
                        <h6>{get.year}</h6>
                        {/* <p> <b>Genre</b> : </p> */}
                        <p> <b>Director</b> : {get.director}</p>
                        <p> <b>Actors</b> : {get.actors}</p>
                        <p> <b>Plot </b> : {get.plot}</p>
                    </div>
                </Typography>

            </Box>
        </>
    )
}
export default Movie;