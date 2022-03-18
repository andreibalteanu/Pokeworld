import { useParams } from "react-router-dom";
import PokemonData from "../../data/data.json";
import CardProfile from "../../components/CardProfile/CardProfile";
import CardDescription from "../../components/CardDescription/CardDescription";
import CardSprites from "../../components/CardSprites/CardSprites";
import "./Pokemon.css";

function Pokemon() {
  const params = useParams();
  var currentPokemon = PokemonData.filter(
    (pokemon) => pokemon.id == params.pokemonId
  );
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
          image={currentPokemon[0].sprites.other.official_artwork.front_default}
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
