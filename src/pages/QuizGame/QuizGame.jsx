import React, { useState, useContext, useEffect } from "react";

import { shuffle } from "lodash";

import { Button, Flex, Heading, Image } from "@chakra-ui/react";

import PokemonData from "PokemonData";

import "./QuizGame.css";

const SUCCESS = "success";
const FAILURE = "failure";

const getOptionsArray = (array) => {
  if (array.length != 0) {
    const testOptionsArray = [];
    const arr = [];

    while (arr.length < 4) {
      const r = Math.floor(Math.random() * 1000) + 1;
      if (arr.indexOf(r) === -1) arr.push(r);
    }

    testOptionsArray.push(
      array[arr[0]],
      array[arr[1]],
      array[arr[2]],
      array[arr[3]]
    );

    return testOptionsArray;
  }

  return [];
};

const generatePokemonGame = (pokemonData) => {
  const optionsArray = getOptionsArray(pokemonData);

  return {
    options: shuffle(optionsArray),
    correct: optionsArray[0],
    status: null,
  };
};

function QuizGame() {
  const { pokemonData } = useContext(PokemonData);

  const [game, setGame] = useState({});

  useEffect(() => {
    setGame(generatePokemonGame(pokemonData));
  }, [pokemonData]);

  const onChoice = (option) => {
    if (option === game.correct) {
      setGame({
        ...game,
        status: SUCCESS,
      });
    } else {
      setGame({
        ...game,
        status: FAILURE,
      });
    }
  };

  const correctClassName =
    game.status === SUCCESS ? "success-overlay" : "black-overlay";

  const onNewGame = () => {
    const newGame = generatePokemonGame(pokemonData);

    setGame(newGame);
  };

  console.log(game);

  return (
    <Flex direction="column" align="center">
      <Heading className="title-page">Guess the pokemon</Heading>
      <Image
        src={
          game.correct
            ? game.correct.sprites.other["official-artwork"].front_default
            : null
        }
        alt="pokemon image"
        height="200"
        className={correctClassName}
      />

      {game.status === SUCCESS && (
        <div>
          Congratulations!
          <Button
            onClick={() => {
              onNewGame();
            }}
          >
            Generate new game
          </Button>
        </div>
      )}

      {game.status === FAILURE && <div>Wrong choice! Try again</div>}

      {game.options &&
        game.options.map((option) => (
          <div>
            <Button
              colorScheme="blue"
              className="menu-button"
              onClick={() => {
                onChoice(option);
              }}
            >
              {option.name}
            </Button>
          </div>
        ))}
    </Flex>
  );
}

export default QuizGame;
