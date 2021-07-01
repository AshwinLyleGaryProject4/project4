import ReactPlayer from "react-player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const MovieInfo = ({
  movieInfoDetail,
  handleClose,
  director,
  cast,
  youTube,
  handleAddToList,
  displayAddList,
}) => {
  const closeElement = (
    <FontAwesomeIcon
      icon={faTimesCircle}
      aria-hidden="true"
      className="closeElementIcon"
    />
  );

  return (
    <div className="moviePage">
      {movieInfoDetail ? (
        <div className="modal">
          <div className="modalContainer">
            <div className="modalLeft">
              <div className="modalLeftTop">
                <button onClick={handleClose} className="closeElementButton">
                  {closeElement}
                  {/* <i class="fas fa-times-circle"></i> */}
                </button>
                <div className="modalTextContent">
                  <h3>{movieInfoDetail.title}</h3>
                  <h4>
                    <strong>Directed by: </strong>
                    <span>{director}</span>
                  </h4>
                  <h4>
                    <strong>Cast:</strong>
                    {cast
                      ? cast.map((castMember) => {
                          return <span> {castMember.name} </span>;
                        })
                      : null}{" "}
                  </h4>
                  {/* <h2>{movieInfoDetail.tagline}</h2> */}
                  <p>{movieInfoDetail.overview}</p>
                </div>
                <div className="modalLeftBottom">
                  <div>
                    <h4>
                      <strong> GENRE: </strong>
                    </h4>
                    {movieInfoDetail.genres.map((genre) => {
                      return <p>{genre.name}</p>
                    })}

                    <h4>
                      <strong>Runtime: </strong>
                      <span>{movieInfoDetail.runtime} mins</span>
                    </h4>
                  </div>
                  {/* <span>Hello</span> */}
                  {youTube ? (
                    <ReactPlayer
                      url={`https://www.youtube.com/watch?v=${youTube}`}
                      width="20vw"
                      height="30vh"
                    />
                  ) : (
                    <h5>
                      <span>
                        Sorry!<p>There's no YouTube link this movie!</p>
                      </span>
                    </h5>
                  )}
                </div>
              </div>
            </div>
            <div className="modalRight">
              <div className="modalImageContent">
                {/* <div className="poster-image"> */}
                <img
                  src={`https://image.tmdb.org/t/p/w500${movieInfoDetail.poster_path}`}
                  alt={`Poster for ${movieInfoDetail.original_title}`}
                />
                {/* </div> */}

                {displayAddList ? (
                  <div className="addButton">
                    <button onClick={handleAddToList}>Add to List</button>
                  </div>
                ) : (
                  <h5>This movie has been added to your list!</h5>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default MovieInfo;
