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
import Footer from "./Footer";

//servicios
import getMarvelData from "../services/api";
import localSt from "../services/localStorage";

const App = () => {
  //estados

  const [heros, setHeros] = useState(localSt.get("heros", [])); // estado de datos y llamo a localStorage para que recoja los datos de characters
  const [filterName, setFilterName] = useState(localSt.get("filterName", ""));

  //effects
  useEffect(() => {
    if (heros.length === 0) {
      //si el array de personajes está vacío, llama a la API
      getMarvelData().then((heroData) => {
        setHeros(heroData);
      });
    }
  }, []);
  console.log(heros);

  //event handlers

  const handleFilter = (data) => {
    //función general para todos los filtros

    if (data.key === "name") {
      setFilterName(data.value);
    }
  };

  //render - pintado

  const filteredHeros = heros.filter((hero) => {
    return hero.heroName.toLowerCase().includes(filterName.toLowerCase());
  });

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <main className="main">
            <Filters handleFilter={handleFilter} filterName={filterName} />
            <CharacterList heros={filteredHeros} />
          </main>
        </Route>
        <Route>
          <CharacterDetail />
        </Route>

        {/*<Route path="*" component={CharacterNotFound} />*/}
      </Switch>
      <Footer />
    </>
  );
};

export default App;
