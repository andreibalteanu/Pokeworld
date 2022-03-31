import { React, createContext, useEffect, useState } from "react";
import { useFetch } from "./useFetch";

const PokemonData = createContext({});

const DEFAULT_OFFSET = 0;
const DEFAULT_LIMIT = 300;

const pokemonApiUrl = (offset, limit = DEFAULT_LIMIT) =>
  `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

export function PokemonDataProvider({ children }) {
  const [offset, setOffset] = useState(DEFAULT_OFFSET);

  const url = pokemonApiUrl(offset);

  const { data } = useFetch(url);

  const [pokemonData, setPokemonData] = useState([]);

  const addMorePokemons = () => {
    setOffset(offset + DEFAULT_LIMIT);
  };

  useEffect(() => {
    async function fetchPokemons() {
      const pokemonDataTest = await Promise.all(
        data.results.map(async (result) => {
          const resp = await fetch(result.url);

          return resp.json();
        })
      );
      setPokemonData(pokemonData.concat(pokemonDataTest));
    }
    if (data) {
      fetchPokemons();
    }
  }, [data]);

  return (
    <PokemonData.Provider value={{ url, pokemonData, addMorePokemons }}>
      {children}
    </PokemonData.Provider>
  );
}

export default PokemonData;
