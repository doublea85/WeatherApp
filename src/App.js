import logo from './logo.svg';
import './App.css';
import Search from './componets/search/Search';
import CurrentWeather from './componets/current-weather/CurrentWeather';

function App() {

  const handleOnSearchChange = (searchData) =>{
    console.log(searchData);
  }
  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange}/>
      <CurrentWeather />
    </div>
  );
}

export default App;
