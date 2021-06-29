import { useState, useEffect } from "react";
import axios from "axios";

const MovieInfo = (props) => {
    const [movie, setMovie] = useState({}); 
    // takes content of object and puts it inside empty object
    const{ movieID } = props.match.params
    console.log(props)
    console.log(props.match)
    console.log(props.match.params)

    useEffect( () => {
        axios({
            url: `https://api.themoviedb.org/3/movie/${movieID}`,
            params: {
                api_key: '9709355fc5ce17fa911605a13712678d'
            }
        }).then( (result) => {
            setMovie(result.data);
        })
    }, [movieID]) //clear warning in console.

    return(
        <div className="poster">
            <div className="description">
                <h2>{movie.original_title}</h2>
                <h2>{movie.tagline}</h2>
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