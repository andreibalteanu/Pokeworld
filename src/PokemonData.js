import { createContext, useEffect, useState } from "react";
import { useFetch } from "./useFetch";

const PokemonData = createContext({});

export const PokemonDataProvider = ({ children }) => {
  const [url, setUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=21"
  );
  const { data, isPending } = useFetch(url);
  const [pokemonData, setPokemonData] = useState([]);

  const addMorePokemons = () => {
    var offset = url.substring(url.indexOf("=") + 1, url.lastIndexOf("&"));
    var newOffset = parseInt(offset) + 21;
    setUrl(url.replace(offset, newOffset));
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
};

export default PokemonData;
