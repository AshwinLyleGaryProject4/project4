import axios from 'axios';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
// import MovieInfo from './Components/MovieInfo';
import { useState, useEffect } from 'react';

function App() {
  const baseURL = 'https://api.themoviedb.org/3/search/movie'
  const [searchTerm, setSearchTerm] = useState('');
  const [firstResults, setFirstResults] = useState([])
  const [secondResults, setSecondResults] = useState([])

  const firstCall = (event) => {
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
      query: searchTerm,
      append_to_response: 'videos,images,credits',
    }}).then(response => {
      const firstResults = response.data.results;
        firstResults.length !== 0  
        ? secondCall(firstResults)
        : alert(`No results found for ${searchTerm}, please try again.`)
        return firstResults
    });
  }

  const secondCall = (firstResults) => {
    const posterURL = 'https://image.tmdb.org/t/p/original'
    const urlYouTube = 'https://www.youtube.com/watch?v='

    firstResults.map( (movie) => {
      let movieID = movie.id
      
      axios({
        method: 'GET',
        url: `https://api.themoviedb.org/3/movie/${movieID}?`,
        dataResponse: 'json',
        params: {
          api_key: '9709355fc5ce17fa911605a13712678d',
          append_to_response: 'videos,images,credits',
          language: 'en-US',
        }}).then(movieData => {
          // console.log(movieData.data)
          // console.log(movieData.data.title)
          // movieData.data.title
          setSecondResults(movieData.data.title)
          console.log(secondResults)

          // console.log(movieData.data.imdb_id+index);
          // console.log(movieData.data.title)
          // console.log(movieData.data.overview)
          // console.log(posterURL+movieData.data.poster_path)
          // console.log(urlYouTube + movieData.data.videos.results[0].key)
          // console.log(movieData.data.genres[0].name)
          // console.log(movieData.data.credits.cast[0].name)
          // console.log(movieData.data.credits.cast[1].name)
          // console.log(movieData.data.credits.cast[2].name)

          // let directorPath = movieData.data.credits.crew
          // function isDirector(director){
          //   return director.job === "Director"
          // }
          // console.log(directorPath.find(isDirector).name)
        })
    })
  }

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  }

  return (
    <div className="App"> 
      <Header 
        handleChange={handleChange}
        firstCall={firstCall}
      />

      <Footer />
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