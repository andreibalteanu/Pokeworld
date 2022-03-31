import { Flex } from "@chakra-ui/react";
import React from "react";
import { DAEModel, DirectionLight } from "react-3d-viewer";

function PokemonViewer() {
  return (
    <Flex>
      <DAEModel
        src="/assets/Mewtwo/pmxxx1_00_fi.dae"
        onLoad={() => {}}
        width={300}
        height={300}
      >
        <DirectionLight color={0xff00ff} />
      </DAEModel>
    </Flex>
  );
}

export default PokemonViewer;
