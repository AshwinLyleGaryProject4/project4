import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from 'axios';
import './App.css';
import Header from './Component/Header'
import Footer from './Component/Footer'
import MainPage from './Component/MainPage'
import MovieInfo from './Component/MovieInfo';
import HeaderForm from './Component/HeaderForm';


function App() {
  return (
    <Router>
      <div className="wrapper"> 
        <HeaderForm />

        <Route exact path="/" component={MainPage} />
        <Route exact path="/movie/:movieID" component={MovieInfo}/>

        <Footer />
      </div>
    </Router>
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


  // First axios call, change to search
  // Add query parameter, get rid of select year
  // Soft code to ${searchInput}

  // const searchInput = "God Father"
  // Create component that will get userInput and import it to there

  // Pull API call based on user parameter
  // Axios call, separate component to do search
  // Pull that in together


//    const firstSearch = (event) => {
//   event.preventDefault();
//   axios({
//     method: 'GET',
//     url: baseURL,
//     dataResponse: 'json',
//     params: {
//       api_key: '9709355fc5ce17fa911605a13712678d',
//       language: 'en-US',
//       page: 1,
//       adult: false,
//       query: searchTerm
//     }}).then(response => {
//       const firstResponse = response.data.results;
//         firstResponse.length !== 0  
//         ? setFirstResults(firstResponse)
//         : alert(`No results found for ${searchTerm}, please try again.`)
//     });
//   }
  

//   const handleChange = (event) => {
//     setSearchTerm(event.target.value);
//   }

//   return (
//     <div className="App"> 
//       <Header 
//         handleChange={handleChange}
//         firstSearch={firstSearch}
//       />

//       <Movies 
//         firstResults={firstResults}
//       />

//     <Footer />
//     </div>
//   );
// }