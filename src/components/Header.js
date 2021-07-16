import imgHeader from "../images/marvel1.jpg";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-text">Marvel Search</h1>
      <img
        className="header-img"
        src={imgHeader}
        alt="Marvel Search"
        title="Marvel Search"
      />
    </header>
  );
};

export default Header;
