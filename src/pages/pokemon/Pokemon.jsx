import { React, useContext } from "react";
import { useParams } from "react-router-dom";

import { Flex } from "@chakra-ui/react";

import TopPage from "components/TopPage/TopPage";
import ErrorPage from "../errorPage/ErrorPage";
import CardProfile from "../../components/CardProfile/CardProfile";
import CardDescription from "../../components/CardDescription/CardDescription";
import CardSprites from "../../components/CardSprites/CardSprites";
// import CardEvolutions from "../../components/CardEvolutions/CardEvolutions";
import PokemonData from "../../PokemonData";

function Pokemon() {
  const params = useParams();
  const { pokemonData } = useContext(PokemonData);
  const currentPokemon = pokemonData.filter(
    (pokemon) => pokemon.id == params.pokemonId
  );
  const noPokemon = currentPokemon.length === 0;
  if (noPokemon) {
    return <ErrorPage />;
  }
  return (
    <Flex direction="column" align="center" className="pokemon">
      <TopPage path="/pokemon" title="Pokedex" />

      <Flex justify="center" align="center" className="top-pokemon">
        <CardProfile
          key={currentPokemon[0].id}
          name={
            currentPokemon[0].name.charAt(0).toUpperCase() +
            currentPokemon[0].name.slice(1)
          }
          id={currentPokemon[0].id}
          types={currentPokemon[0].types}
          image={
            currentPokemon[0].sprites.other["official-artwork"].front_default
          }
          weight={currentPokemon[0].weight}
          height={currentPokemon[0].height}
        />
        <CardDescription
          id={currentPokemon[0].id}
          types={currentPokemon[0].types}
          stats={currentPokemon[0].stats}
          games={currentPokemon[0].game_indices}
        />
      </Flex>
      {/* <CardEvolutions types={currentPokemon[0].types} /> */}
      <CardSprites
        key={currentPokemon[0].id}
        id={currentPokemon[0].id}
        types={currentPokemon[0].types}
        images={currentPokemon[0].sprites}
      />
    </Flex>
  );
}

export default Pokemon;
