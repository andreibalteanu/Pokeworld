import React from "react";
import ReactDOM from "react-dom";
import { Routes, BrowserRouter, Route, Link } from "react-router-dom";

import { ChakraProvider, Flex, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

import Layout from "components/Layout/Layout";

import "./index.css";
import Home from "pages/Home/Home";
import Pokedex from "pages/Pokedex/Pokedex";
import Poketv from "pages/Poketv/Poketv";
import QuizGame from "pages/QuizGame/QuizGame";
import ViewerOptions from "pages/ViewerOptions/ViewerOptions";
import PokemonViewer from "pages/PokemonViewer/PokemonViewer";
import Pokemon from "pages/Pokemon/Pokemon";
import Episodes from "pages/Episodes/Episodes";
import FlappyMagikarp from "pages/FlappyMagikarp/FlappyMagikarp";
import CardGame from "pages/CardGame/CardGame";
import ErrorPage from "pages/ErrorPage/ErrorPage";
import { PokemonDataProvider } from "./PokemonData";
import pokemonLogo from "./images/pokemon-logo.png";

// const Home = lazy(() => import("./pages/Home/Home"));
// const Pokedex = lazy(() => import("./pages/Pokedex/Pokedex"));
// const Pokemon = lazy(() => import("./pages/Pokemon/Pokemon"));
// const Poketv = lazy(() => import("./pages/Poketv/Poketv"));
// const ViewerOptions = lazy(() => import("./pages/ViewerOptions/ViewerOptions"));
// const PokemonViewer = lazy(() => import("./pages/PokemonViewer/PokemonViewer"));
// const Episodes = lazy(() => import("./pages/Episodes/Episodes"));
// const QuizGame = lazy(() => import("./pages/QuizGame/QuizGame"));
// const FlappyMagikarp = lazy(() =>
//   import("./pages/FlappyMagikarp/FlappyMagikarp")
// );
// const CardGame = lazy(() => import("./pages/CardGame/CardGame"));
// const ErrorPage = lazy(() => import("./pages/ErrorPage/ErrorPage"));
const MotionImage = motion(Image);

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
              <MotionImage
                whileHover={{
                  scale: 1.1,
                }}
                src={pokemonLogo}
                alt="pokemonLogo"
                className="title-app"
              />
            </Link>
            <Layout>
              {/* <Suspense fallback={<Spinner size="xl" />}> */}
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pokemon" element={<Pokedex />} />
                <Route path="/pokemon/:pokemonId" element={<Pokemon />} />
                <Route path="/poketv" element={<Poketv />} />
                <Route path="/poketv/:seriesName" element={<Episodes />} />
                <Route path="/quizgame" element={<QuizGame />} />
                <Route path="/viewer-options" element={<ViewerOptions />} />
                <Route
                  path="/viewer-options/:pokemonName"
                  element={<PokemonViewer />}
                />
                <Route path="/flappy-magikarp" element={<FlappyMagikarp />} />
                <Route path="/cardgame" element={<CardGame />} />
                <Route path="/*" element={<ErrorPage />} />
              </Routes>
              {/* </Suspense> */}
            </Layout>
          </Flex>
        </ChakraProvider>
      </BrowserRouter>
    </PokemonDataProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
