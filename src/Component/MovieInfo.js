import { useState, useEffect } from "react";
import axios from "axios";

const MovieInfo = (props) => {
    const [movie, setMovie] = useState({}); 
    const [director, setDirector] = useState()
    const [youTube, setYouTube] = useState()
    const [cast, setCast] = useState()
    const [genre, setGenre] = useState()

    // takes content of object and puts it inside empty object
    const{ movieID } = props.match.params
    const urlYouTube = 'https://www.youtube.com/watch?v='
    
    const directorPath = movie.credits.crew
    function isDirector(director){
        return director.job === "Director"
    }

    useEffect( () => {
        axios({
            url: `https://api.themoviedb.org/3/movie/${movieID}`,
            params: {
                api_key: '9709355fc5ce17fa911605a13712678d',
                // append_to_response: 'videos,images,credits',
                // language: 'en-US',
            }
        }).then( (result) => {
            setMovie(result.data);
            console.log(result.data)

        })
    }, [movieID]) //clear warning in console.

    return(
        <div className="poster">
            <div className="description">
                <h2>{movie.title}</h2>
                {/* <a href={`https://www.youtube.com/watch?v=${movie.videos.results[0].key}`}> Click here to View Trailer </a> */}
                {/* <h2>Starring: {movie.credits.cast[0].name}, {movie.credits.cast[1].name} & {movie.credits.cast[2].name} </h2> */}
                {/* <h2>Directed by: {directorPath.find(isDirector).name}</h2> */}
                {/* <h3> Genres: {movie.genres[0].name, movie.genres[1].name, movie.genres[2].name }</h3> */}

                <p>{movie.overview}</p>
                

            </div>

            <div className="poster-image">
                <img 
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                    alt={`Poster for ${movie.original_title}`} />
            </div>
        </div>
    )
}

export default MovieInfo;