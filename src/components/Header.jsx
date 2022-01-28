import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import axios from "axios";

import "./header.css";

const Header = () => {
  const { query, setQuery, setWeather } = useContext(GlobalContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&APPID=441d7523d2a2eace2e634653c4a81709`
      )
      .then((res) => {
        const result = res.data;
        setWeather(result);
        setQuery("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <header>
      <h1>
        Weather
        <span className="heading-forecast"> Forecast</span>
      </h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
    </header>
  );
};

export default Header;
