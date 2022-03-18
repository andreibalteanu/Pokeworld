import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./pages/home/Home";
import Pokemon from "./pages/pokemon/Pokemon";
import ErrorPage from "./pages/error-page/ErrorPage";
import reportWebVitals from "./reportWebVitals";
import { Route, Routes, BrowserRouter, Link } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <div className="index">
      <BrowserRouter>
        <Link to="/pokemon" className="title-app">
          <h1>Pokedex</h1>
        </Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon" element={<Home />} />
          <Route path="/pokemon/:pokemonId" element={<Pokemon />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
