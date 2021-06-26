import logo from './tmdb.svg'
import axios from 'axios';
import './App.css';
import Header from './Header';
import MovieInfo from './MovieInfo';
import { useState } from 'react';

function App() {
  const baseURL = 'https://api.themoviedb.org/3/search/movie'
  const [searchTerm, setSearchTerm] = useState('');
  const [firstResults, setFirstResults] = useState([])

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
      const firstResponse = response.data.results;
        firstResponse.length !== 0  
        ? setFirstResults(firstResponse)
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

      <MovieInfo 
        firstResults={firstResults}

      />

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

    // look into 3 types of url to use (https://www.youtube.com/watch?v=sZ0bZGfg_m4)

    // State just list of movies (arrayOfMovies). Grab movie ID
    // Want empty array and push into array.