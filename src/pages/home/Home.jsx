import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Button, Flex, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";

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
  faChessBoard,
} from "@fortawesome/free-solid-svg-icons";

const MotionButton = motion(Button);

function Home() {
  const { switchTheme, toggleStatus } = useContext(PokemonData);
  const initialButtonSize = {
    size: 0,
  };
  const animateButtonSize = {
    size: 1,
  };
  const hoverButtonSize = {
    size: 1.1,
  };
  return (
    <Flex direction="column" align="center" className="home">
      <Flex justify="space-around" className="top-page menu">
        <motion.div
          initial={{
            size: 0,
          }}
          animate={{
            size: 1,
          }}
          whileHover={{
            size: 1.1,
          }}
        >
          Hello
        </motion.div>
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
          <MotionButton
            initial={initialButtonSize}
            animate={animateButtonSize}
            whileHover={hoverButtonSize}
            colorScheme="blue"
            className="app-button"
            fontSize="20px"
          >
            <FontAwesomeIcon icon={faBook} className="menu-icon" />
            POKEDEX
          </MotionButton>
        </Link>
        <Link to="/poketv">
          <MotionButton
            colorScheme="blue"
            className="app-button"
            fontSize="20px"
          >
            <FontAwesomeIcon icon={faTv} className="menu-icon" />
            POKETV
          </MotionButton>
        </Link>
        <Link to="/quizgame">
          <MotionButton
            colorScheme="blue"
            className="app-button"
            fontSize="20px"
          >
            <FontAwesomeIcon icon={faQuestion} className="menu-icon" />
            GUESS THE POKEMON
          </MotionButton>
        </Link>
        <Link to="/viewer-options">
          <MotionButton
            colorScheme="blue"
            className="app-button"
            fontSize="20px"
          >
            <FontAwesomeIcon icon={faCube} className="menu-icon" />
            POKEMON 3D VIEWER
          </MotionButton>
        </Link>
        <Link to="/flappy-magikarp">
          <MotionButton
            colorScheme="blue"
            className="app-button"
            fontSize="20px"
          >
            <FontAwesomeIcon icon={faGamepad} className="menu-icon" />
            FLAPPY MAGIKARP
          </MotionButton>
        </Link>
        <Link to="/cardgame">
          <MotionButton
            colorScheme="blue"
            className="app-button"
            fontSize="20px"
          >
            <FontAwesomeIcon icon={faChessBoard} className="menu-icon" />
            MEMORY CARD GAME
          </MotionButton>
        </Link>
        <Link to="/">
          <MotionButton
            colorScheme="blue"
            className="app-button"
            fontSize="20px"
          >
            POKEMON SCANNER
          </MotionButton>
        </Link>
      </Flex>
    </Flex>
  );
}

export default Home;
