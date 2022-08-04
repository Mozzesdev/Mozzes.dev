import { BrowserRouter as HashRouter } from "react-router-dom";
import { LangProvider } from "./context/langContext";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./main.css";
import { ThemeProvider } from "./context/themeContext";

const root = createRoot(document.getElementById("root"));

root.render(
  <LangProvider>
    <ThemeProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </ThemeProvider>
  </LangProvider>
);
