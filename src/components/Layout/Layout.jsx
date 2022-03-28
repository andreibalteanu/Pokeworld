import React from "react";

import "./Layout.css";

function Layout({ children }) {
  return <div className="app-wrapper">{children}</div>;
}

export default Layout;
