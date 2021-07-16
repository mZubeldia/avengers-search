const FilterBySpecies = (props) => {
  const handleSpecies = (ev) => {
    //función para pasar los datos limpios a App
    props.handleFilter({
      value: ev.target.value,
      key: "species",
    });
  };

  return (
    <input
      className="form__input species"
      type="text"
      name="species"
      id="species"
      value={props.filterSpecies}
      placeholder="Species"
      onChange={handleSpecies}
    />
  );
};

export default FilterBySpecies;
