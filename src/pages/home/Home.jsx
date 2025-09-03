import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Button, Flex, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faTv,
  faQuestion,
  faCube,
  faToggleOn,
  faToggleOff,
  faChessBoard,
} from "@fortawesome/free-solid-svg-icons";

import PokemonData from "PokemonData";

import "./Home.css";

const MotionButton = motion(Button);

function Home() {
  const { switchTheme, toggleStatus } = useContext(PokemonData);
  const initialButtonSize = {
    scale: 0,
  };
  const animateButtonSize = {
    scale: 1,
  };
  const hoverButtonSize = {
    scale: 1.1,
  };
  return (
    <Flex direction="column" align="center" className="home">
      <Flex className="top-page menu">
        <div className="menu-section"> </div>
        <Heading>Menu</Heading>
        <Flex className="menu-section">
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
        <Link className="button-wrapper" to="/pokemon">
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
        <Link className="button-wrapper" to="/quizgame">
          <MotionButton
            initial={initialButtonSize}
            animate={animateButtonSize}
            whileHover={hoverButtonSize}
            colorScheme="blue"
            className="app-button"
            fontSize="20px"
          >
            <FontAwesomeIcon icon={faQuestion} className="menu-icon" />
            GUESS THE POKEMON
          </MotionButton>
        </Link>
        <Link className="button-wrapper" to="/cardgame">
          <MotionButton
            initial={initialButtonSize}
            animate={animateButtonSize}
            whileHover={hoverButtonSize}
            colorScheme="blue"
            className="app-button"
            fontSize="20px"
          >
            <FontAwesomeIcon icon={faChessBoard} className="menu-icon" />
            MEMORY CARD GAME
          </MotionButton>
        </Link>
        <Link className="button-wrapper" to="/viewer-options">
          <MotionButton
            initial={initialButtonSize}
            animate={animateButtonSize}
            whileHover={hoverButtonSize}
            colorScheme="blue"
            className="app-button"
            fontSize="20px"
          >
            <FontAwesomeIcon icon={faCube} className="menu-icon" />
            POKEMON 3D VIEWER
          </MotionButton>
        </Link>
        {/* <Link className="button-wrapper" to="/flappy-magikarp">
          <MotionButton
            initial={initialButtonSize}
            animate={animateButtonSize}
            whileHover={hoverButtonSize}
            colorScheme="blue"
            className="app-button"
            fontSize="20px"
          >
            <FontAwesomeIcon icon={faGamepad} className="menu-icon" />
            FLAPPY MAGIKARP
          </MotionButton>
        </Link> */}
        <Link className="button-wrapper" to="/poketv">
          <MotionButton
            initial={initialButtonSize}
            animate={animateButtonSize}
            whileHover={hoverButtonSize}
            colorScheme="blue"
            className="app-button"
            fontSize="20px"
          >
            <FontAwesomeIcon icon={faTv} className="menu-icon" />
            POKETV
          </MotionButton>
        </Link>
      </Flex>
    </Flex>
  );
}

export default Home;
