import firebase from "../config/firebase";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";



const UserList = ({ handleClick }) => {
  const movieListRef = firebase.database().ref();
  const [movieList, setMovieList] = useState();
  const [genreInput, setGenreInput] = useState();
  const [timeInput, setTimeInput] = useState();

  const element = <FontAwesomeIcon icon={faTrashAlt} aria-hidden="true" className="trashIcon"/>;


  // Remove movie from list
  const handleRemoveMovie = (key) => {
    movieListRef.child(key).remove();
  };
  useEffect(() => {
    // const movieListRef = firebase.database().ref();
    movieListRef.on("value", (response) => {
      const movieListInfo = response.val();
      const movieListArray = [];
      for (let key in movieListInfo) {
        movieListArray.unshift({
          key: key,
          name: movieListInfo[key],
        });
      }
      console.log(movieListArray);
      setMovieList(movieListArray);
    });

    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const pickRandomMovie = (e) => {
    e.preventDefault();
    movieListRef.on("value", (response) => {
      const movieListInfo = response.val();
      const movieListArray = [];
      for (let key in movieListInfo) {
        movieListArray.unshift({
          key: key,
          name: movieListInfo[key],
        });
      }
      console.log(movieListArray);
      setMovieList(movieListArray);
      console.log("test");
      // console.log(movieList);
      // console.log(movieList[0].name.genre[0].name)
      // console.log(movieList[0].name.length)
      const filteredList = movieListArray.filter((movie, index) => {
        
        for (let i = 0; i < movie.name.genre.length; i++) {
          if (
            movie.name.length < timeInput &&
            (movie.name.genre[i].name === genreInput ||
            genreInput === "allGenres")
          ) {
            return movie;
          }
          else {
            return null;
          }
        }
        return null
      });

      setMovieList(filteredList);


      if (filteredList.length < 1) {
        setMovieList(null);
      }
    });
  };
  return (
    <div className="userListContainer">
      <h2>User List</h2>
      <div>
        {/* Native Language Form DO NOT DELETE */}
        <form
          onSubmit={(e) => {
            pickRandomMovie(e);
          }}
        >
          <fieldset>
            <label htmlFor="genreChoice">I feel like watching a</label>
            <select
              name="genreChoice"
              onChange={(event) => {
                setGenreInput(event.target.value);
              }}
              value={genreInput}
              className="genreChoiceDropDown"
            >
              {/* Action, Adventure, Animation, Comedy, Crime, Documentary, Drama,
            Family, Fantasy, History, Horror, Music, Mystery, Romance, Science
            Fiction, Thriller, TV Movie, War, and Western. */}
              <option value="allGenres">Whatever</option>
              <option value="Action">Action</option>
              <option value="Adventure">Adventure</option>
              <option value="Animation">Animation</option>
              <option value="Comedy">Comedy</option>
              <option value="Drama">Drama</option>
              <option value="Horror">Horror</option>
              <option value="Romance">Romance</option>
              <option value="Romance">Romance</option>
              <option value="Romance">Romance</option>
              <option value="Romance">Romance</option>
              <option value="Romance">Romance</option>
              <option value="Romance">Romance</option>
              <option value="Romance">Romance</option>
            </select>

            <label htmlFor="timeChoice">movie, and I have</label>
            <select
              name="timeChoice"
              onChange={(event) => {
                setTimeInput(event.target.value);
              }}
              value={timeInput}
              className="timeChoiceDropDown"
            >
              <option value="90">less than 90mins</option>
              <option value="120">less than 120mins</option>
              <option value="1000">All the time in the world!</option>
            </select>
          </fieldset>
          <div>
            <button type="submit">Filter Choices</button>
          </div>
        </form>
      </div>
      <ul className="userList">
        {movieList ? (
          movieList.map((movie, index) => {
            return (
              <li key={index} className="movieListItem">
                {/* <p>{movie.name.title}</p> */}
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.name.poster_path}`}
                  alt={`Poster for ${movie.name.title}`}
                  onClick={() => {
                    handleClick(movie.name.id);
                  }}
                />
                
                <button
                  onClick={() => {
                    handleRemoveMovie(movie.key);
                  }}
                >
                  {/* <FontAwesomeIcon icon={["fas", "trash-alt"]} /> */}
                  {/* <i class="fas fa-trash-alt"></i> */}
                  {element}
                </button>
              </li>
            );
          })
        ) : (
          <div>No Movie to Display</div>
        )}
      </ul>
    </div>
  );
};

export default UserList;
