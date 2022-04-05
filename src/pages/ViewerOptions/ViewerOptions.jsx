import { Button, Flex } from "@chakra-ui/react";
import TopPage from "components/TopPage/TopPage";
import React from "react";
import { Link } from "react-router-dom";

import "./ViewerOptions.css";

function ViewerOptions() {
  return (
    <Flex direction="column" align="center">
      <TopPage path="/" title="Pokemon 3D viewer" />
      <Flex
        className="container-of-buttons"
        direction="column"
        align="center"
        justify="space-arounds"
      >
        <Link to="/viewer-options/mewtwo">
          <Button colorScheme="blue" className="option-button">
            Mewtwo
          </Button>
        </Link>
        <Link to="/viewer-options/dialga">
          <Button colorScheme="blue" className="option-button">
            Dialga
          </Button>
        </Link>
        <Link to="/viewer-options/garchomp">
          <Button colorScheme="blue" className="option-button">
            Garchomp
          </Button>
        </Link>
        <Link to="/viewer-options/lugia">
          <Button colorScheme="blue" className="option-button">
            Lugia
          </Button>
        </Link>
        <Link to="/viewer-options/charizard">
          <Button colorScheme="blue" className="option-button">
            Charizard
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
}

export default ViewerOptions;
