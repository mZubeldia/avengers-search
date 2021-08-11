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

  //event handlers

  const handleFilter = (data) => {
    //función general para todos los filtros

    if (data.key === "name") {
      setFilterName(data.value);
    }
  };

  //render - pintado

  //función para pintar héroes filtrados
  const filteredHeros = heros.filter((hero) => {
    return hero.heroName.toLowerCase().includes(filterName.toLowerCase());
  });

  //función para pintar detalle héroes
  const renderHeroDetail = (props) => {
    console.log("router props", props.match.params.heroId);
    const routeHeroId = props.match.params.heroId;
    const FoundHero = heros.find((hero) => {
      return hero.id === routeHeroId;
    });
    if (FoundHero === undefined) {
      return <CharacterDetail heros={heros} />;
    } else {
      return <CharacterNotFound />;
    }
  };
  /*
    const renderHeroDetail = (props) => {
    const foundHero = heros.find((hero) => {
      return hero.id;
    });
  };

  return <CharacterDetail />
  */

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
        <Route path="/hero/:heroId" render={renderHeroDetail}></Route>

        {/*<Route path="*" component={CharacterNotFound} />*/}
      </Switch>
      <Footer />
    </>
  );
};

export default App;
