import { Heading } from "@chakra-ui/react";
import React from "react";

import "./CardProfile.css";

function CardProfile({ name, id, types, image, weight, height }) {
  const convertWeight = () => {
    const newWeight = weight.toString();
    if (newWeight[newWeight.length - 1] == 0) {
      return newWeight.slice(0, -1);
    }
    return `${newWeight.slice(0, -1)},${newWeight[newWeight.length - 1]}`;
  };
  const convertHeight = () => {
    const newHeight = height.toString();
    if (newHeight[newHeight.length - 1] == 0) {
      return newHeight.slice(0, -1);
    }
    if (parseInt(newHeight, 10) < 10) {
      return `0,${newHeight}`;
    }
    if (parseInt(newHeight, 10) > 10) {
      return `${newHeight.slice(0, -1)},${newHeight[newHeight.length - 1]}`;
    }
    return false;
  };
  return (
    <div className={`card-profile ${types[0].type.name}`}>
      <div className="top-profile">
        <div>
          <Heading>{name}</Heading>
          <h3>#{id.toString().padStart(3, "0")}</h3>
        </div>
        <div className="type-list-profile">
          {types.map((entry) => (
            <h3
              key={entry.slot}
              className={`${entry.type.name}-type type type-profile`}
            >
              {entry.type.name.charAt(0).toUpperCase() +
                entry.type.name.slice(1)}
            </h3>
          ))}
        </div>
      </div>
      <div className="middle-profile">
        <img className="image-profile" alt="Pokemon" src={image} />
      </div>
      <div className="bottom-profile">
        <span>
          <div>Weight</div>
          <div>{convertWeight()} kg</div>
        </span>
        <span>
          <div>Height</div>
          <div>{convertHeight()} meters</div>
        </span>
        <span>
          <div>Color</div>
          <div>World</div>
        </span>
        <span>
          <div>Habitat</div>
          <div>World</div>
        </span>
        <span>
          <div>Shape</div>
          <div>World</div>
        </span>
      </div>
    </div>
  );
}

export default CardProfile;
