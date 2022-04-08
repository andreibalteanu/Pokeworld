import React from "react";

import { Text } from "@chakra-ui/react";

import "./CardSprites.css";

function CardSprites({ images, types }) {
  const newImages = Object.values(images);
  newImages.pop();
  newImages.pop();
  return (
    <div className={`card-sprites ${types[0].type.name}`}>
      <Text fontSize="2xl">Sprites</Text>
      <div className="card-sprites-versions">
        {newImages.map((image, index) => {
          if (image != null) {
            return (
              <div
                key={`card-sprites-card${index}`}
                className="card-sprites-images"
              >
                <p>Front Female</p>
                <img alt="Pokemon" src={image} />
              </div>
            );
          }
          return false;
        })}
      </div>
    </div>
  );
}

export default CardSprites;
