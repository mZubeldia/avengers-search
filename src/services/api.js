/*
139b9b05575677bae7c915f0c1370b7ccbbeeb4466464e55f4ddd129f74ccf08944a6d607
hash: 21cb4015a6c6ae718eab1dc032803fce
general: id, nombre, img, nº de cómics
detalle: id, nombre, img, nº de cómics, bio
*/

const getMarvelData = () => {
  const urlAPI =
    "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=6464e55f4ddd129f74ccf08944a6d607&hash=21cb4015a6c6ae718eab1dc032803fce";
  return fetch(urlAPI)
    .then((response) => response.json())
    .then((json) => {
      const cleanData = json.data.results.map((hero) => {
        return {
          heroName: hero.name,
          id: hero.id,
          //image: hero.thumbnail.path + hero.thubnail.extension,
          bio: hero.description,
          comics: hero.comics,
        };
      });
      //console.log(json.data.results);
      console.log(cleanData);
      return cleanData;
    });
};

/*  
original api
const getApiData = () => {
  return fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.results.map((character) => {
        return {
          name: character.name,
          id: character.id,
          picture: character.thumbnail,
          description: character.description,
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
*/

export default getMarvelData;
