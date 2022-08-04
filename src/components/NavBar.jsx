import styled from "styled-components";

//Icons NavBar
import menuIcon from "../img/logo3.png";
//End Icons

import ReactTooltip from "react-tooltip";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FormattedMessage } from "react-intl";
import Language from "./Language";
import NavResponsive from "./NavResponsive";
import Translate from "./svg/Translate";
import ArrowDown from "./svg/ArrowDown";
import { useTheme } from "../context/themeContext";
import { addOpacityColor } from "../utils";
import Sun from "./svg/Sun";
import Moon from "./svg/Moon";

const NavBar = () => {
  const [language, setLanguage] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);
  const [navbarResponsive, setNavbarResponsive] = useState(false);

  const { themeMode, themeToggler } = useTheme();

  const theme = themeMode;

  function navegacionFija() {
    const dateNow = document.querySelector(".date-now");

    window.addEventListener("scroll", function () {
      if (dateNow.getBoundingClientRect().top < 0) {
        setScrollNav(true);
      } else {
        setScrollNav(false);
      }
    });
  }

  const disableScroll = () => {
    if (navbarResponsive === true) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  useEffect(() => {
    navegacionFija();
  }, [scrollNav]);

  return (
    <>
      <NavResponsive
        estado={navbarResponsive}
        cambiarEstado={setNavbarResponsive}
        disableScroll={disableScroll}
        themeToggler={themeToggler}
        theme={theme}
        language={language}
        setLanguage={setLanguage}
      />
      <NavigateBar className="navegacion-principal" scrollNav={scrollNav}>
        <ContainerLogo>
          <img src={menuIcon} alt="Logo" />
          <h1>
            <a href="#home">mozzes</a>
          </h1>
        </ContainerLogo>
        <ContainerLinks>
          <a href="#home">Home</a>
          <a href="#about">
            <FormattedMessage id="nav.about" defaultMessage="About" />
          </a>

          <a href="#projects">
            <FormattedMessage id="nav.projects" defaultMessage="Projects" />
          </a>
          <a href="#services">
            <FormattedMessage id="nav.services" defaultMessage="Services" />
          </a>
          <a href="#contact">
            <FormattedMessage id="nav.contact" defaultMessage="Contact" />
          </a>
        </ContainerLinks>
        <ContainerIcons>
          <Modes
            onClick={themeToggler}
            data-tip
            data-for="mode-switch"
            mode={theme}
          >
            <div className="switch-icons">
              <Sun className="sun" />
              <Moon className="moon" />
            </div>
            <motion.div layout className="handle" />
          </Modes>
          <ContainerLanguage
            className="language-btn"
            onClick={() => setLanguage(!language)}
          >
            <Translate />
            <ArrowDown className="arrow-down" />
            <Language language={language} setLanguage={setLanguage} />
          </ContainerLanguage>
        </ContainerIcons>
        <ContainerMenuResponsive
          onClick={() => {
            setNavbarResponsive(!navbarResponsive);
            setLanguage(false);
            disableScroll();
          }}
        >
          <motion.svg
            initial={{ scale: 0.98 }}
            whileTap={{ scale: 1.04 }}
            transition={{ duration: 0.3 }}
          >
            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
          </motion.svg>
        </ContainerMenuResponsive>
      </NavigateBar>

      <ReactTooltip
        id="mode-switch"
        place="bottom"
        type={theme === "light" ? "dark" : "light"}
        effect="solid"
        offset={{ top: 3, left: 0 }}
        clickable={true}
        className="tooltip-mode"
      >
        Change the Theme of Page
      </ReactTooltip>
      {language === false && (
        <ReactTooltip
          id="language"
          place="bottom"
          type={theme === "light" ? "dark" : "light"}
          effect="solid"
          offset={{ top: 0, left: 0 }}
          clickable={false}
          className="tooltip-language"
        >
          Select a Language
        </ReactTooltip>
      )}
    </>
  );
};

export default NavBar;

const NavigateBar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 3;
  position: sticky;
  top: 0;
  padding: 5px 50px;
  background-color: ${({ theme }) => theme.navBg};
  backdrop-filter: blur(10px);
  @media (max-width: 890px) {
    justify-content: space-between;
    padding: 5px 20px;
  }
`;

const ContainerLogo = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 25px;
    margin: 5px 12px 0 0;
  }
  h1 {
    font-weight: 600;
    a {
      color: ${({ theme }) => theme.navText};
    }
    @media (max-width: 582px) {
      font-size: 28px;
      font-weight: 500;
    }
  }
`;

const ContainerLinks = styled.div`
  text-align: center;
  a {
    text-transform: uppercase;
    margin: 0 15px;
    font-size: 14px;
    transition: 0.3s;
    letter-spacing: 1.5px;
    font-weight: 500;
    color: ${({ theme }) => theme.navText};
    :hover {
      color: #61dafb;
      transition: 0.3s;
      border-radius: 10px;
      box-shadow: 0px 0px 20px rgba(97, 218, 251, 0.149), 0px 0px 20px rgba(97, 218, 251, 0.149) inset;
    }
    @media (max-width: 890px) {
      font-size: 12px;
      margin: 0 7px;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const ContainerIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    cursor: pointer;
    width: 26px;
    margin: 0;
  }
  .language-btn {
    margin: 5px;
    display: flex;
    align-items: center;
    cursor: pointer;
    .arrow-down {
      width: 18px;
      height: 18px;
      margin-bottom: 3px;
    }
    .translate {
      transform: scale(0.55);
      width: 43px;
      height: 43px;
      :focus {
        outline: none;
      }
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const ContainerLanguage = styled.div`
  .container-div {
    opacity: 0;
    overflow: hidden;
    max-height: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    padding: 6px 0;
    background-color: ${({ theme }) => theme.modeColor};
    top: 38px;
    z-index: 2;
    right: -9px;
    border-radius: 8px;
    .divContainer {
      transition: 0.5 all;
      display: flex;
      align-items: center;
      cursor: pointer;
      justify-content: space-between;
      width: 100%;
      padding: 3px 15px;
      margin: 3px 0;
      gap: 10px;
      color: ${({ theme }) => theme.body};
      :hover {
        background-color: #e1e1e1;
        color: ${({ theme }) => theme.modeColor};
      }
      p {
        font-size: 14px;
        transition: 0.5 all;
        letter-spacing: normal;
      }
      img {
        object-fit: cover;
        width: 23px;
        height: 23px;
        border-radius: 50%;
      }
    }
  }
  .arrow-down {
    fill: ${({ theme }) => theme.navText};
  }
`;

const ContainerMenuResponsive = styled.div`
  display: none;
  border-radius: 50%;
  background-color: #fff;
  padding: 3px;
  svg {
    width: 24px;
    height: 24px;
  }
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;

export const Modes = styled.div`
  width: 55px;
  height: 25px;
  border: 1px solid ${({ theme }) => addOpacityColor(theme.modeColor, 1)};
  display: flex;
  align-items: center;
  border-radius: 50px;
  cursor: pointer;
  position: relative;

  .handle {
    position: absolute;
    width: 28px;
    height: 28px;
    background-color: ${({ theme }) => theme.modeSwitch};
    border-radius: 50%;
    left: ${({ mode }) => (mode === "light" ? "-5px" : "29px")};
    box-shadow: rgb(0 0 0 / 20%) 0px 0px 2px 2px;
  }

  .switch-icons {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    .sun {
      min-width: 19px;
      max-width: 19px;
      fill: ${({ theme }) => theme.modeColor};
    }
    .moon {
      min-width: 18px;
      max-width: 18px;
      fill: ${({ theme }) => theme.modeColor};
    }
  }
`;
