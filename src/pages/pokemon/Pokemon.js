import { useParams } from "react-router-dom";
import CardProfile from "../../components/CardProfile/CardProfile";
import CardDescription from "../../components/CardDescription/CardDescription";
import CardSprites from "../../components/CardSprites/CardSprites";
import "./Pokemon.css";
import ErrorPage from "../error-page/ErrorPage";
import { useContext } from "react";
import PokemonData from "../../PokemonData";

function Pokemon() {
  const params = useParams();
  const { pokemonData } = useContext(PokemonData);
  if (pokemonData.length > 0) console.log(pokemonData[10]);
  var currentPokemon = pokemonData.filter(
    (pokemon) => pokemon.id == params.pokemonId
  );
  console.log(currentPokemon);
  const noPokemon = currentPokemon.length === 0;
  if (noPokemon) {
    return <ErrorPage />;
  }
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
        />
        <CardDescription types={currentPokemon[0].types} />
      </div>
      <CardSprites
        key={currentPokemon[0].id}
        types={currentPokemon[0].types}
        images={currentPokemon[0].sprites}
      />
    </div>
  );
}

export default Pokemon;
