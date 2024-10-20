import Movie from "./Movie";

const ListMovie = ({ listMovie, handleClickMovie }) => {
  return (
    <div className="list_movie">
      <p className="title">New Release</p>
      <div className="list">
        {listMovie.map((item, index) => (
          <Movie
            key={item.id}
            movie={item}
            handleClickMovie={handleClickMovie}
            index={index}
          ></Movie>
        ))}
      </div>
    </div>
  );
};

export default ListMovie;
