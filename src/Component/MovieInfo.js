import ReactPlayer from "react-player";

const MovieInfo = ({
  movieInfoDetail,
  handleClose,
  director,
  cast,
  youTube, 
  handleAddToList
  // displayAddList
}) => {
  return (
    <div className="moviePage">
      {movieInfoDetail ? (
        <div className="modal">
          <div>
            <div className="modalContent">
              <h2>{movieInfoDetail.original_title}</h2>
              <h2>{director}</h2>
              {cast
                ? cast.map((castMember) => {
                    return <h3>{castMember.name}</h3>;
                  })
                : null}
              <h2>{movieInfoDetail.tagline}</h2>
              <p>{movieInfoDetail.overview}</p>
              <span>{movieInfoDetail.genres.map((genre) => {
                return <p>{genre.name}</p>;
              })}</span>
              <span>{movieInfoDetail.runtime}</span>
              <span>Hello</span>

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

            <div className="poster-image">
              <img
                src={`https://image.tmdb.org/t/p/w500${movieInfoDetail.poster_path}`}
                alt={`Poster for ${movieInfoDetail.original_title}`}
              />
            </div>

            <button onClick={handleClose}>X</button>

            <button onClick={handleAddToList}>Add to List</button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default MovieInfo;