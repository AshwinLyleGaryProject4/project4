import firebase from "../config/firebase";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";


const UserList = ({handleClick}) => {

    const movieListRef = firebase.database().ref();

    const [movieList, setMovieList] = useState();

    const [genreInput, setGenreInput] = useState();

    const [timeInput, setTimeInput] = useState();

// Remove movie from list
    const handleRemoveMovie = (key) => {
        movieListRef.child(key).remove();
    }

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
      console.log(movieListArray)
      setMovieList(movieListArray);
    });
  }, []);

  const pickRandomMovie = () => {
    console.log("test")
  }

  return (
    <div className="userListContainer">
      <h2>User List</h2>
      <div>
        {/* Native Language Form DO NOT DELETE */}
        <form>
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
              <option value="Action">Action</option>
              <option value="Adventure">Adventure</option>
              <option value="Animation">Animation</option>
              <option value="Comedy">Comedy</option>
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
              <option value="lessThan90">less than 90mins</option>
              <option value="moreThan90">more than 90mins</option>
              <option value="allTime">Forever</option>
            </select>
          </fieldset>
          <div>
            <button
              onClick={() => {
                pickRandomMovie();
              }}
            >
              Pick Random Movie
            </button>
          </div>
        </form>
      </div>
      <ul className="userList">
        {movieList
          ? movieList.map((movie, index) => {
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
                    Remove From List
                  </button>
                </li>
              );
            })
          : null}
      </ul>
    </div>
  );
};

export default UserList;
