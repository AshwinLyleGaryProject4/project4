import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import "../styles/App.scss";
import firebase from "../config/firebase";

import Footer from "./Footer";
import UserList from "./UserList"
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

  const [displayAddList, setDisplayAddList] = useState(false)

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
      // console.log(result.data.results[0].key);

      // IF result.data.results[0].key exists (is true), THEN setYouTube link
      if (result.data.results.length < 1) {
        setYouTube(null)
      } else {
        setYouTube(result.data.results[0].key);
      }
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



    // console.log(movieListRef);

    // console.log(movieListRef.child())

  //     const result = movieListRef.filter((movie) => {
  //       if (movie.name.urlLink === postNum) {
  //         return true;
  //       } else {
  //         return false;
  //       }
  //     });

  // if () {
  //   setDisplayAddList(true)
  // } else {
  //   setDisplayAddList(false)
  // }

    // setDisplayYouTube(true);
  };

  const handleClose = () => {
    setDisplayMovieInfo(false);
  };

  // console.log(movieInfoDetail)

  const handleAddToList = () => {

    // console.log(youTube);

    const movieListRef = firebase.database().ref();

    const movieListInfo = movieListRef;
    movieListInfo.push({
      title: movieInfoDetail.title,
      genre: movieInfoDetail.genres,
      length: movieInfoDetail.runtime,
      id: movieInfoDetail.id,
      poster_path: movieInfoDetail.poster_path
    });


  }
  return (
    <Router>
      <div>
        <div className="wrapper">
          <HeaderForm handleSearch={handleSearch} />

          <UserList handleClick={handleClick}/>

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
              // displayYouTube={displayYouTube}
              handleAddToList={handleAddToList}
              displayAddList={displayAddList}
            />
          ) : null}
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
