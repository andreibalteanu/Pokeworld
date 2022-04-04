import React, { useContext } from "react";

import "./Layout.css";
import PokemonData from "PokemonData";

function Layout({ children }) {
  const { theme } = useContext(PokemonData);
  return (
    <div className="app-wrapper" data-theme={theme}>
      {children}
    </div>
  );
}

export default Layout;
