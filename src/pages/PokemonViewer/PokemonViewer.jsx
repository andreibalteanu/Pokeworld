import React from "react";
import { Link, useParams } from "react-router-dom";

import { DAEModel } from "react-3d-viewer";
import { Flex, Heading } from "@chakra-ui/react";
import ErrorPage from "pages/ErrorPage/ErrorPage";

import "./PokemonViewer.css";

function PokemonViewer() {
  const params = useParams();
  console.log(params);
  const viewerSource = () => {
    switch (params.pokemonName) {
      case "mewtwo": {
        return "/assets/Mewtwo/pmxxx1_00_fi.dae";
      }
      case "dialga": {
        return "/assets/Dialga/Dialga_ColladaMax.DAE";
      }
      case "lugia": {
        return "/assets/Lugia/Lugia_ColladaMax.DAE";
      }
      case "garchomp": {
        return "/assets/Garchomp/GarchompM_OpenCollada.DAE";
      }
      case "charizard": {
        return "/assets/Charizard/Charizard_ColladaMax.DAE";
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
      <Link to="/viewer-options" className="title-page pokemon-viewer-title">
        <Heading>Pokemon 3D viewer</Heading>
      </Link>
      <DAEModel
        src={viewerSource()}
        onLoad={() => {}}
        width={500}
        height={500}
      />
    </Flex>
  );
}

export default PokemonViewer;
