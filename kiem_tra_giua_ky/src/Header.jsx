//Component phần header
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <p className="logo">Anonime</p>
      </div>

      <ul className="navigation">
        <li className="desc">Home</li>
        <li className="desc">List Anime</li>
      </ul>

      <div className="search">
        <input type="text" placeholder="Search anime or movie" />
      </div>
    </div>
  );
};

export default Header;
