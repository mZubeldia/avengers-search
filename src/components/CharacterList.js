import CharacterCard from "./CharacterCard";

const CharacterList = (props) => {
  let characterElement = "";

  if (props.heros.length !== 0) {
    characterElement = props.heros.map((hero) => {
      return (
        <li className="character__list__item" key={hero.id}>
          <CharacterCard heroData={hero} />
        </li>
      );
    });
  } else {
    characterElement = <h2>Hero not found</h2>;
  }
  return (
    <section className="results-section">
      <ul className="character__list">{characterElement}</ul>
    </section>
  );
};

export default CharacterList;
