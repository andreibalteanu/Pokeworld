import { React, useState, useContext } from "react";

import { Button, Flex } from "@chakra-ui/react";

import TopPage from "components/TopPage/TopPage";
import Card from "../../components/Card/Card";
import PokemonData from "../../PokemonData";

import "./Pokedex.css";

function Pokedex() {
  const { pokemonData, addMorePokemons } = useContext(PokemonData);
  const [value, setValue] = useState("");
  const typeFilter = (pokemonTypes) => {
    if (
      (pokemonTypes.length === 1 &&
        pokemonTypes[0].type.name.includes(value)) ||
      (pokemonTypes.length === 2 &&
        (pokemonTypes[0].type.name.includes(value) ||
          pokemonTypes[1].type.name.includes(value)))
    ) {
      return true;
    }
    return false;
  };
  return (
    <Flex direction="column" align="center" className="pokedex">
      <TopPage path="/" title="Pokedex" />
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search pokemon name, number or type..."
        className="search-bar"
      />
      <Flex justify="center" wrap="wrap" className="container-of-cards">
        {pokemonData.map((pokemon) => {
          if (
            pokemon.name.toLowerCase().includes(value) ||
            typeFilter(pokemon.types)
          ) {
            return (
              <Card
                key={pokemon.id}
                name={
                  pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
                }
                id={pokemon.id}
                types={pokemon.types}
                image={pokemon.sprites.other["official-artwork"].front_default}
              />
            );
          }
          return false;
        })}
      </Flex>
      <Button
        className="addMorePokemons"
        onClick={addMorePokemons}
        colorScheme="blue"
      >
        LOAD MORE POKEMONS
      </Button>
    </Flex>
  );
}

export default Pokedex;
