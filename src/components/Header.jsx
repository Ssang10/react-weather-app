import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import useAxios from "../hooks/useAxios";

import "./header.css";

const Header = () => {
  const { query, setQuery } = useContext(GlobalContext);
  const fetchData = useAxios();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
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
          placeholder="City, State, Country, or Zip Code"
        />
      </form>
    </header>
  );
};

export default Header;
