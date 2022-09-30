import logo from './logo.svg';
import './App.css';
import Search from './componets/search/Search';
import CurrentWeather from './componets/current-weather/CurrentWeather';
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";

function App() {

  const handleOnSearchChange = (searchData) =>{
    /** Nous alons rechercher des donées via la logitude et la latitude
     * Transformer les deux données en tableau puis le injecter dans l'ur que nous utilisons dan fetch
     */
     const [lat, lon] = searchData.value.split(" ");

     // Ici nous allons mettre le début de l'url dans le composant/fichier api puis l'importer comme on l'a fait avec le composant currentweather la pertie paramètre reste ici

     // Request for the current weather
     const currentWeatherFetch = fetch(
       `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
     );

     // Request for the forcast
     const forcastFetch = fetch(
       `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
     );

     Promise.all([])
  }
  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange}/>
      <CurrentWeather />
    </div>
  );
}

export default App;
