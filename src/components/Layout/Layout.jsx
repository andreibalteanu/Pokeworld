import React, { useContext } from "react";

import PokemonData from "PokemonData";
import "./Layout.css";

function Layout({ children }) {
  const { theme } = useContext(PokemonData);
  return (
    <div className="app-wrapper" data-theme={theme}>
      {children}
    </div>
  );
}

export default Layout;
