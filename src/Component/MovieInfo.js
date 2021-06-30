import ReactPlayer from "react-player";
const MovieInfo = ({ movieInfoDetail, director, cast, youTube, handleClose }) => {
    return (
        <div>
        {movieInfoDetail ? (
            <div className="modal">
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
                <ReactPlayer url={`https://www.youtube.com/watch?v=${youTube}`} 
                width="20vw" height="30vh"/>
            </div>
            <div className="poster-image">
                <img
                    src={`https://image.tmdb.org/t/p/w500${movieInfoDetail.poster_path}`}
                    alt={`Poster for ${movieInfoDetail.original_title}`}
                />
            </div>
            <button onClick={handleClose}>X</button>
        </div>
        ) : null}
    </div>
    );
}
export default MovieInfo;