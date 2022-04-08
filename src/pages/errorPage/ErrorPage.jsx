import React from "react";
import { Link } from "react-router-dom";

import { Button } from "@chakra-ui/react";

import "./ErrorPage.css";

function ErrorPage() {
  return (
    <div className="error-page">
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
    </div>
  );
}

export default ErrorPage;
