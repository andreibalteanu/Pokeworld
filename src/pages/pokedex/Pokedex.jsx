import { React, useState, useContext } from "react";

import { Button, Heading } from "@chakra-ui/react";

import Card from "../../components/Card/Card";
import PokemonData from "../../PokemonData";

import "./Pokedex.css";

function Pokedex() {
  const { pokemonData, addMorePokemons } = useContext(PokemonData);
  const [value, setValue] = useState("");
  const typeFilter = (pokemonTypes) => {
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
    return false;
  };
  return (
    <div className="pokedex">
      <Heading className="title-page">Pokedex</Heading>

      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search pokemon name, number or type..."
        className="search-bar"
      />
      <div className="container-of-cards">
        {pokemonData
          .filter(
            (pokemon) =>
              pokemon.name.toLowerCase().includes(value) ||
              typeFilter(pokemon.types)
          )
          .map((pokemon) => (
            <Card
              key={pokemon.id}
              name={
                pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
              }
              id={pokemon.id}
              types={pokemon.types}
              image={pokemon.sprites.other["official-artwork"].front_default}
            />
          ))}
      </div>
      <Button
        className="addMorePokemons"
        onClick={addMorePokemons}
        colorScheme="blue"
      >
        LOAD MORE POKEMONS
      </Button>
    </div>
  );
}

export default Pokedex;
