import { useState } from 'react';
import noPoster from '../noPoster.jpg'
const UserSearchResult = ({userSearchResults, displayNaturalForm}) => {
    const [genreInput, setGenreInput] = useState();
    const [timeInput, setTimeInput] = useState();
    return (
      <div>
        {displayNaturalForm ? (
          <form>
            <label>I feel like watching a </label>
            <input
              onChange={(event) => {
                setGenreInput(event.target.value);
              }}
              value={genreInput}
              type="text"
              name="searchBar"
              id="searchBar"
              placeholder="Search"
            />
            <label>movie, and I have </label>
            <input
              onChange={(event) => {
                setTimeInput(event.target.value);
              }}
              value={timeInput}
              type="text"
              name="searchBar"
              id="searchBar"
              placeholder="Search"
            />
            <button type="submit">Search</button>
          </form>
        ) : null}
        <h2>User Search Div</h2>
        <ul className="resultContainer">
          {userSearchResults
            ? userSearchResults.map((movie) => {
              console.log(movie);
                return (
                  <li>
                    <div className="poster">
                      {/* <div className="description">
                    <h2>{movie.original_title}</h2>
                    <h2>{movie.tagline}</h2>
                    <p>{movie.overview}</p>
                  </div> */}
                      <div className="poster-image">
                        <img
                          src={'https://image.tmdb.org/t/p/w500null'}
                          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                          alt={`Poster for ${movie.original_title}`}
                        />
                      </div>
                    </div>
                  </li>
                );
              })
            : null}
        </ul>
      </div>
    );
}
export default UserSearchResult;