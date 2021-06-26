function MovieInfo ({title, overview, poster}){
    const posterURL = 'https://image.tmdb.org/t/p/original'
    return(
        <li className="movieContainer">
            <h2>{title}</h2>
            <img src={posterURL+poster} alt={title} />
            <p>{overview}</p>
        </li>
    )
}

export default MovieInfo;