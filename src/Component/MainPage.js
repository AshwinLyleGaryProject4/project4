import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import UserList from "./UserList";
function MainPage({ firstResults }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios({
      url: "https://api.themoviedb.org/3/discover/movie",
      params: {
        api_key: "9709355fc5ce17fa911605a13712678d",
        language: "en-US",
        sort_by: "popularity.desc",
        include_adult: "false",
        include_video: "false",
        page: 1,
        primary_release_year: 1993,
      },
    }).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  // console.log(movies);
  return (
    <div>
    <UserList />
      <ul className="catalogue">
        {movies.slice(0, 10).map((movie) => {
          return (
            <li key={movie.id}>
              <Link to={`/movie/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={`Poster for ${movie.original_title}`}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default MainPage;
// Go over today's code along.
// Use useEffect and useState.
// function Movies ({firstResults }){
//     const posterURL = 'https://image.tmdb.org/t/p/original'
//     const urlYouTube = 'https://www.youtube.com/watch?v='
//     const [secondResults, setSecondResults] = useState([])
//     // const [director, setDirector] = useState([])
//     return(
//         <main className="wrapper">
//             <h2>Results of Movies Should Display Below</h2>
//             <ul>
//                 {
//                     firstResults.map( (movie, index) => {
//                         let movieID = movie.id
//                         axios({
//                         method: 'GET',
//                         url: `https://api.themoviedb.org/3/movie/${movieID}?`,
//                         dataResponse: 'json',
//                         params: {
//                             api_key: '9709355fc5ce17fa911605a13712678d',
//                             append_to_response: 'videos,images,credits',
//                             language: 'en-US',
//                         }
//                     }).then(movieData => {
//                     console.log(movieData)
//                     // setSecondResults(movieData.data)
//                     // console.log(secondResults)
//                     // console.log(movieData.data.imdb_id+index);
//                     // console.log(movieData.data.title)
//                     // console.log(movieData.data.overview)
//                     // console.log(posterURL+movieData.data.poster_path)
//                     // console.log(urlYouTube + movieData.data.videos.results[0].key)
//                     // console.log(movieData.data.genres[0].name)
//                     // console.log(movieData.data.credits.cast[0].name)
//                     // console.log(movieData.data.credits.cast[1].name)
//                     // console.log(movieData.data.credits.cast[2].name)
//                     // let directorPath = movieData.data.credits.crew
//                     // function isDirector(director){
//                     //     return director.job === "Director"
//                     // }
//                     // console.log(directorPath.find(isDirector).name)
//                 });
//                     return(
//                         <li className="movieContainer">
//                             <h2>Results Within Li</h2>
//                             {
//                                 // <h2>{secondResults.title}</h2>
//                             }
//                         </li>
//                     )
//                 })
//                 }
//             </ul>
//         </main>
//     )
// }