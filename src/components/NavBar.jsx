import styled from "styled-components";

//Icons NavBar
import downArrowIcon from "../icons/downArrow.svg";
import arrowdown from "../icons/arrowdown.svg";
import googletranslateIcon from "../icons/googletranslate.svg";
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
        initial={{ width: "100%" }}
        animate={
          scrollNav === true
            ? {
                position: "fixed",
                width: "100%",
                maxHeight: "63px",
                height: ["0%", "100%"],
                boxShadow: "1px 3px 20px rgba(51, 51, 51, 0.138)",
                top: 0,
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
              <motion.svg
                className="sun"
                animate={
                  theme === "light" ? { fill: "#424242" } : { fill: "#f1f1f1" }
                }
              >
                <path d="M6.995 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007-2.246-5.007-5.007-5.007S6.995 9.239 6.995 12zM11 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2H2zm17 0h3v2h-3zM5.637 19.778l-1.414-1.414 2.121-2.121 1.414 1.414zM16.242 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.344 7.759 4.223 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z"></path>
              </motion.svg>
              <motion.svg
                className="moon"
                animate={
                  theme === "light" ? { fill: "#424242" } : { fill: "#f1f1f1" }
                }
              >
                <path d="M12 11.807A9.002 9.002 0 0 1 10.049 2a9.942 9.942 0 0 0-5.12 2.735c-3.905 3.905-3.905 10.237 0 14.142 3.906 3.906 10.237 3.905 14.143 0a9.946 9.946 0 0 0 2.735-5.119A9.003 9.003 0 0 1 12 11.807z"></path>
              </motion.svg>
            </div>
            <ContainerLanguage
              className="language-btn"
              onClick={() => setLanguage(!language)}
            >
              <svg data-tip data-for="language" className="translate">
                <path
                  fill="#CFD8DC"
                  d="M15,13h25c1.104,0,2,0.896,2,2v25c0,1.104-0.896,2-2,2H26L15,13z"
                />
                <path
                  fill="#546E7A"
                  d="M26.832,34.854l-0.916-1.776l0.889-0.459c0.061-0.031,6.101-3.208,9.043-9.104l0.446-0.895l1.79,0.893l-0.447,0.895c-3.241,6.496-9.645,9.85-9.916,9.989L26.832,34.854z"
                />
                <path
                  fill="#546E7A"
                  d="M38.019 34l-.87-.49c-.207-.116-5.092-2.901-8.496-7.667l1.627-1.162c3.139 4.394 7.805 7.061 7.851 7.087L39 32.26 38.019 34zM26 22H40V24H26z"
                />
                <path fill="#546E7A" d="M32 20H34V24H32z" />
                <path
                  fill="#2196F3"
                  d="M33,35H8c-1.104,0-2-0.896-2-2V8c0-1.104,0.896-2,2-2h14L33,35z"
                />
                <path fill="#3F51B5" d="M26 42L23 35 33 35z" />
                <path
                  fill="#FFF"
                  d="M19.172,24h-4.36l-1.008,3H11l4.764-13h2.444L23,27h-2.805L19.172,24z M15.444,22h3.101l-1.559-4.714L15.444,22z"
                />
              </svg>
              <motion.svg
                theme={theme}
                animate={
                  language
                    ? { rotate: 180 }
                    : { rotate: 0 }
                }
                className="arrow-down"
              >
                <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
              </motion.svg>
              {/* <motion.img
                animate={language ? { rotate: 180 } : { rotate: 0 }}
                className="arrow-down"
                src={theme === "light" ? downArrowIcon : arrowdown}
                alt=""
              /> */}
              <Language language={language} setLanguage={setLanguage} />
            </ContainerLanguage>
          </ContainerIcons>
          <ContainerMenuResponsive
            onClick={() => {
              setNavbarResponsive(!navbarResponsive);
              setLanguage(false);
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
  .modes {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 0 5px;
    cursor: pointer;
    border-radius: 12px;
    .sun {
      transform: scale(0.8);
      width: 24px;
      height: 24px;
      margin: 0 3px 0 0;
    }
    .moon {
      transform: scale(0.8);
      width: 24px;
      height: 24px;
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
        width: 23px;
        height: 23px;
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
