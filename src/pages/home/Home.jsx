import React from "react";
import { Link } from "react-router-dom";

import { Button, Flex, Heading } from "@chakra-ui/react";

import "./Home.css";

function Home() {
  return (
    <Flex direction="column" align="center" className="home">
      <Heading className="menu">Menu</Heading>
      <Flex
        className="container-of-buttons"
        direction="column"
        align="center"
        justify="space-arounds"
      >
        <Link to="/pokemon">
          <Button colorScheme="blue" className="menu-button">
            POKEDEX
          </Button>
        </Link>
        <Link to="/poketv">
          <Button colorScheme="blue" className="menu-button">
            POKETV
          </Button>
        </Link>
        <Link to="/quizgame">
          <Button colorScheme="blue" className="menu-button">
            GUESS THE POKEMON
          </Button>
        </Link>
        <Link to="/pokemon-viewer">
          <Button colorScheme="blue" className="menu-button">
            POKEMON 3D VIEWER
          </Button>
        </Link>
        <Link to="/">
          <Button colorScheme="blue" className="menu-button">
            POKEMON SCANNER
          </Button>
        </Link>
        <Link to="/">
          <Button colorScheme="blue" className="menu-button">
            WALLPAPER GENERATOR
          </Button>
        </Link>
        <Link to="/">
          <Button colorScheme="blue" className="menu-button">
            MEMORY CARD GAME
          </Button>
        </Link>
        <Link to="/">
          <Button colorScheme="blue" className="menu-button">
            FLAPPY MAGIKARP
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
}

export default Home;
