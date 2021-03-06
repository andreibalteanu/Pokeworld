import React, { useState, useContext, useEffect } from "react";

import { shuffle } from "lodash";
import { Button, Flex, Image } from "@chakra-ui/react";

import PokemonData from "PokemonData";
import TopPage from "components/TopPage/TopPage";

import "./QuizGame.css";

const SUCCESS = "success";
const FAILURE = "failure";

function QuizGame() {
  const { pokemonData, DEFAULT_LIMIT } = useContext(PokemonData);

  const [game, setGame] = useState({});

  const getOptionsArray = (array) => {
    if (array.length != 0) {
      const testOptionsArray = [];
      const arr = [];

      while (arr.length < 4) {
        const r = Math.floor(Math.random() * DEFAULT_LIMIT) + 1;
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

  // eslint-disable-next-line no-shadow
  const generatePokemonGame = (pokemonData) => {
    const optionsArray = getOptionsArray(pokemonData);

    return {
      options: shuffle(optionsArray),
      correct: optionsArray[0],
      status: null,
    };
  };

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

  return (
    <Flex direction="column" align="center">
      <TopPage path="/" title="Guess the pokemon" />
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
        <div className="quiz-message">
          Congratulations!
          <Button
            className="success-button"
            onClick={() => {
              onNewGame();
            }}
          >
            Generate new game
          </Button>
        </div>
      )}

      {game.status === FAILURE && (
        <div className="quiz-message">Wrong choice! Try again</div>
      )}

      {game.options &&
        game.options.map((option) => (
          <div>
            <Button
              colorScheme="blue"
              className="quiz-button"
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
