import ReactPlayer from "react-player";

const MovieInfo = ({
  movieInfoDetail,
  handleClose,
  director,
  cast,
  youTube,
  handleAddToList,
  displayAddList
}) => {
  return (
    <div className="moviePage">
      {movieInfoDetail ? (
        <div className="modal">
          <div>
            <div className="modalTextContent">
              <h3>{movieInfoDetail.title}</h3>
              <h4>
                <strong>Directed by: </strong>
                <span>{director}</span>
              </h4>
              <h4>
                <strong>Cast:</strong>{" "}
                {cast
                  ? cast.map((castMember) => {
                      return <span> {castMember.name} </span>;
                    })
                  : null}{" "}
              </h4>
              {/* <h2>{movieInfoDetail.tagline}</h2> */}
              <p>{movieInfoDetail.overview}</p>
              <p>
                {movieInfoDetail.genres.map((genre) => {
                  return <p>{genre.name}</p>;
                })}
              </p>
              <h4>
                <strong>Runtime:</strong>{" "}
                <span>{movieInfoDetail.runtime} mins</span>
              </h4>
              {/* <span>Hello</span> */}
              {youTube ? (
                <ReactPlayer
                  url={`https://www.youtube.com/watch?v=${youTube}`}
                  width="20vw"
                  height="30vh"
                />
              ) : (
                <h2>YouTube Link Not Found</h2>
              )}
            </div>

            <div className="modalImageContent">
              {/* <div className="poster-image"> */}
              <img
                src={`https://image.tmdb.org/t/p/w500${movieInfoDetail.poster_path}`}
                alt={`Poster for ${movieInfoDetail.original_title}`}
              />
              {/* </div> */}

              {displayAddList ? <div className="addButton">
                <button onClick={handleAddToList}>Add to List</button>
              </div> : null}
            </div>

            <button onClick={handleClose}>X</button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default MovieInfo;
