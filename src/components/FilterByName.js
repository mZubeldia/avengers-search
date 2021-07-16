const FilterByName = (props) => {
  const handleName = (ev) => {
    //función para pasar los datos limpios a App
    props.handleFilter({
      value: ev.target.value,
      key: "name",
    });
  };

  return (
    <input
      className="form__input name"
      type="text"
      name="name"
      id="name"
      value={props.filterName}
      placeholder="Character's name"
      onChange={handleName}
    />
  );
};

export default FilterByName;
