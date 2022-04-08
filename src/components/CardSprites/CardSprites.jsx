import React from "react";

import { Flex, Text } from "@chakra-ui/react";

import "./CardSprites.css";

function CardSprites({ images, types }) {
  const newImages = Object.values(images);
  newImages.pop();
  newImages.pop();
  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      className={`card-sprites ${types[0].type.name}`}
    >
      <Text fontSize="2xl">Sprites</Text>
      <Flex
        justify="space-evenly"
        wrap="wrap"
        className="card-sprites-versions"
      >
        {newImages.map((image, index) => {
          if (image != null) {
            return (
              <Flex
                direction="column"
                align="center"
                key={`card-sprites-card${index}`}
                className="card-sprites-images"
              >
                <p>Front Female</p>
                <img alt="Pokemon" src={image} />
              </Flex>
            );
          }
          return false;
        })}
      </Flex>
    </Flex>
  );
}

export default CardSprites;
