import { useContext } from "react";
import axios from "axios";
import { GlobalContext } from "../context/GlobalState";

const useAxios = () => {
  const { query, setQuery, setWeather } = useContext(GlobalContext);

  const fetchData = () => {
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

  return fetchData;
};

export default useAxios;
