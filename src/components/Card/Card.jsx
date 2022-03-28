import React from "react";
import { useNavigate } from "react-router-dom";

import "./Card.css";
import "../../shared/Colors.css";

function Card({ name, id, types, image }) {
  const navigate = useNavigate();
  const navigateToPokemon = () => {
    if (window.location.href.endsWith("pokemon/")) {
      navigate(`/${id}`);
    } else {
      navigate(`/pokemon/${id}`);
    }
  };
  return (
    <div
      role="button"
      tabIndex="0"
      className={`card ${types[0].type.name}`}
      onClick={navigateToPokemon}
      onKeyDown={navigateToPokemon}
    >
      <div className="top-card">
        <h3>{name}</h3>
        <h3>#{id.toString().padStart(3, "0")}</h3>
      </div>
      <div className="bottom-card">
        <div className="type-list">
          {types.map((entry) => (
            <h3 key={entry.slot} className={`${entry.type.name}-type type`}>
              {entry.type.name.charAt(0).toUpperCase() +
                entry.type.name.slice(1)}
            </h3>
          ))}
        </div>
        <img className="card-image" alt="Pokemon" src={image} />
      </div>
    </div>
  );
}

export default Card;
