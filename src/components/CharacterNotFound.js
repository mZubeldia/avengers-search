import { Link } from "react-router-dom";

const CharacterNotFound = () => {
  return (
    <>
      <main className="not-found-main">
        <div className="not-found-background"></div>
        <Link className="return-link" to="/">
          Try again
        </Link>
        <h2 className="not-found-text">
          The character you are looking for is not in this dimension...
        </h2>
      </main>
    </>
  );
};

export default CharacterNotFound;
