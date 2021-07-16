import CharacterCard from "./CharacterCard";

const CharacterList = (props) => {
  let characterElement = "";

  if (props.characters.length !== 0) {
    characterElement = props.characters.map((character) => {
      return (
        <li className="character__list__item" key={character.id}>
          <CharacterCard characterData={character} />
        </li>
      );
    });
  } else {
    characterElement = <h2>Character not found</h2>;
  }
  return (
    <section className="results-section">
      <ul className="character__list">{characterElement}</ul>
    </section>
  );
};

export default CharacterList;
