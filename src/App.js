import { useState } from "react";
import "./App.css";
import Card from "./Card.js";
import PokemonData from "./data.json";

function App() {
  const [value, setValue] = useState("");

  function typeFilter(pokemonTypes) {
    if (
      pokemonTypes.length === 1 &&
      pokemonTypes[0].type.name.includes(value)
    ) {
      return true;
    }
    if (
      pokemonTypes.length === 2 &&
      (pokemonTypes[0].type.name.includes(value) ||
        pokemonTypes[1].type.name.includes(value))
    ) {
      return true;
    }
  }
  return (
    <div className="App">
      <h1>Pokedex</h1>
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search pokemon name, number or type..."
        className="searchBar"
      ></input>
      <div className="container-of-cards">
        {PokemonData.filter(
          (pokemon) =>
            pokemon.name.toLowerCase().includes(value) ||
            typeFilter(pokemon.types)
        ).map((pokemon) => {
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
