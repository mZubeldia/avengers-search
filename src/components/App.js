import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

//estilos
import "../stylesheet/App.scss";
import "../stylesheet/reset.scss";

//estructura web
import Header from "./Header";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import CharacterNotFound from "./CharacterNotFound";
import Footer from "./Footer";

//servicios
import getApiData from "../services/api";
import localSt from "../services/localStorage";

const App = () => {
  //const charactersLocalStData = localSt.get("characters", []); //aquí controlo cuándo recoger los datos del local con el get. Declaro en array vacío para que la función no me retorne undefined y se rompa cuando llamo a characters al principio

  //estados

  const [characters, setCharacters] = useState(localSt.get("characters", [])); // estado de datos y llamo a localStorage para que recoja los datos de characters
  const [filterName, setFilterName] = useState(localSt.get("filterName", ""));

  const [filterSpecies, setFilterSpecies] = useState(
    localSt.get("filterSpecies", "")
  );

  //effects

  useEffect(() => {
    //ejecuta cosas en el montaje
    if (characters.length === 0) {
      //si el array de personajes está vacío, llama a la API
      getApiData().then((characterData) => {
        setCharacters(characterData);
      });
    }
  }, []); //parámetro que nos indica cuándo se debe ejecturar el use effect

  useEffect(() => {
    localSt.set("characters", characters);
  }, [characters]);

  useEffect(() => {
    localSt.set("name", filterName);
  }, [filterName]);

  useEffect(() => {
    localSt.set("species", filterSpecies);
  }, [filterSpecies]);

  //event handlers

  const handleFilter = (data) => {
    //función general para todos los filtros

    if (data.key === "name") {
      setFilterName(data.value);
    } else if (data.key === "species") {
      setFilterSpecies(data.value);
    }
  };

  //render - pintado

  const filteredCharacters = characters
    .filter((character) => {
      return character.name.toLowerCase().includes(filterName.toLowerCase());
    })
    .filter((character) => {
      return character.species
        .toLowerCase()
        .includes(filterSpecies.toLowerCase());
    });

  const renderCharacterDetail = (props) => {
    // renderear con rutas
    const routerCharacterId = props.match.params.characterId;
    const foundCharacter = characters.find((character) => {
      return character.id === parseInt(routerCharacterId);
    }); //parseInt(routerCharacterId)
    console.log("router props", routerCharacterId, foundCharacter);

    if (foundCharacter !== undefined) {
      //si no lo encuentra en el array
      return <CharacterDetail character={foundCharacter} />;
    } else {
      return <CharacterNotFound />;
    }
  };

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <main className="main">
            <Filters
              filterName={filterName}
              filterSpecies={filterSpecies}
              handleFilter={handleFilter}
            />

            <CharacterList characters={filteredCharacters} />
          </main>
        </Route>
        <Route path="/character/:characterId" render={renderCharacterDetail} />
        <Route path="*" component={CharacterNotFound} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
