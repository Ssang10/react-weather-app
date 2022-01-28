import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import GlobalState from "./context/GlobalState";

function App() {
  return (
    <GlobalState>
      <div className="App">
        <Header />
        <Main />
      </div>
    </GlobalState>
  );
}

export default App;
