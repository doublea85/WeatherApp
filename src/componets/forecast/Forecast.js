import {
  Accordion,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemHeading,
  AccordionItemButton,
} from "react-accessible-accordion";
import "./forecast.css"

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  /**Nous allons essayer de determiner le jour puis afficher les autres jour en fonctionde cela */
  const dayInAWeek = new Date().getDay(); // Return un number
  /** Si nous sommes 'Friday' par ex nous allons afficher jusqu'a Thusday prochain on coupe a partir de 'Friday' et concaten le rester pour completer à 7 jours */
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );
  // Point de dépat le jour actuel on veut sept jour(la longueur du tableau) + le jour actuel
//   console.log(forecastDays);


  return (
    <>
      <label className="title">Daily</label>
      {/* Accrdion est un composant qui vient de react_accessible_accordion
        le paramètre "allowZeroExpanded"permet de fermer tous les accordeons par defaut 
        */}

      <Accordion allowZeroExpanded>
        {/* Nous allons boucler sur la data que nous venons de recevoir puis créer un d'accordeon pour cahque iteration */}
        {/* Recuperation de data et boucler via list 
            Nous voulons afficher que sept jour d'où l'usage de splice(0, 7)
        */}
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            {/** La partie haute de l'accordeon */}
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img
                    alt="weather"
                    className="icon-small"
                    src={`icons/${item.weather[0].icon}.png`}
                  />
                  <label className="day">{forecastDays[idx]}</label>
                  <label className="description">
                    {item.weather[0].description}
                  </label>
                  <label className="min-max">
                    {Math.round(item.main.temp_max)}°C /{" "}
                    {Math.round(item.main.temp_min)}°C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            {/** La partie affiché en cliquant */}
            <AccordionItemPanel>
              <div className="daily-details-grid">
                <div className="daily-details-grid-item">
                  <label>Pressure:</label>
                  <label>{item.main.pressure}</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Humidity:</label>
                  <label>{item.main.humidity}</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Clouds:</label>
                  <label>{item.clouds.all}%</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Wind speed:</label>
                  <label>{item.wind.speed} m/s</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Sea level:</label>
                  <label>{item.main.sea_level}m</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Feels like:</label>
                  <label>{item.main.feels_like}°C</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
