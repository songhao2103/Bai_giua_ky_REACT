import "./App.css";
import { useState } from "react";
import { listData } from "./listData";
import HiddenMovie from "./HiddenMovie";
import Header from "./Header";
import ListMovie from "./ListMovie";

function App() {
  //Tạo giá trị ban đầu cho danh sách hiển thị, sẽ chỉ có 6 bộ phim lúc mới khởi tạo
  const [listMovie, setListMovie] = useState(
    listData.filter((item) => item.id !== "1")
  );
  //Lưu phim đang được xem, giá trị ban đầu là bộ phim đầu tiên theo thứ tự
  const [movieViewed, setMovieViewed] = useState(listData[0]);

  //hàm xử lí khi click vào các bộ phim
  const handleClickMovie = (index, movie) => {
    const newListMovie = [...listMovie]; // copy listMovie sang 1 mảng mới
    newListMovie[index] = movieViewed; // thay đổi movie được click thành movie đã được xem trước đó
    setListMovie(newListMovie); // set lại listMovie
    setMovieViewed(movie); // set lại movieViewed
  };

  return (
    <div className="main_content">
      <Header></Header>
      <HiddenMovie movie={movieViewed}></HiddenMovie>
      <ListMovie
        listMovie={listMovie}
        handleClickMovie={handleClickMovie}
      ></ListMovie>
    </div>
  );
}

export default App;
