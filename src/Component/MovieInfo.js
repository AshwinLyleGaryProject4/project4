// import { useState, useEffect } from "react";
// import axios from "axios";
import ReactPlayer from "react-player";
const MovieInfo = ({ movieInfoDetail, director, cast, youTube }) => {

    // const [movie, setMovie] = useState({}); 
    // const [director, setDirector] = useState()
    // const [youTube, setYouTube] = useState()
    // const [cast, setCast] = useState()
    // const [genre, setGenre] = useState()

    // takes content of object and puts it inside empty object
    // const{ movieID } = props.match.params
    // const urlYouTube = 'https://www.youtube.com/watch?v='

    // const directorPath = movie.credits.crew
    // function isDirector(director){
    //     return director.job === "Director"
    // }

    // useEffect( () => {
    //     axios({
    //         url: `https://api.themoviedb.org/3/movie/${movieID}`,
    //         params: {
    //             api_key: '9709355fc5ce17fa911605a13712678d',
    // append_to_response: 'videos,images,credits',
    // language: 'en-US',
    //     }
    // }).then( (result) => {
    //     setMovie(result.data);
    //     console.log(result.data)

    //     })
    // }, [movieID]) //clear warning in console.

    return (
        <div>
            {movieInfoDetail ? (<div className="poster">
                <div className="description">
                    <h2>Title</h2>
                    <h2>Director</h2>
                    <h2>Cast</h2>
                    <h3>Overview</h3>
                    <p>Youtube</p>
                    
                    <div className="poster-image">
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movieInfoDetail.poster_path}`}
                            alt={`Poster for ${movieInfoDetail.original_title}`} />
                    </div>
                </div>
            </div>) : null
                }
        </div> 
            )
}

            export default MovieInfo;