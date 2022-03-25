import { useParams } from "react-router-dom";
import CardProfile from "../../components/CardProfile/CardProfile";
import CardDescription from "../../components/CardDescription/CardDescription";
import CardSprites from "../../components/CardSprites/CardSprites";
import CardEvolutions from "../../components/CardEvolutions/CardEvolutions";
import "./Pokemon.css";
import ErrorPage from "../error-page/ErrorPage";
import { useContext } from "react";
import PokemonData from "../../PokemonData";

function Pokemon() {
  const params = useParams();
  const { pokemonData } = useContext(PokemonData);
  var currentPokemon = pokemonData.filter(
    (pokemon) => pokemon.id == params.pokemonId
  );
  const noPokemon = currentPokemon.length === 0;
  if (noPokemon) {
    return <ErrorPage />;
  }
  console.log(currentPokemon[0]);
  return (
    <div className="pokemon">
      <div className="top-pokemon">
        <CardProfile
          key={currentPokemon[0].id}
          name={
            currentPokemon[0].name.charAt(0).toUpperCase() +
            currentPokemon[0].name.slice(1)
          }
          id={currentPokemon[0].id}
          types={currentPokemon[0].types}
          image={
            currentPokemon[0]["sprites"]["other"]["official-artwork"][
              "front_default"
            ]
          }
          weight={currentPokemon[0].weight}
          height={currentPokemon[0].height}
        />
        <CardDescription
          types={currentPokemon[0].types}
          stats={currentPokemon[0].stats}
          games={currentPokemon[0].game_indices}
        />
      </div>
      <CardEvolutions types={currentPokemon[0].types} />
      <CardSprites
        key={currentPokemon[0].id}
        types={currentPokemon[0].types}
        images={currentPokemon[0].sprites}
      />
    </div>
  );
}

export default Pokemon;
