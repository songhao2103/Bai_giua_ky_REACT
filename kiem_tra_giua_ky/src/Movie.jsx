const Movie = ({ movie, handleClickMovie, index }) => {
  return (
    <div className="movie" onClick={() => handleClickMovie(index, movie)}>
      <img src={movie.image} alt="" />
      <div className="content">
        <p className="desc">Episode {movie.episode}</p>
        <p className="name">{movie.movieName}</p>
      </div>
      <div className="bgc"></div>
    </div>
  );
};

export default Movie;
