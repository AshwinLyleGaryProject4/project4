import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import "../styles/App.scss";

import Footer from "./Footer";

import MovieInfo from "./MovieInfo";
import HeaderForm from "./HeaderForm";
import UserSearchResult from "./UserSearchResult";

function App() {
  const [userSearchResults, setUserSearchResults] = useState();

  const [displayNaturalForm, setDisplayNaturalForm] = useState(false);

  // For Modal

  const [displayMovieInfo, setDisplayMovieInfo] = useState(false);

  const [movieInfoDetail, setMovieInfoDetail] = useState();

  const [director, setDirector] = useState();
  const [cast, setCast] = useState();
  const [youTube, setYouTube] = useState();

  const [displayYouTube, setDisplayYouTube] = useState(false)

  const handleSearch = (event, userSearchInput) => {
    event.preventDefault();

    axios({
      method: `GET`,
      dataResponse: "json",
      url: `https://api.themoviedb.org/3/search/movie?`,
      params: {
        api_key: "9709355fc5ce17fa911605a13712678d",
        language: "en-US",
        include_adult: "false",
        page: 1,
        query: userSearchInput,
      },
    }).then((response) => {
      setUserSearchResults(response.data.results);
      console.log(response);
    });

    setDisplayNaturalForm(true);

  };

  // Opens Modal when clicked on images
  const handleClick = (movieID) => {
    axios({
      url: `https://api.themoviedb.org/3/movie/${movieID}`,
      params: {
        api_key: "9709355fc5ce17fa911605a13712678d",
      },
    }).then((result) => {
      console.log(result);

      setMovieInfoDetail(result.data);

    });

    axios({
      url: `https://api.themoviedb.org/3/movie/${movieID}/videos`,
      params: {
        api_key: "9709355fc5ce17fa911605a13712678d",
      },
    }).then((result) => {
      console.log(result);
      console.log(result.data.results[0].key);

      setYouTube(result.data.results[0].key);
    });

    axios({
      url: `https://api.themoviedb.org/3/movie/${movieID}/credits`,
      params: {
        api_key: "9709355fc5ce17fa911605a13712678d",
      },
    }).then((result) => {
      console.log(result);
      const directorArray = result.data.crew.filter((crew) => {
        return crew.job === "Director";
      });
      console.log(directorArray[0].name);

      setDirector(directorArray[0].name);

      setCast(result.data.cast.slice(0, 4));
    });

    setDisplayMovieInfo(true);

    setDisplayYouTube(true);
  };

  const handleClose = () => {
    setDisplayMovieInfo(false);
  };

  return (
    <Router>
      <div className="wrapper">
        <HeaderForm handleSearch={handleSearch} />

        <UserSearchResult
          userSearchResults={userSearchResults}
          displayNaturalForm={displayNaturalForm}
          handleClick={handleClick}
        />

        {/* Modal for each movie parameters */}
        {displayMovieInfo ? (
          <MovieInfo
            movieInfoDetail={movieInfoDetail}
            handleClose={handleClose}
            director={director}
            cast={cast}
            youTube={youTube} 
            displayYouTube={displayYouTube}
          />
        ) : null}


        <Footer />
      </div>
    </Router>
  );
}

export default App;

