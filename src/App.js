import { useContext } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import { GlobalContext } from "./context/GlobalState";

function App() {
  const { weather } = useContext(GlobalContext);

  return (
    <div
      className={
        Object.keys(weather).length === 0
          ? "App"
          : weather.main.temp < 16
          ? "App cold"
          : "App warm"
      }
    >
      <Header />
      <Main />
    </div>
  );
}

export default App;
