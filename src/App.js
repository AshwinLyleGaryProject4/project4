import logo from './tmdb.svg'
import axios from 'axios';
import './App.css';
import Header from './Header';
import MovieInfo from './MovieInfo';
import { useState } from 'react';

function App() {
  const baseURL = 'https://api.themoviedb.org/3/search/movie'
  const [searchTerm, setSearchTerm] = useState('');
  const [arrayOfMovies, setArrayOfMovies] = useState([])

  const handleSearch = (event) => {
  event.preventDefault();
  axios({
    method: 'GET',
    url: baseURL,
    dataResponse: 'json',
    params: {
      api_key: '9709355fc5ce17fa911605a13712678d',
      language: 'en-US',
      page: 1,
      adult: false,
      query: searchTerm
    }}).then(response => {
      const moviesResult1 = response.data.results;
        moviesResult1.length !== 0  
        ? setArrayOfMovies(moviesResult1)
        : alert(`No results found for ${searchTerm}, please try again.`)
    });
  }

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  }

  return (
    <div className="App"> 
      <Header 
        handleChange={handleChange}
        handleSearch={handleSearch}
      />

    <main className="wrapper">
      <h2>Movies</h2>
      <ul>
        {
        arrayOfMovies.map( (movie) => {
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
          const posterURL = 'https://image.tmdb.org/t/p/original'
          const urlYouTube = 'https://www.youtube.com/watch?v='

          console.log(movieData)
          // console.log(movieData.data.title)
          // console.log(movieData.data.overview)
          // console.log(posterURL+movieData.data.poster_path)
          // console.log(movieData.data.genres[0].name)
          // console.log(`https://www.youtube.com/watch?v=${movieData.data.videos.results[0].key}`)

          let directorPath = movieData.data.credits.crew
          directorPath.filter( (movieDirector) => {
            const director = movieDirector.department === "Directing"
            console.log(director)
            return director
          })

          

            return(
              <li className="movieContainer">
                <h2>Test</h2>
                <h2>{movieData.data.title}</h2>
                <img src={posterURL+movieData.data.poster_path} alt={movieData.data.title} />
                <p>{movieData.data.overview}</p>


              </li>
            )
          });
        })
        }
      </ul>
    </main>

    <footer>
      <p>This product uses the TMDb API but is not endorsed or certified by TMDb.</p>
      <img className="logo" src={logo} alt="The Movie Database Logo" />
    </footer>
    </div>
  );
}

export default App;

// Create a component that will hold the li
  // Info to pass in (title, description, cast, director, run time, genre, trailer )
    // implement match method to find director 
    // director nested randomly within second crew array. need match "director" to find object
    
    // get YouTube video showing on screen (https://stackoverflow.com/questions/55528577/react-moviedb-api-problem-setting-this-setstate-twice-breaks-my-component)

    // poster: properly get image url setup (https://image.tmdb.org/t/p/original/2DyEk84XnbJEdPlGF43crxfdtHH.jpg)
    // look into 3 types of url to use (https://www.youtube.com/watch?v=sZ0bZGfg_m4)
    // Request Token: 83df14e787350b3c921ee777216dda9be63f5f44

    // Ask about turning two fetch's into async functions during weekend office hours
