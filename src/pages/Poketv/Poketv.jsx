import React from "react";
import { Link } from "react-router-dom";

import { Button, Flex, Text } from "@chakra-ui/react";

import TopPage from "components/TopPage/TopPage";

import "./Poketv.css";

function Poketv() {
  return (
    <Flex direction="column" align="center">
      <TopPage path="/" title="Poke TV" />
      <Text>Series:</Text>
      <Flex
        className="container-of-buttons"
        direction="column"
        align="center"
        justify="space-arounds"
      >
        <Link to="/poketv/indigo-league">
          <Button colorScheme="blue" className="series-button">
            Indigo League
          </Button>
        </Link>
        <Link to="/poketv/the-johto-journeys">
          <Button colorScheme="blue" className="series-button">
            The Johto Journeys
          </Button>
        </Link>
        <Link to="/poketv/advanced">
          <Button colorScheme="blue" className="series-button">
            Advanced
          </Button>
        </Link>
        <Link to="/poketv/diamond-and-pearl">
          <Button colorScheme="blue" className="series-button">
            Diamond and Pearl
          </Button>
        </Link>
        <Link to="/poketv/black-and-white">
          <Button colorScheme="blue" className="series-button">
            Black & White
          </Button>
        </Link>
        <Link to="/poketv/x-and-y">
          <Button colorScheme="blue" className="series-button">
            X & Y
          </Button>
        </Link>
        <Link to="/poketv/sun-and-moon">
          <Button colorScheme="blue" className="series-button">
            Sun & Moon
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
}

export default Poketv;
