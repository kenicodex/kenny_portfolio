import { Typography } from '@mui/material';
import { Box } from '@mui/system'
import React, { useEffect } from 'react'
import { useLocation } from 'react-router';
import YTSearch from 'youtube-api-search';
import Navbar from "../Semantics/Navbar.tsx";
import { movies } from './moviedata';
function Movie() {
    const [get, setGet] = React.useState([""])
    const [video, setVideo] = React.useState(false)
    const search = useLocation().search
    useEffect(() => {
        const id = sessionStorage.getItem('currentMovie');
        if (sessionStorage.getItem('currentMovie') !== null) {
            setGet(movies.movies[id - 1])
        } else {
            window.location.assign('/movies')
        }
    }, [search])

    const wacthVideo = (title, year, director) => {
        // window.location.assign("https://www.youtube.com/results?search_query="+title + " " + year + "trailer by " + director)
        const key = 'AIzaSyBgWEQ_Fbc4NW36c_Re03wf9FSw_MH5P44'
        YTSearch({key:key,term:title}, (videos) => {
                setVideo(videos[0].id.videoId)
        })
    }
    return (
        <>
            <Navbar />
            <Box sx={{ my: { xs: "0", lg: "10px" }, border: "2px", width: "100%", height: { xs: "auto", lg: "85vh" }, display: "flex", flexDirection: { xs: "column", lg: "row" }, justifyContent: "space-around" }}
                className="border container rounded bg-light shadow">
                <Box sx={{ width: { xs: "100%", lg: "50%" } }}>
                    {!video ? 
                    <img src={get.posterUrl} width="100%" height="100%" alt="error" /> :
                     <iframe title="youtube vid" src={`https://www.youtube.com/embed/${video}`} width="100%" height="100%" />}
                   
                    
                </Box>
                <Typography sx={{ width: { xs: "100%", lg: "50%" }, color: "black", p: "20px", lineHeight: "30px" }} >
                    <h4 className='text-dark pt-5'>{get.title}</h4>
                    <div className="text-secondary">
                        <h6>{get.year}</h6>
                        {/* <p> <b>Genre</b> : </p> */}
                        <p> <b>Director</b> : {get.director}</p>
                        <p> <b>Actors</b> : {get.actors}</p>
                        <p> <b>Plot </b> : {get.plot}</p>
                        <Box className="btn btn-outline-primary " onClick={() => { wacthVideo(get.title, get.year, get.director) }}>Watch Trailer</Box>
                    </div>
                </Typography>

            </Box>
        </>
    )
}
export default Movie;