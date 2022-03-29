import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { Routes, BrowserRouter, Route, Link } from "react-router-dom";

import { ChakraProvider, Flex, Image, Spinner } from "@chakra-ui/react";

import Layout from "components/Layout/Layout";
import { PokemonDataProvider } from "./PokemonData";

import pokemonLogo from "./images/pokemon-logo.png";
import "./index.css";

const Home = lazy(() => import("pages/Home/Home"));
const Pokedex = lazy(() => import("pages/Pokedex/Pokedex"));
const Pokemon = lazy(() => import("pages/Pokemon/Pokemon"));
const Poketv = lazy(() => import("pages/Poketv/Poketv"));
const Episodes = lazy(() => import("pages/Episodes/Episodes"));
const ErrorPage = lazy(() => import("pages/ErrorPage/ErrorPage"));

ReactDOM.render(
  <React.StrictMode>
    <PokemonDataProvider>
      <BrowserRouter>
        <ChakraProvider>
          <Flex
            className="index"
            direction="column"
            justify="space-evenly"
            align="center"
          >
            <Link to="/">
              <Image src={pokemonLogo} alt="hello" className="title-app" />
            </Link>
            <Layout>
              <Suspense fallback={<Spinner size="xl" />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/pokemon" element={<Pokedex />} />
                  <Route path="/pokemon/:pokemonId" element={<Pokemon />} />
                  <Route path="/poketv" element={<Poketv />} />
                  <Route path="/poketv/:seriesName" element={<Episodes />} />
                  <Route path="/*" element={<ErrorPage />} />
                </Routes>
              </Suspense>
            </Layout>
          </Flex>
        </ChakraProvider>
      </BrowserRouter>
    </PokemonDataProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
