import { createGlobalStyle, ThemeProvider } from "styled-components";
import { useTheme } from "./context/themeContext";

const GlobalStyles = createGlobalStyle`

  :root{
    --primary-color: #fde52b;
    --secondary-color: #61dafb;
  }

  
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Kanit", sans-serif;
}

  html {
  scroll-behavior: smooth;
}

  body{
    background-color: ${({ theme }) => theme.body};
  }

  ::-webkit-scrollbar {
  appearance: none;
  width: 8px;
  }

  ::-webkit-scrollbar-thumb {
  background-color: #424242;
  border-radius: 15px;
  }

  .tex-color__primary{
    color: ${({ theme }) => theme.navText};
  }

  .tex-color__secundary{
    color: ${({ theme }) => theme.textSecundary};
  }

  .title-color{
    color: ${({ theme }) => theme.navText};
  }
  

a {
  text-decoration: none;
}

.javascript-color {
  color: #efd81d;
  font-weight: 500;
  text-decoration: underline;
}

.react-color {
  color: #61dafb;
  font-weight: 500;
  text-decoration: underline;
  img {
  vertical-align: middle;
  margin: 0 0 4px 4px;
  width: 23px;
}
}
.tooltip-language {
  padding: 5px 10px !important;
}

.tooltip-mode {
  padding: 5px 10px !important;
}

.tooltip-icons {
  padding: 2px 10px !important;
  background-color: #e2e2e2 !important;
  opacity: 1 !important;
  color: #424242 !important;
}

.language-btn {
  position: relative;
}

.title-line {
  width: 100px;
  height: 5px;
  background-color: #efd81d;
  border-radius: 2px;
}

.cv-download {
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  padding: 8px 23px 8px 20px;
  margin: 15px 0;
  border: none;
  background-color: #fde52b;
  transition: 0.3s all ease;

  img {
  margin-right: 7px;
}

:hover {
  background-color: #cfba1b;
  transition: 0.3s all;
}

  @media (max-width: 582px) {
    font-size: 13px;
    padding: 8px 23px 8px 18px;
}
}

.root-scroll {
  padding-top: 10px;
}

.flex-row{
  display: flex;
  flex-direction: row;
  align-items: center;
}

.slick-dots{
  button::before{
    color: ${({ theme }) => theme.modeColor} !important;
  }
}

.react-lib{
  color: #61dafb;
  :hover{
    color: #35b2d4;
  }
}
.axios-lib{
  color: #5a29e4;
  :hover{
    color: #401da1;
  }
}
.styled-lib{
  color: #ff88f7;
  :hover{
    color: #ef39e3;
  }
}
.framer-lib{
  color: #ac29e4;
  :hover{
    color: #8022a9;
  }
}

.router-lib{
  color: #fff;
  :hover{
    color: #fff;
  }
}

.firebase-lib{
  color: #ffc400;
  :hover{
    color: #e0ac00;
  } 
}
.next-lib{
  color: #d0d0d0;
  :hover{
    color: #b7b7b7;
  } 
}
.recoil-lib{
  color: #0b85ff;
  :hover{
    color: #0061c3;
  } 
}

`;

const theme = {
  light: {
    body: "#f7f7f7",
    bodyDark: "#2d2d2d",
    bodyLight: "#ededed",
    navBg: "#f7f7f73f",
    navText: "#424242",
    textSecundary: "#6b6b6b",
    modeColor: "#1a1a1a",
    modeSwitch: "#f3f3f3",
    colors: {
      primary: "#fde52b",
      secondary: "#61dafb",
      white: "#ffffff",
      gray: "#ACACAC",
      black: "#000000",
    },
  },
  dark: {
    body: "#1a1a1a",
    bodyDark: "#2d2d2d",
    bodyLight: "#232323",
    navBg: "#1a1a1aa0",
    navText: "#f3f3f3",
    textSecundary: "#ACACAC",
    modeColor: "#ffffff",
    modeSwitch: "#f3f3f3",
    colors: {
      primary: "#fde52b",
      secondary: "#61dafb",
      white: "#ffffff",
      gray: "#ACACAC",
      black: "#000000",
    },
  },
};

export default function ThemeProviderApp({ children }) {
  const { themeMode } = useTheme();

  return (
    <>
      <ThemeProvider theme={themeMode === "light" ? theme.light : theme.dark}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </>
  );
}
