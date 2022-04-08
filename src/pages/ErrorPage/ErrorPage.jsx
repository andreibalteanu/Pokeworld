import React from "react";
import { Link } from "react-router-dom";

import { Button, Flex } from "@chakra-ui/react";

import "./ErrorPage.css";

function ErrorPage() {
  return (
    <Flex direction="column" align="center" className="error-page">
      <p>Hi! I'm Snorlax, i'm blocking the path</p>
      <p>
        Click
        <Link to="/">
          {" "}
          <Button colorScheme="blue">here</Button>{" "}
        </Link>
        to go back
      </p>
      <img
        alt="pokemon"
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png"
      />
    </Flex>
  );
}

export default ErrorPage;
