import "./App.css";
import Card from "./Card.js";

function App() {
  return (
    <div className="App">
      <h1>Pokedex</h1>
      <div className="container-of-cards">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
