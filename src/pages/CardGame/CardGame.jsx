/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import "./CardGame.css";
import { Button, Flex } from "@chakra-ui/react";
import TopPage from "components/TopPage/TopPage";
import React, { useEffect, useState } from "react";
import SingleCard from "components/SingleCard/SingleCard";
import blastoise from "../../images/blastoise.png";
import gardevoir from "../../images/gardevoir.png";
import mewtwo from "../../images/mewtwo.png";
import raichu from "../../images/raichu.png";
import backCard from "../../images/pokemon-card-back.jpeg";

const cardImages = [
  { src: blastoise, matched: false },
  { src: gardevoir, matched: false },
  { src: mewtwo, matched: false },
  { src: raichu, matched: false },
];

function CardGame() {
  const [cards, setCards] = useState([]);
  const [firstChoice, setFirstChoice] = useState(null);
  const [secondChoice, setSecondChoice] = useState(null);
  const [numberOfMatches, setNumberOfMatches] = useState(0);
  const shuffleCards = () => {
    setNumberOfMatches(0);
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(shuffledCards);
  };

  const handleChoice = (card) => {
    // eslint-disable-next-line no-unused-expressions
    firstChoice ? setSecondChoice(card) : setFirstChoice(card);
  };

  const resetChoices = () => {
    setFirstChoice(null);
    setSecondChoice(null);
  };
  useEffect(() => {
    if (firstChoice && secondChoice) {
      if (firstChoice.src === secondChoice.src) {
        setNumberOfMatches(numberOfMatches + 1);
        setCards((prevCards) =>
          prevCards.map((card) => {
            if (card.src === firstChoice.src) {
              return { ...card, matched: true };
            }
            return card;
          })
        );
        resetChoices();
      } else {
        setTimeout(() => resetChoices(), 800);
      }
    }
  }, [firstChoice, secondChoice]);

  return (
    <Flex direction="column" align="center">
      <TopPage path="/" title="Memory Card Game" />
      <Flex align="center">
        {numberOfMatches === 4 && (
          <div className="success-message">SUCCESS!!</div>
        )}
        <Button colorScheme="blue" onClick={shuffleCards}>
          New Game
        </Button>
      </Flex>

      <Flex
        className="card-container"
        wrap="wrap"
        direction="row"
        justify="center"
        align="center"
      >
        {cards.map((card) => (
          <SingleCard
            key={card.id}
            card={card}
            backCard={backCard}
            handleChoice={handleChoice}
            flipped={
              card === firstChoice || card === secondChoice || card.matched
            }
          />
        ))}
      </Flex>
    </Flex>
  );
}

export default CardGame;
