import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

import "./main.css";

const Main = () => {
  const { weather } = useContext(GlobalContext);

  return (
    <main>
      {Object.keys(weather).length > 0 && (
        <>
          <div className="container">
            <section>
              <h1>
                {weather.name}, {weather.sys.country}
              </h1>
              <h4>Feels Like {weather.main.feels_like}°</h4>
            </section>
            <section className="section-middle">
              {/* <h3>{weather.weather[0].main}</h3> */}
              <img
                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt=""
              />
            </section>
            <section>
              <h5>Max {weather.main.temp_max}°</h5>
              <h1>{weather.main.temp}°C</h1>
              <h5>Min {weather.main.temp_min}°</h5>
            </section>
          </div>

          <div className="container bottom">
            <section>
              <h2>Humidity</h2>
              <h4>{weather.main.humidity}%</h4>
            </section>
            <section>
              <h2>Pressure</h2>
              <h4>{weather.main.pressure} hPa</h4>
            </section>
          </div>
        </>
      )}
    </main>
  );
};

export default Main;
