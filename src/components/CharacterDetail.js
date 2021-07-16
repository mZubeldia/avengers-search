import { Link } from "react-router-dom";

const CharacterDetail = (props) => {
  return (
    <main className="card-detail-container">
      <Link className="return-link" to="/">
        Go back
      </Link>
      <div className="main-detail">
        <section className="mid-section-card-left">
          <img src={props.heroData.image} alt={props.heroData.heroName} />
        </section>
        <section className="mid-section-card-right">
          <h2 className="detail-title">{props.heroData.heroName}</h2>
          <ul className="list-detail">
            <li className="list-detail__item">
              Bio:
              {props.heroData.bio}
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
};

export default CharacterDetail;
