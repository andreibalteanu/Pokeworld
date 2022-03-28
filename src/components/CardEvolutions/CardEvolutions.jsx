import React from "react";

import "./CardEvolutions.css";

export default function CardEvolutions({ types }) {
  return (
    <div className={`card-evolution ${types[0].type.name}`}>
      <h2>Evolutions</h2>
      <div className="card-evolutions-versions">
        <div className="card-evolutions-item">
          <p>Bulbasaur</p>
          <p>#001</p>
          <img
            alt="Pokemon"
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
          />
        </div>
        <div className="card-evolutions-item">
          <p>Ivysaur</p>
          <p>#002</p>
          <img
            alt="Pokemon"
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png"
          />
        </div>
        <div className="card-evolutions-item">
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
