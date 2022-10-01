import logo from "./logo.svg";
import "./App.css";
import Search from "./componets/search/Search";
import CurrentWeather from "./componets/current-weather/CurrentWeather";
import Forecast from "./componets/forecast/Forecast";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
import { useState } from "react";

function App() {
  /**On crée deux etats pour contenir nos apels d'api */
  const [currentWeather, setCurrentWeather] = useState(null); // l'etat est null au départ
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    /** Nous alons rechercher des donées via la logitude et la latitude
     * Transformer les deux données en tableau puis le injecter dans l'ur que nous utilisons dan fetch
     */
    const [lat, lon] = searchData.value.split(" ");

    // Ici nous allons mettre le début de l'url dans le composant/fichier api puis l'importer comme on l'a fait avec le composant currentweather la pertie paramètre reste ici

    // Request for the current weather
    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    // Request for the forcast
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    /**Une promesse est un objet (Promise) qui représente la complétion ou l'échec d'une opération asynchrone.
     * En résumé, une promesse est un objet qui est renvoyé et auquel on attache des callbacks plutôt que de passer des callbacks à une fonction. Ainsi, au lieu d'avoir une fonction qui prend deux callbacks en arguments
     */
    // ic L'ordre dans le promise est importante pour la récuperation des données
    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json(); // on utilise la methode json() pour pouvoir maper response par la suite
        const forecastResponse = await response[1].json();
        // Nous mettons à jour notre etat quand on reçoi le sresponses en format json
        setCurrentWeather({ city: searchData.label, ...weatherResponse }); // on crée un nouvel objet sans pourtant affecter
        setForecast({ city: searchData.label, ...forecastResponse });
        /*Nous allons etendre les données que nous envoyons et sauvegardons ici 
      car les données que les données que nous obtenons de l'api ne contiennet 
      pas les etiquettes du code de pays
      Pour fair cela nous le récuperons de geoAPI
      */
      })
      // En cas déchec
      .catch((err) => console.log(err));
  };

  console.log(currentWeather);
  console.log(forecast);

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {/* Passer les données à notre composant
        Afficher le composat si et seulement s'il existe
      */}
      {currentWeather && <CurrentWeather data={currentWeather} />}

      {forecast && <Forecast data={forecast}/>}
    </div>
  );
}

export default App;
