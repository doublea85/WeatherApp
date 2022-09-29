import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "../../api";

const Search = ({ onSearchChange }) => {
  const [Search, setSearch] = useState(null);

  //permet de d'autocompleter la recherche
  // Cette recherche est fait à partir du fetch de l'api
  // La methode loadOptions prend un input et fais qui sera passer dans fetch pour racuperer les données
  const loadOptions = (inputValue) => {
    /* 
        - Nous avons utiliser GEO_API_URL qui correspond à l'url dans le fichier api.js
        - Dans l'ur nous pouvons ajouter des parametres pour filtrer le résultat
        Ex: ici nous voulons juste des villes qui contienet au moins 1million d'habitant 
        - namePrefix correspond à ce qui sera saisi par l'utilisateur*/
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`, //Corresponds aux valeurs que l'on veut récuperer
              label: `${city.name} ${city.countryCode}`, // Le pays(endroit) sur lequel nous souhaitons récuperer des infos
            };
            /* Ici nous avons maper sur les données d'une ville 
              Pour chaque ville saisi par l'utilisateur nous récupreons des infos qui nous interrese
            */

          }),
        };
      })
      .catch((err) => console.error(err));
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600} //
      value={Search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
