import axios from "axios"
import { useState, useEffect } from 'react'

function Movies ({firstResults, }){
    const posterURL = 'https://image.tmdb.org/t/p/original'
    const urlYouTube = 'https://www.youtube.com/watch?v='
    // const [secondResults, setSecondResults] = useState([])
    // const [director, setDirector] = useState([])

    return(
        <main className="wrapper">
            <h2>Results of Movies Should Display Below</h2>
            <ul>
                {
                    firstResults.map( (movie, index) => {
                        let movieID = movie.id

                        axios({
                        method: 'GET',
                        url: `https://api.themoviedb.org/3/movie/${movieID}?`,
                        dataResponse: 'json',
                        params: {
                            api_key: '9709355fc5ce17fa911605a13712678d',
                            append_to_response: 'videos,images,credits',
                            language: 'en-US',
                        }
                    }).then(movieData => {
                    // console.log(movieData)
                    // setSecondResults(movieData.data)

                    // console.log(movieData.data.imdb_id+index);
                    console.log(movieData.data.title)
                    // console.log(movieData.data.overview)
                    // console.log(posterURL+movieData.data.poster_path)
                    // console.log(urlYouTube + movieData.data.videos.results[0].key)
                    // console.log(movieData.data.genres[0].name)
                    // console.log(movieData.data.credits.cast[0].name)
                    // console.log(movieData.data.credits.cast[1].name)
                    // console.log(movieData.data.credits.cast[2].name)

                    // let directorPath = movieData.data.credits.crew
                    // function isDirector(director){
                    //     return director.job === "Director"
                    // }
                    // console.log(directorPath.find(isDirector))
                });
                    return(
                        <li className="movieContainer">
                            <h2>Test</h2>
                            {
                                
                            }
                        </li>
                    )
                })
                }
            </ul>
        </main>
    )
}

export default Movies;