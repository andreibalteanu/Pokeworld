import React, { useEffect, useState } from "react";

import { Flex } from "@chakra-ui/react";
import styled from "styled-components";

import TopPage from "components/TopPage/TopPage";
import MagikarpSrc from "../../images/pokemon-magikarp.png";
import UnderWater from "../../images/underwater.jpg";

const MAGIKARP_WIDTH = 70;
const MAGIKARP_HEIGHT = 50;
const INITIAL_POSITION = 430;
const GAME_HEIGHT = 450;
const GAME_WIDTH = 400;
const TOP_POSITION = 280;
const BOTTOM_POSITION = 680;
const GRAVITY = 6;
const JUMP_HEIGHT = 70;
const OBSTACLE_WIDTH = 40;
const OBSTACLE_GAP = 150;

function FlappyMagikarp() {
  const [magikarpPosition, setMagikarpPosition] = useState(INITIAL_POSITION);
  const [gameStarted, setGameStarted] = useState(false);
  const [obstacleHeight, setObstacleHeight] = useState(150);
  const [obstacleLeft, setObstacleLeft] = useState(GAME_WIDTH - OBSTACLE_WIDTH);
  const [score, setScore] = useState(0);

  const bottomObstacleHeight = GAME_HEIGHT - OBSTACLE_GAP - obstacleHeight;

  useEffect(() => {
    let timeId;
    if (gameStarted && magikarpPosition < BOTTOM_POSITION) {
      timeId = setInterval(() => {
        setMagikarpPosition((position) => position + GRAVITY);
      }, 24);
    }

    return () => {
      clearInterval(timeId);
    };
  }, [magikarpPosition, gameStarted]);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    let obstacleId;
    if (gameStarted && obstacleLeft >= -1) {
      obstacleId = setInterval(() => {
        setObstacleLeft((position) => position - 7);
      }, 24);
      return () => {
        clearInterval(obstacleId);
      };
    }
    setScore(score + 1);
    setObstacleLeft(GAME_WIDTH - OBSTACLE_WIDTH);
    setObstacleHeight(Math.floor(Math.random() * (GAME_HEIGHT - OBSTACLE_GAP)));
  }, [gameStarted, obstacleLeft]);

  useEffect(() => {
    const topCollision =
      magikarpPosition >= TOP_POSITION &&
      magikarpPosition < obstacleHeight + TOP_POSITION;
    const bottomCollision =
      magikarpPosition <= BOTTOM_POSITION &&
      magikarpPosition >= BOTTOM_POSITION - bottomObstacleHeight;

    if (
      obstacleLeft >= 0 &&
      obstacleLeft <= OBSTACLE_WIDTH &&
      (topCollision || bottomCollision)
    ) {
      setScore(score - 2);
      setGameStarted(false);
    }
  }, [magikarpPosition, obstacleHeight, bottomObstacleHeight, obstacleLeft]);

  const handleClick = () => {
    const newMagikarpPosition = magikarpPosition - JUMP_HEIGHT;
    if (!gameStarted) {
      setGameStarted(true);
      setScore(0);
      setMagikarpPosition(INITIAL_POSITION);
    } else if (newMagikarpPosition < TOP_POSITION) {
      setMagikarpPosition(TOP_POSITION);
    } else {
      setMagikarpPosition(newMagikarpPosition);
    }
  };

  return (
    <Flex direction="column" align="center">
      <TopPage path="/" title="Flappy Magikarp" />
      <Div>
        <GameBox onClick={handleClick} height={GAME_HEIGHT} width={GAME_WIDTH}>
          <Obstacle
            top={0}
            width={OBSTACLE_WIDTH}
            height={obstacleHeight}
            left={obstacleLeft}
          />
          <Obstacle
            top={GAME_HEIGHT - (obstacleHeight + bottomObstacleHeight)}
            width={OBSTACLE_WIDTH}
            height={bottomObstacleHeight}
            left={obstacleLeft}
          />
          <Magikarp
            src={MagikarpSrc}
            height={MAGIKARP_HEIGHT}
            width={MAGIKARP_WIDTH}
            top={magikarpPosition}
          />
        </GameBox>
        <span>Score: {score}</span>
      </Div>
    </Flex>
  );
}

export default FlappyMagikarp;

const Magikarp = styled.img`
  position: absolute;
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  top: ${(props) => props.top}px;
  left: 510px;
  border-radius: 50%;
  user-select: none;
`;
const Div = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  & span {
    color: white;
    font-size: 24px;
    position: absolute;
  }
`;
const GameBox = styled.div`
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  background-image: url(${UnderWater});
  overflow: hidden;
`;
const Obstacle = styled.div`
  position: relative;
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  background-color: green;
`;
