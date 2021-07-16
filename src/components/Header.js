import imgHeader from "../images/rick_morty_logo.png";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-text">Rick and Morty</h1>
      <img
        className="header-img"
        src={imgHeader}
        alt="Rick and Morty"
        title="Rick and Morty"
      />
    </header>
  );
};

export default Header;
