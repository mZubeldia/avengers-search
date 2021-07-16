import FilterByName from "./FilterByName";
import FilterBySpecies from "./FilterBySpecies";

const Filters = (props) => {
  const handleForm = (ev) => {
    ev.preventDefault();
  };
  return (
    <form className="main__form" onClick={handleForm}>
      <FilterByName
        filterName={props.filterName}
        handleFilter={props.handleFilter}
      />
      <FilterBySpecies
        filterSpecies={props.filterSpecies}
        handleFilter={props.handleFilter}
      />
    </form>
  );
};

export default Filters;
