import { Link } from "react-router-dom";

const CharacterCard = (props) => {
  return (
    <Link to={`/character/${props.heroData.id}`}>
      <article className="character__list-item">
        <img
          className="character-pic"
          src={props.heroData.image}
          alt={props.heroData.name}
        />

        <h2 className="character-name">{props.heroData.heroName}</h2>
        {/*<p className="character-species">{props.heroData.comics}</p>*/}
      </article>
    </Link>
  );
};

export default CharacterCard;
