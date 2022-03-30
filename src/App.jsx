import { Route, Routes, Navigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Home from "./page/Home";
import { useState, useEffect } from "react";
import { darkTheme, lightTheme, GlobalStyles } from "./themes";
import { IntlProvider } from "react-intl";
import { useLang } from "./context/langContext";
import PdfView from "./page/PdfView";

const App = () => {
  const [theme, setTheme] = useState("light");

  const { messages, locale } = useLang();

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    if (theme === "light") {
      localStorage.setItem("mode-window", "dark");
    } else {
      localStorage.setItem("mode-window", "light");
    }
  };


  const modeWindow = () => {
    if (localStorage.getItem("mode-window") === "dark") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    modeWindow();
  }, []);

  return (
    <>
      <IntlProvider locale={locale} messages={messages}>
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
          <GlobalStyles />
          <Routes>
            <Route path="/" element={<Home themeToggler={themeToggler} theme={theme} />} />
            <Route path="/cv" element={<PdfView />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </ThemeProvider>
      </IntlProvider>
    </>
  );
};

export default App;
