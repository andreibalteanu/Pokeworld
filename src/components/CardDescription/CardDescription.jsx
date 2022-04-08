import React from "react";

import { Flex, Text } from "@chakra-ui/react";

import "./CardDescription.css";

function CardDescription({ types, stats }) {
  return (
    <Flex direction="column" justify="center" className="card-description">
      <Flex
        direction="row"
        justify="space-between"
        className="title-description"
      >
        <Text fontSize="2xl">Description</Text>
      </Flex>
      <div className="top-description">
        <p>
          The diamond shape crystals on its body exper air as cold as -240
          degrees Fahrenheit, surrounding its enemies and encasing them in ice
        </p>
      </div>
      <Text fontSize="2xl">Stats</Text>
      <Flex
        justify="space-between"
        className={`bottom-description ${types[0].type.name}`}
      >
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
      </Flex>
    </Flex>
  );
}

export default CardDescription;
