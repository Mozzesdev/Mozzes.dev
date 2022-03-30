import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as HashRouter } from "react-router-dom";
import "./main.css";
import "aos/dist/aos.css";
import App from "./App";
import { LangProvider } from "./context/langContext";

ReactDOM.render(
  <React.StrictMode>
    <LangProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </LangProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
