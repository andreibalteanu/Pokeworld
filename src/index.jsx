import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { Routes, BrowserRouter, Route, Link } from "react-router-dom";

import { ChakraProvider, Flex, Image, Spinner } from "@chakra-ui/react";

import { PokemonDataProvider } from "./PokemonData";

import pokemonLogo from "./images/pokemon-logo.png";
import "./index.css";

const Home = lazy(() => import("pages/home/Home"));
const Pokedex = lazy(() => import("pages/pokedex/Pokedex"));
const Pokemon = lazy(() => import("pages/pokemon/Pokemon"));
const ErrorPage = lazy(() => import("pages/error-page/ErrorPage"));
const Layout = lazy(() => import("components/Layout/Layout"));

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
            <Suspense fallback={<Spinner size="xl" />}>
              <Link to="/">
                <Image src={pokemonLogo} alt="hello" className="title-app" />
              </Link>

              <Layout>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/pokemon" element={<Pokedex />} />
                  <Route path="/pokemon/:pokemonId" element={<Pokemon />} />
                  <Route path="/*" element={<ErrorPage />} />
                </Routes>
              </Layout>
            </Suspense>
          </Flex>
        </ChakraProvider>
      </BrowserRouter>
    </PokemonDataProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
