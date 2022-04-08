import React from "react";

import { Flex, Text } from "@chakra-ui/react";

import "./CardEvolutions.css";

export default function CardEvolutions({ types }) {
  return (
    <Flex
      direction="column"
      align="center"
      className={`card-evolution ${types[0].type.name}`}
    >
      <Text fontSize="2xl">Evolutions</Text>
      <Flex
        direction="row"
        justify="space-around"
        className="card-evolutions-versions"
      >
        <Flex
          direction="column"
          align="center"
          className="card-evolutions-item"
        >
          <p>Bulbasaur</p>
          <p>#001</p>
          <img
            alt="Pokemon"
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
          />
        </Flex>
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
      </Flex>
    </Flex>
  );
}
