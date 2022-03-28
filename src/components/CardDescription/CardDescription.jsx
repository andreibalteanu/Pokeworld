import React from "react";

import "./CardDescription.css";

function CardDescription({ types, stats, games }) {
  return (
    <div className="card-description">
      <div className="title-description">
        <h3>Description</h3>
        <div className="dropdown-container">
          <h3>Game:</h3>
          <select className="dropdown-games">
            {games.map((game, index) => (
              <option key={`dropdown-games-game${index}`}>
                {game.version.name.charAt(0).toUpperCase() +
                  game.version.name.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="top-description">
        <p>
          The diamond shape crystals on its body exper air as cold as -240
          degrees Fahrenheit, surrounding its enemies and encasing them in ice
        </p>
      </div>
      <h3>Stats</h3>
      <div className={`bottom-description ${types[0].type.name}`}>
        <div>
          <p>HP</p>
          <p>Attack</p>
          <p>Defense</p>
          <p>Special Attack</p>
          <p>Special Defense</p>
          <p>Speed</p>
        </div>
        <div>
          <p>{stats[0].base_stat}</p>
          <p>{stats[1].base_stat}</p>
          <p>{stats[2].base_stat}</p>
          <p>{stats[3].base_stat}</p>
          <p>{stats[4].base_stat}</p>
          <p>{stats[5].base_stat}</p>
        </div>
      </div>
    </div>
  );
}

export default CardDescription;
