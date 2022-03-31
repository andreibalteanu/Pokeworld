import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function Poketv() {
  return (
    <Flex direction="column" align="center">
      <Link to="/poketv" className="title-page">
        <Heading>Poke TV</Heading>
      </Link>
      <Text>Series:</Text>
      <Flex
        className="container-of-buttons"
        direction="column"
        align="center"
        justify="space-arounds"
      >
        <Link to="/poketv/indigo-league">
          <Button colorScheme="blue" className="app-button">
            Indigo League
          </Button>
        </Link>
        <Link to="/poketv/the-johto-journeys">
          <Button colorScheme="blue" className="app-button">
            The Johto Journeys
          </Button>
        </Link>
        <Link to="/poketv/advanced">
          <Button colorScheme="blue" className="app-button">
            Advanced
          </Button>
        </Link>
        <Link to="/poketv/diamond-and-pearl">
          <Button colorScheme="blue" className="app-button">
            Diamond and Pearl
          </Button>
        </Link>
        <Link to="/poketv/black-and-white">
          <Button colorScheme="blue" className="app-button">
            Black & White
          </Button>
        </Link>
        <Link to="/poketv/x-and-y">
          <Button colorScheme="blue" className="app-button">
            X & Y
          </Button>
        </Link>
        <Link to="/poketv/sun-and-moon">
          <Button colorScheme="blue" className="app-button">
            Sun & Moon
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
}

export default Poketv;
