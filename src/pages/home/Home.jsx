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
          <Button colorScheme="blue" className="app-button">
            POKEDEX
          </Button>
        </Link>
        <Link to="/poketv">
          <Button colorScheme="blue" className="app-button">
            POKETV
          </Button>
        </Link>
        <Link to="/quizgame">
          <Button colorScheme="blue" className="app-button">
            GUESS THE POKEMON
          </Button>
        </Link>
        <Link to="/viewer-options">
          <Button colorScheme="blue" className="app-button">
            POKEMON 3D VIEWER
          </Button>
        </Link>
        <Link to="/flappy-magikarp">
          <Button colorScheme="blue" className="app-button">
            FLAPPY MAGIKARP
          </Button>
        </Link>
        <Link to="/">
          <Button colorScheme="blue" className="app-button">
            POKEMON SCANNER
          </Button>
        </Link>
        <Link to="/">
          <Button colorScheme="blue" className="app-button">
            WALLPAPER GENERATOR
          </Button>
        </Link>
        <Link to="/">
          <Button colorScheme="blue" className="app-button">
            MEMORY CARD GAME
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
}

export default Home;
