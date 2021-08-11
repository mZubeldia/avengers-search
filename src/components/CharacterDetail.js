import { Link } from "react-router-dom";

const CharacterDetail = (props) => {
  console.log(props.heros);
  return (
    <p>Detalle héroes</p>
    /* 
    <main className="card-detail-container">
      <Link className="return-link" to="/">
        Go back
      </Link>

      <div className="main-detail">
        <section className="mid-section-card-left">
          <img src={props.heros.image} alt={props.heros.heroName} />
        </section>
        <section className="mid-section-card-right">
          <h2 className="detail-title">{props.heros.heroName}</h2>
          <ul className="list-detail">
            <li className="list-detail__item">
              Bio:
              {props.heros.bio}
            </li>
          </ul>
        </section>
      </div>
    </main>
    */
  );
};

export default CharacterDetail;
