/*
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
          image: hero.thumbnail.path + "." + hero.thumbnail.extension,
          bio: hero.description,
          comics: hero.comics,
        };
      });

      return cleanData;
    });
};

export default getMarvelData;
