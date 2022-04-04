import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Button, Flex, Heading } from "@chakra-ui/react";
import PokemonData from "PokemonData";

import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faTv,
  faQuestion,
  faCube,
  faGamepad,
  faToggleOn,
} from "@fortawesome/free-solid-svg-icons";

function Home() {
  const { switchTheme } = useContext(PokemonData);
  return (
    <Flex direction="column" align="center" className="home">
      <Flex>
        <Heading className="menu">Menu</Heading>
        <div>
          <FontAwesomeIcon icon={faToggleOn} size="2xl" onClick={switchTheme} />
        </div>
      </Flex>
      <Flex
        className="container-of-buttons"
        direction="column"
        align="center"
        justify="space-arounds"
      >
        <Link to="/pokemon">
          <Button colorScheme="blue" className="app-button">
            <FontAwesomeIcon icon={faBook} />
            POKEDEX
          </Button>
        </Link>
        <Link to="/poketv">
          <Button colorScheme="blue" className="app-button">
            <FontAwesomeIcon icon={faTv} />
            POKETV
          </Button>
        </Link>
        <Link to="/quizgame">
          <Button colorScheme="blue" className="app-button">
            <FontAwesomeIcon icon={faQuestion} />
            GUESS THE POKEMON
          </Button>
        </Link>
        <Link to="/viewer-options">
          <Button colorScheme="blue" className="app-button">
            <FontAwesomeIcon icon={faCube} />
            POKEMON 3D VIEWER
          </Button>
        </Link>
        <Link to="/flappy-magikarp">
          <Button colorScheme="blue" className="app-button">
            <FontAwesomeIcon icon={faGamepad} />
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
            MEMORY CARD GAME
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
}

export default Home;
