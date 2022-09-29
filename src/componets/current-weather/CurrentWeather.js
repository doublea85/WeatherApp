import "./CurrentWeather.css";

const CurrentWeather = () =>{
    return (
      <div className="weather">
        <div className="top">
          <div>
            <p className="city">Paris</p>
            <p className="weather-desc">Sunny</p>
          </div>
          <img className="weather-icon" src="icons/01d.png" alt="weather" />
        </div>
        <div className="bottom">
          <p className="temperature"> 14°c</p>
          <div className="details">
            <div className="parameter-row">
              <span className="parameter-label">Max / Min</span>
            </div>

            <div className="parameter-row">
              <span className="parameter-label">Feels like</span>
              <span className="parameter-value">12°c</span>
            </div>

            <div className="parameter-row">
              <span className="parameter-label">Wind</span>
              <span className="parameter-value">6 km/h</span>
            </div>

            <div className="parameter-row">
              <span className="parameter-label">Humidity</span>
              <span className="parameter-value">30%</span>
            </div>

            <div className="parameter-row">
              <span className="parameter-label">Pressure</span>
              <span className="parameter-value">12 hPa</span>
            </div>
            
          </div>
        </div>
      </div>
    );
}

export default CurrentWeather;