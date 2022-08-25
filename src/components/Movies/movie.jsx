import { Box } from '@mui/system'
import React, { useEffect } from 'react'
import Navbar from "../../Semantics/Navbar.tsx";
import { movies } from './moviedata';
function Movie() {
    const [get, setGet] = React.useState("")
    useEffect(() => {

        // setGet(movies.movies[1])
        setGet(window.location.href)
    }, [get])
    return (
        <>
            <Navbar />
            <Box sx={{ my: "10px", border: "2px", width: "100%", height: "100vh", display: "flex", flexDirection: { xs: "column", lg: "row" }, justifyContent: "space-around" }}
                className="border container rounded bg-light shadow">
                <Box sx={{ width: "50%" }}>
                    <img src={process.env.PUBLIC_URL + "images/watching.webp"} width="100%" alt="error" />
                </Box>
                <Box sx={{ width: "50%", color: "black" }} >
                    {get} 
                </Box>
            </Box>
        </>
    )
}
export default Movie;