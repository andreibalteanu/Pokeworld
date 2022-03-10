import "./App.css";
import Card from "./Card.js";
import PokemonData from "./data.json";

function App() {
  return (
    <div className="App">
      <h1>Pokedex</h1>
      <input
        placeholder="Search pokemon name, number or type..."
        className="searchBar"
      ></input>
      <div className="container-of-cards">
        {PokemonData.map((pokemon) => {
          return (
            <Card
              key={pokemon.id}
              name={
                pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
              }
              id={pokemon.id}
              types={pokemon.types}
              image={pokemon.sprites.other.official_artwork.front_default}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
