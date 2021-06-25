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
      moviesArray.map( (movie) => {
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


// Each movie has Id when searching by query
// Need to get that id into url before api key 
// To access information needed for project (e.g. director and cast), append using commas to the end of url

// Make query using search term
// Put in variable and have it used in URL

// https://image.tmdb.org/t/p/original/2DyEk84XnbJEdPlGF43crxfdtHH.jpg