import "./CurrentWeather.css";

const CurrentWeather = ({ data }) => {
  //Récuperation des données envoyées par le parent
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weather-desc">{data.weather[0].description}</p>
        </div>
        <img
          className="weather-icon"
          src={`icons/${data.weather[0].icon}.png`}
          alt="weather"
        />
      </div>
      <div className="bottom">
        <p className="temperature"> {Math.round(data.main.temp)}°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">
              Max / Min
            </span>
            <span className="parameter-value">
              {Math.round(data.main.temp_max)} /{" "}
              {Math.round(data.main.temp_min)}
            </span>
          </div>

          <div className="parameter-row">
            <span className="parameter-label">
              Feels like</span>
            <span className="parameter-value">
              {Math.round(data.main.feels_like)}°C
            </span>
          </div>

          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">{data.wind.speed} km/h</span>
          </div>

          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{data.main.humidity}%</span>
          </div>

          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">{data.main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
