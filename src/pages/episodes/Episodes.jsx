import React from "react";
import { useParams } from "react-router-dom";

import { Flex } from "@chakra-ui/react";

import TopPage from "components/TopPage/TopPage";
import Episode from "../../components/Episode/Episode";

function Episodes() {
  const params = useParams();
  return (
    <Flex direction="column" align="center">
      <TopPage path="/poketv" title="Poke TV" />
      <Episode series={params.seriesName} />
    </Flex>
  );
}

export default Episodes;
