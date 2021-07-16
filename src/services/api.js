//limpieza data
//tarjetas:
//id
//img
//nombre
//especie

//detalle:
//id -ya lo tengo
//name -ya lo tengo
//especie -ya lo tengo
//estado
//origen
//episodios - me falta, necesito recorrer array

const getApiData = () => {
  return fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.results.map((character) => {
        return {
          name: character.name,
          id: character.id,
          picture: character.image,
          species: character.species,
          status: character.status,
          origin: character.origin.name,
          episode: character.episode.length,
        };
      });
      cleanData.sort(function (a, b) {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });
      return cleanData;
    });
};

export default getApiData;
