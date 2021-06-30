
const UserSearchResult = ({userSearchResults, displayNaturalForm, handleClick}) => {


    return (
      <div className="wrapper">

        <ul className="resultContainer">
          {userSearchResults
            ? userSearchResults.map((movie) => {
                return (
                  <li>
                    <div className="poster">
                      <div className="poster-image">
                        
                        <img
                          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                          alt={`Poster for ${movie.original_title}`}
                        onClick={() => {handleClick(movie.id)}}

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