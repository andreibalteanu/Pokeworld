import React, { useState } from "react";

import { Button, Flex } from "@chakra-ui/react";

import ErrorPage from "pages/ErrorPage/ErrorPage";

import "./Episode.css";

function Episode({ series }) {
  const [show, setShow] = useState(false);
  const onClick = () => setShow(!show);

  const setEpisodeUrl = () => {
    switch (series) {
      case "indigo-league": {
        return "https://www.youtube.com/embed/Zyt2GKb6qWw";
      }
      case "the-johto-journeys": {
        return "https://www.youtube.com/embed/d722bGusttw";
      }
      case "advanced": {
        return "https://www.youtube.com/embed/dkVNZY8hoR8";
      }
      case "diamond-and-pearl": {
        return "https://www.youtube.com/embed/LA9mX6uxgvM";
      }
      case "black-and-white": {
        return "https://www.youtube.com/embed/AupFEoIkSAE";
      }
      case "x-and-y": {
        return "https://www.youtube.com/embed/SeJkcF6gYjA";
      }
      case "sun-and-moon": {
        return "https://www.youtube.com/embed/oVm96zTiSl0";
      }
      default:
        return <ErrorPage />;
    }
  };
  return (
    <Flex direction="column" align="center">
      <Button colorScheme="blue" onClick={onClick} className="episode-button">
        Episode 1
      </Button>
      {show ? (
        <iframe
          title="naruto"
          width="500"
          height="350"
          src={setEpisodeUrl()}
          frameBorder="0"
          allowFullScreen
        />
      ) : null}
    </Flex>
  );
}

export default Episode;
