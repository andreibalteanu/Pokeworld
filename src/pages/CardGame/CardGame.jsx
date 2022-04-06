import "./CardGame.css";
import { Button, Flex } from "@chakra-ui/react";
import TopPage from "components/TopPage/TopPage";
import React, { useState } from "react";
import SingleCard from "components/SingleCard/SingleCard";
import blastoise from "../../images/blastoise.png";
import gardevoir from "../../images/gardevoir.png";
import mewtwo from "../../images/mewtwo.png";
import raichu from "../../images/raichu.png";
import backCard from "../../images/pokemon-card-back.jpeg";

const cardImages = [
  { src: blastoise },
  { src: gardevoir },
  { src: mewtwo },
  { src: raichu },
];

function CardGame() {
  const [cards, setCards] = useState([]);
  const [firstChoice, setFirstChoice] = useState(null);
  const [secondChoice, setSecondChoice] = useState(null);
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(shuffledCards);
  };

  return (
    <Flex direction="column" align="center">
      <TopPage path="/" title="Memory Card Game" />
      <Button
        colorScheme="blue"
        className="option-button"
        onClick={shuffleCards}
      >
        New Game
      </Button>
      <Flex
        className="card-container"
        wrap="wrap"
        direction="row"
        justify="center"
        align="center"
      >
        {cards.map((card) => (
          <SingleCard key={card.id} card={card} backCard={backCard} />
        ))}
      </Flex>
    </Flex>
  );
}

export default CardGame;
