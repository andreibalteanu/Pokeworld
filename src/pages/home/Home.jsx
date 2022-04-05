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
  faToggleOff,
} from "@fortawesome/free-solid-svg-icons";

function Home() {
  const { switchTheme, toggleStatus } = useContext(PokemonData);
  return (
    <Flex direction="column" align="center" className="home">
      <Flex justify="space-around" className="top-page menu">
        <div> </div>
        <Heading>Menu</Heading>
        <Flex>
          <p className="toggle-label">Change theme</p>
          <FontAwesomeIcon
            icon={toggleStatus ? faToggleOff : faToggleOn}
            size="2xl"
            onClick={switchTheme}
          />
        </Flex>
      </Flex>
      <Flex
        className="container-of-buttons"
        direction="row"
        wrap="wrap"
        justifyContent="center"
      >
        <Link to="/pokemon">
          <Button colorScheme="blue" className="app-button" fontSize="20px">
            <FontAwesomeIcon icon={faBook} className="menu-icon" />
            POKEDEX
          </Button>
        </Link>
        <Link to="/poketv">
          <Button colorScheme="blue" className="app-button" fontSize="20px">
            <FontAwesomeIcon icon={faTv} className="menu-icon" />
            POKETV
          </Button>
        </Link>
        <Link to="/quizgame">
          <Button colorScheme="blue" className="app-button" fontSize="20px">
            <FontAwesomeIcon icon={faQuestion} className="menu-icon" />
            GUESS THE POKEMON
          </Button>
        </Link>
        <Link to="/viewer-options">
          <Button colorScheme="blue" className="app-button" fontSize="20px">
            <FontAwesomeIcon icon={faCube} className="menu-icon" />
            POKEMON 3D VIEWER
          </Button>
        </Link>
        <Link to="/flappy-magikarp">
          <Button colorScheme="blue" className="app-button" fontSize="20px">
            <FontAwesomeIcon icon={faGamepad} className="menu-icon" />
            FLAPPY MAGIKARP
          </Button>
        </Link>
        <Link to="/">
          <Button colorScheme="blue" className="app-button" fontSize="20px">
            POKEMON SCANNER
          </Button>
        </Link>
        <Link to="/">
          <Button colorScheme="blue" className="app-button" fontSize="20px">
            MEMORY CARD GAME
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
}

export default Home;
