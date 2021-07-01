
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const RandomMovieModal = ({
  handleClose,
  randomMovieSelection,
  pickAnotherRandom
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
      {randomMovieSelection ? (
        <div className="randomPickModal">
          <div className="randomPickModalContainer">

                <button onClick={handleClose} className="closeElementButton">
                  {closeElement}

                </button>



                <img
                  src={`https://image.tmdb.org/t/p/w500${randomMovieSelection.poster_path}`}
                  alt={`Poster for ${randomMovieSelection.original_title}`}
                />

                <button>Play Your Selection!</button>  <button onClick={pickAnotherRandom}>Choose Again</button>

            </div>
          </div>

      ) : null}
    </div>
  );
};

export default RandomMovieModal;