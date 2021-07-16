import { Link } from "react-router-dom";

const CharacterDetail = (props) => {
  return (
    <main className="card-detail-container">
      <Link className="return-link" to="/">
        Go back
      </Link>
      <div className="main-detail">
        <section className="mid-section-card-left">
          <img src={props.character.picture} alt="nombre" />
        </section>
        <section className="mid-section-card-right">
          <h2 className="detail-title">{props.character.name}</h2>
          <ul className="list-detail">
            <li className="list-detail__item">
              Status:
              {props.character.status}
            </li>
            <li className="list-detail__item">
              Species: {props.character.species}
            </li>
            <li className="list-detail__item">
              Origin: {props.character.origin}
            </li>
            <li className="list-detail__item">
              Number of episodes: {props.character.episode}
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
};

export default CharacterDetail;
