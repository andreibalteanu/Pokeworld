import "./CardDescription.css";

function CardDescription({ types }) {
  return (
    <div className="card-description">
      <div className="top-description">
        <h3>Description</h3>
        <p>
          The diamond shape crystals on its body exper air as cold as -240
          degrees Fahrenheit, surrounding its enemies and encasing them in ice
        </p>
      </div>
      <div className={`middle-description ${types[0].type.name}`}>
        <div>
          <p>HP</p>
          <p>Attack</p>
          <p>Defense</p>
          <p>Speed</p>
          <p>Special Attack</p>
          <p>Special Defense</p>
        </div>
        <div>
          <p>124</p>
          <p>69</p>
          <p>255</p>
          <p>33</p>
          <p>85</p>
          <p>188</p>
        </div>
      </div>
      <div className={`bottom-description ${types[0].type.name}`}>
        <div className="bottom-description-evo">
          <p>Bulbasaur</p>
          <p>#001</p>
          <img
            alt="Pokemon"
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
          />
        </div>
        <div className="bottom-description-evo">
          <p>Ivysaur</p>
          <p>#002</p>
          <img
            alt="Pokemon"
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png"
          />
        </div>
        <div className="bottom-description-evo">
          <p>Venusaur</p>
          <p>#003</p>
          <img
            alt="Pokemon"
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png"
          />
        </div>
      </div>
    </div>
  );
}

export default CardDescription;
