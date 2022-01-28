import { createContext, useState } from "react";

export const GlobalContext = createContext();

const GlobalState = ({ children }) => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  return (
    <GlobalContext.Provider
      value={{
        query,
        setQuery,
        weather,
        setWeather,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
