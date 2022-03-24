import { createContext, useEffect, useState } from "react";
import { useFetch } from "./useFetch";

const PokemonData = createContext({});

export const PokemonDataProvider = ({ children }) => {
  const [url, setUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=21"
  );
  const data = useFetch(url);
  const [pokemonData, setPokemonData] = useState([]);
  var addPlusToUrl, urlReduced, finalUrl;
  const addMorePokemons = () => {
    urlReduced = url.slice(0, -2);
    addPlusToUrl = parseInt(url.slice(-2)) + 21;
    finalUrl = urlReduced + addPlusToUrl;
    setUrl(finalUrl);
  };
  useEffect(() => {
    async function fetchPokemons() {
      const pokemonDataTest = await Promise.all(
        data.results.map(async (result) => {
          const resp = await fetch(result.url);

          return resp.json();
        })
      );
      setPokemonData(pokemonDataTest);
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
