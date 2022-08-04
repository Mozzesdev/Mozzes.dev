import { useContext } from "react";
import { createContext, useState } from "react";

export const themeContext = createContext();

export const useTheme = () => {
  const context = useContext(themeContext);
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState("dark");

  const themeToggler = () => {
    themeMode === "light" ? setThemeMode("dark") : setThemeMode("light");
    if (themeMode === "light") {
      localStorage.setItem("mode-window", "dark");
    } else {
      localStorage.setItem("mode-window", "light");
    }
  };

  const modeWindow = () => {
    if (localStorage.getItem("mode-window") === "dark") {
      setThemeMode("dark");
    } else {
      setThemeMode("light");
    }
  };

  return (
    <themeContext.Provider value={{ modeWindow, themeToggler, themeMode }}>
      {children}
    </themeContext.Provider>
  );
};
