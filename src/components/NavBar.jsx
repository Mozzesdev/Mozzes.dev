import styled from "styled-components";

//Icons NavBar
import downArrowIcon from "../icons/downArrow.svg";
import arrowdown from "../icons/arrowdown.svg";
import googletranslateIcon from "../icons/googletranslate.svg";
import sunIcon from "../icons/sun.svg";
import sunIconWhite from "../icons/sunwhite.svg";
import moonIcon from "../icons/moon.svg";
import moonIconWhite from "../icons/moonwhite.svg";
import menuIcon from "../img/logo3.png";
//End Icons

import ReactTooltip from "react-tooltip";
import { motion } from "framer-motion";
import { useState, useContext, useEffect } from "react";
import { FormattedMessage } from "react-intl";
import Language from "./Language";
import NavResponsive from "./NavResponsive";
import disableScroll from "disable-scroll";

const NavBar = ({ themeToggler, theme }) => {
  const [language, setLanguage] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);
  const [navbarResponsive, setNavbarResponsive] = useState(false);

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
      <motion.div
        className="container-nav"
        initial={{width: '100%'}}
        animate={
          scrollNav === true && navbarResponsive === false
            ? {
                position: "fixed",
                width: "100%",
                maxHeight: "63px",
                height: ["0%", "100%"],
                boxShadow: "1px 3px 20px rgba(51, 51, 51, 0.138)",
                top: 0,
                left: 0,
                zIndex: 2,
              }
            : {
                width: "100%",
                zIndex: 2,
              }
        }
        transition={{ duration: 0 }}
      >
        <NavigateBar className="navegacion-principal" scrollNav={scrollNav}>
          <ContainerLogo>
            <img src={menuIcon} alt="" />
            <h1>
              <a href="#home">mozzes</a>
            </h1>
          </ContainerLogo>
          <ContainerLinks>
            <a href="#home">Home</a>
            <a href="#about">
              <FormattedMessage id="nav.about" defaultMessage="About" />
            </a>
            <a href="#services">
              <FormattedMessage id="nav.services" defaultMessage="Services" />
            </a>
            <a href="#projects">
              <FormattedMessage id="nav.projects" defaultMessage="Projects" />
            </a>
            <a href="#contact">
              <FormattedMessage id="nav.contact" defaultMessage="Contact" />
            </a>
          </ContainerLinks>
          <ContainerIcons>
            <div
              className="modes"
              onClick={themeToggler}
              data-tip
              data-for="mode-switch"
            >
              {theme === "light" ? (
                <img
                  src={sunIcon}
                  alt=""
                  className="sun"
                  onClick={themeToggler}
                />
              ) : (
                <img
                  src={sunIconWhite}
                  className="sun"
                  alt=""
                  onClick={themeToggler}
                />
              )}
              {theme === "light" ? (
                <img
                  src={moonIcon}
                  alt=""
                  onClick={themeToggler}
                  className="moon"
                />
              ) : (
                <img
                  src={moonIconWhite}
                  className="moon"
                  alt=""
                  onClick={themeToggler}
                />
              )}
            </div>
            <ContainerLanguage
              className="language-btn"
              onClick={() => setLanguage(!language)}
            >
              <img
                src={googletranslateIcon}
                data-tip
                data-for="language"
                className="translate"
                alt=""
              />
              <motion.img
                animate={language ? { rotate: 180 } : { rotate: 0 }}
                className="arrow-down"
                src={theme === "light" ? downArrowIcon : arrowdown}
                alt=""
              />
              <Language language={language} setLanguage={setLanguage} />
            </ContainerLanguage>
          </ContainerIcons>
          <ContainerMenuResponsive
            onClick={() => {
              setNavbarResponsive(!navbarResponsive);
              disableScroll.on();
            }}
          >
            <motion.svg
              initial={{ scale: 0.98 }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 1.04 }}
              transition={{ duration: 0.3 }}
            >
              <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
            </motion.svg>
          </ContainerMenuResponsive>
        </NavigateBar>
      </motion.div>

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
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  padding: 5px 0;
  @media (max-width: 890px) {
    justify-content: space-between;
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
    @media (max-width: 582px) {
      font-size: 28px;
      font-weight: 500;
    }
  }
`;

const ContainerLinks = styled.div`
  text-align: center;
  margin: 0 auto;
  a {
    text-transform: uppercase;
    margin: 0 15px;
    font-size: 14px;
    transition: 0.3s;
    letter-spacing: 1.5px;
    font-weight: 500;
    :hover {
      color: #61dafb;
      transition: 0.3s;
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
  width: 105px;
  img {
    cursor: pointer;
    width: 26px;
    margin: 0;
  }
  div {
    margin: 5px;
    display: flex;
    align-items: center;
    .arrow-down {
      width: 20px;
      margin-top: 3px;
    }
    .translate {
      width: 24px;
      margin-left: 10px;
    }
  }
  .modes {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 3px 7px;
    cursor: pointer;
    border-radius: 12px;
    .sun {
      width: 18px;
      height: 18px;
      margin: 0 13px 0 0;
    }
    .moon {
      width: 18px;
      height: 18px;
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const ContainerLanguage = styled.div`
  .container-div {
    width: 130px;
    opacity: 0;
    overflow: hidden;
    max-height: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    padding: 6px 0;
    top: 28px;
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
      padding: 4px 15px;
      margin: 3px 0;
      gap: 10px;
      :hover {
        background-color: #e1e1e1;
      }
      p {
        font-size: 14px;
        transition: 0.5 all;
        letter-spacing: normal;
      }
      img {
        object-fit: cover;
        width: 20px;
        height: 20px;
        border-radius: 50%;
      }
    }
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
