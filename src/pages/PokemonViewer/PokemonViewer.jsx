import React from "react";
import { useParams } from "react-router-dom";

import { DAEModel } from "react-3d-viewer";
import { Flex } from "@chakra-ui/react";

import ErrorPage from "pages/errorPage/ErrorPage";
import TopPage from "components/TopPage/TopPage";

import "./PokemonViewer.css";

function PokemonViewer() {
  const params = useParams();
  const viewerSource = () => {
    switch (params.pokemonName) {
      case "mewtwo": {
        return "/assets/3D-Viewer/Mewtwo/pmxxx1_00_fi.dae";
      }
      case "dialga": {
        return "/assets/3D-Viewer/Dialga/Dialga_ColladaMax.DAE";
      }
      case "lugia": {
        return "/assets/3D-Viewer/Lugia/Lugia_ColladaMax.DAE";
      }
      case "garchomp": {
        return "/assets/3D-Viewer/Garchomp/GarchompM_OpenCollada.DAE";
      }
      case "charizard": {
        return "/assets/3D-Viewer/Charizard/Charizard_ColladaMax.DAE";
      }
      default:
        return <ErrorPage />;
    }
  };
  return (
    <Flex
      direction="column"
      align="center"
      justify="space-between"
      className="pokemon-viewer"
    >
      <TopPage path="/viewer-options" title="Pokemon 3D viewer" />
      <DAEModel
        src={viewerSource()}
        onLoad={() => {}}
        width={700}
        height={700}
      />
    </Flex>
  );
}

export default PokemonViewer;
