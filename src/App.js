import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [userInput, setUserInput] = useState('')

  const handleSearch = (event) => {
  event.preventDefault();

  axios({
    method: 'GET',
    url: 'https://api.themoviedb.org/3/search/movie',
    dataResponse: 'json',
    params: {
      api_key: '9709355fc5ce17fa911605a13712678d',
      language: 'en-US',
      page: 1,
      query: userInput
    }}).then(response => {
      const moviesArray = response.data.results;
      moviesArray.map( (movie, index) => {
        let movieID = movie.id
        console.log(movieID)
        const test = axios({
          method: 'GET',
          url: `https://api.themoviedb.org/3/movie/${movieID}?`,
          dataResponse: 'json',
          params: {
            api_key: '9709355fc5ce17fa911605a13712678d',
            append_to_response: 'videos,images,credits',
            language: 'en-US',
          }}).then(movieData => {
            console.log(test)
            console.log(movieData);
          });
        })
    });
  }

  const handleChange = (event) => {
    setUserInput(event.target.value);
  }



  return (
    <div className="App"> 
    <form onSubmit={handleSearch}>
      <input onChange={handleChange} type="text" name="search" id="search" placeholder="Search Here"/>
      <button type="submit">Search</button>
    </form>

    <ul>


    </ul>


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
    // Michelle's recommendation to filter out adult genre (adult: false, video: true?)

    // Ask about turning two fetch's into async functions during weekend office hours
