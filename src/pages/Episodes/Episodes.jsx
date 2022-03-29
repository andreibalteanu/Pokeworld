import React from "react";
import { Link, useParams } from "react-router-dom";

import { Flex, Heading } from "@chakra-ui/react";

import Episode from "../../components/Episode/Episode";

function Episodes() {
  const params = useParams();
  return (
    <Flex direction="column" align="center">
      <Link to="/poketv" className="title-page">
        <Heading>Poke TV</Heading>
      </Link>
      <Episode series={params.seriesName} />
    </Flex>
  );
}

export default Episodes;
