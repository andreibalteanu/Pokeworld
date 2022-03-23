import { createContext, useEffect, useState } from "react";
import { useFetch } from "./useFetch";

const PokemonData = createContext({});

export const PokemonDataProvider = ({ children }) => {
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const data = useFetch(url);
  const [pokemonData, setPokemonData] = useState();
  useEffect(() => {
    if (data) setPokemonData(data);
  }, [data]);
  return (
    <PokemonData.Provider value={{ pokemonData, setPokemonData, setUrl }}>
      {children}
    </PokemonData.Provider>
  );
};
