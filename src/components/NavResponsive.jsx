import { motion } from "framer-motion";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";

import LanguageResponsive from "./LanguageResponsive";
import downArrowIcon from "../icons/downArrow.svg";
import arrowdown from "../icons/arrowdown.svg";
import googletranslateIcon from "../icons/googletranslate.svg";

const variants = {
  open: {
    width: ["0%", "73%"],
    opacity: ["0", "1"],
  },
  close: {
    width: ["0%", "0%"],
  },
};

const NavResponsive = ({
  estado,
  cambiarEstado,
  disableScroll,
  themeToggler,
  theme,
  language,
  setLanguage,
}) => {
  return (
    <>
      {estado && (
        <Overlay
          onClick={() => {
            cambiarEstado(!estado);
            setLanguage(!language);
            disableScroll.off();
          }}
        >
          <motion.div
            variants={variants}
            transition={{ duration: 0.6 }}
            animate={estado === true ? "open" : "close"}
            className="container-nav__responsive"
            onClick={(e) => e.stopPropagation()}
          >
            <ContainerLinks>
              <a
                href="#home"
                onClick={() => {
                  disableScroll.off();
                  cambiarEstado(!estado);
                }}
              >
                Home
              </a>
              <a
                href="#about"
                onClick={() => {
                  disableScroll.off();
                  cambiarEstado(!estado);
                }}
              >
                <FormattedMessage id="nav.about" defaultMessage="About" />
              </a>
              <a
                href="#services"
                onClick={() => {
                  disableScroll.off();
                  cambiarEstado(!estado);
                }}
              >
                <FormattedMessage id="nav.services" defaultMessage="Services" />
              </a>
              <a
                href="#projects"
                onClick={() => {
                  disableScroll.off();
                  cambiarEstado(!estado);
                }}
              >
                <FormattedMessage id="nav.projects" defaultMessage="Projects" />
              </a>
              <a
                href="#contact"
                onClick={() => {
                  disableScroll.off();
                  cambiarEstado(!estado);
                }}
              >
                <FormattedMessage id="nav.contact" defaultMessage="Contact" />
              </a>
            </ContainerLinks>
            <ContainerIcons>
              <div className="modes-responsive" onClick={themeToggler}>
                <motion.svg
                  className="sun"
                  animate={
                    theme === "light"
                      ? { fill: "#424242" }
                      : { fill: "#f1f1f1" }
                  }
                >
                  <path d="M6.995 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007-2.246-5.007-5.007-5.007S6.995 9.239 6.995 12zM11 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2H2zm17 0h3v2h-3zM5.637 19.778l-1.414-1.414 2.121-2.121 1.414 1.414zM16.242 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.344 7.759 4.223 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z"></path>
                </motion.svg>
                <motion.svg
                  className="moon"
                  animate={
                    theme === "light"
                      ? { fill: "#000000" }
                      : { fill: "#f1f1f1" }
                  }
                >
                  <path d="M12 11.807A9.002 9.002 0 0 1 10.049 2a9.942 9.942 0 0 0-5.12 2.735c-3.905 3.905-3.905 10.237 0 14.142 3.906 3.906 10.237 3.905 14.143 0a9.946 9.946 0 0 0 2.735-5.119A9.003 9.003 0 0 1 12 11.807z"></path>
                </motion.svg>
              </div>
              <LanguageResponsive
                language={language}
                setLanguage={setLanguage}
              />
              <ContainerLanguage
                className="language-btn"
                onClick={() => setLanguage(!language)}
              >
                <div className="flex-row">
                  <img
                    src={googletranslateIcon}
                    data-tip
                    data-for="language"
                    className="translate-responsive"
                    alt=""
                  />
                  <p>Select Language</p>
                </div>
                <motion.img
                  animate={language ? { rotate: 0 } : { rotate: 180 }}
                  className="arrow-down__responsive"
                  src={theme === "light" ? arrowdown : downArrowIcon}
                  alt=""
                />
              </ContainerLanguage>
            </ContainerIcons>
          </motion.div>
        </Overlay>
      )}
    </>
  );
};

export default NavResponsive;

const Overlay = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  background-color: #1a1a1ac9;
  z-index: 20;
  top: 0;
  left: 0;
  .container-nav__responsive {
    width: 0%;
    height: 100%;
    margin: 0 0 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow-y: scroll;
  }
`;

const ContainerLinks = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 25px;
  a {
    font-size: 18px;
    padding: 10px 20px;
    text-align: left;
    width: 100%;
    :hover {
      background-color: #424242;
      color: #f1f1f1;
      transition: 0.3s all;
    }
    @media (max-width: 508px) {
      font-size: 20px;
    }
  }
`;

const ContainerIcons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 25px;
  width: 100%;
  .modes-responsive {
    display: flex;
    justify-content: space-evenly;
    padding: 5px 8px;
    cursor: pointer;
    border-radius: 12px;
    .sun {
      width: 24px;
      height: 24px;
      margin: 0 15px 0 0;
    }
    .moon {
      width: 24px;
      height: 24px;
    }
  }
`;

const ContainerLanguage = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0 60px 0;
  width: 90%;
  justify-content: space-between;
  cursor: pointer;
  .translate-responsive {
    width: 40px;
  }
  .arrow-down__responsive {
    width: 35px;
  }
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
      img {
        object-fit: cover;
        width: 18px;
        height: 18px;
        border-radius: 50%;
      }
    }
  }
`;
