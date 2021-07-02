import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { ThemeModeProvider } from "contexts/ThemeModeContext";

import "styles/global.scss";

ReactDOM.render(
  <React.StrictMode>
    <ThemeModeProvider>
      <App />
    </ThemeModeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
