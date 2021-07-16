import { Link } from "react-router-dom";

const CharacterCard = (props) => {
  return (
    <Link to={`/character/${props.characterData.id}`}>
      <article className="character__list-item">
        <img
          className="character-pic"
          src={props.characterData.picture}
          alt={props.characterData.name}
        />

        <h2 className="character-name">{props.characterData.name}</h2>
        <p className="character-species">{props.characterData.species}</p>
      </article>
    </Link>
  );
};

export default CharacterCard;
