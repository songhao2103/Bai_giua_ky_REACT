import { listData } from "./listData";
const HiddenMovie = ({ movie }) => {
  return (
    <div className="hidden_movie">
      <div className="title">Explore</div>
      <p className="desc">What are you gonna watch today?</p>
      <div className="media">
        <div className="image">
          <img src={movie.image} alt="" />
        </div>
        <div className="bgc"></div>
        <div className="content">
          <p className="title">{movie.movieName}</p>
          <p className="desc">{movie.description}</p>
        </div>
      </div>
    </div>
  );
};

export default HiddenMovie;
