import { useState, useEffect } from "react";
import "./Home.css";
import Card from "../../components/Card/Card";
import PokemonDataa from "../../data/data.json";

function Home() {
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
    <div className="home">
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search pokemon name, number or type..."
        className="search-bar"
      ></input>
      <div className="container-of-cards">
        {PokemonDataa.filter(
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
      <div>HELLO</div>
    </div>
  );
}

export default Home;
