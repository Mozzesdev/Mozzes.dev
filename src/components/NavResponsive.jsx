import { motion } from "framer-motion";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";

import LanguageResponsive from "./LanguageResponsive";
import downArrowIcon from "../icons/downArrow.svg";
import arrowdown from "../icons/arrowdown.svg";
import googletranslateIcon from "../icons/googletranslate.svg";
import { Modes } from "./NavBar";
import Sun from "./svg/Sun";
import Moon from "./svg/Moon";
import IconWrapper from "./IconWrapper";
import ArrowDown from "./svg/ArrowDown";
import Translate from "./svg/Translate";

const variants = {
  open: {
    width: ["0%", "70%"],
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
            disableScroll();
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
                  disableScroll();
                  cambiarEstado(!estado);
                }}
              >
                Home
              </a>
              <a
                href="#about"
                onClick={() => {
                  disableScroll();
                  cambiarEstado(!estado);
                }}
              >
                <FormattedMessage id="nav.about" defaultMessage="About" />
              </a>
              <a
                href="#services"
                onClick={() => {
                  disableScroll();
                  cambiarEstado(!estado);
                }}
              >
                <FormattedMessage id="nav.services" defaultMessage="Services" />
              </a>
              <a
                href="#projects"
                onClick={() => {
                  disableScroll();
                  cambiarEstado(!estado);
                }}
              >
                <FormattedMessage id="nav.projects" defaultMessage="Projects" />
              </a>
              <a
                href="#contact"
                onClick={() => {
                  disableScroll();
                  cambiarEstado(!estado);
                }}
              >
                <FormattedMessage id="nav.contact" defaultMessage="Contact" />
              </a>
            </ContainerLinks>
            <ContainerIcons>
              <Modes onClick={themeToggler} mode={theme} className="mode">
                <div className="switch-icons">
                  <Sun className="sun" />
                  <Moon className="moon" />
                </div>
                <motion.div layout className="handle" />
              </Modes>

              <ContainerLanguage
                onClick={() => setLanguage(!language)}
              >
                <div className="flex-row">
                  <IconWrapper>
                    <Translate width={43} height={43} style={{transform: "scale(0.8)"}}/>
                  </IconWrapper>
                  <p>Select Language</p>
                </div>
                <ArrowDown width={18} height={18} className="arrow-down"/>
              </ContainerLanguage>
              <LanguageResponsive
                language={language}
                setLanguage={setLanguage}
              />
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
  background-color: #00000038;
  z-index: 20;
  top: 0;
  left: 0;
  display: flex;
  justify-content: flex-end;
  .container-nav__responsive {
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    background-color: ${({ theme }) => theme.body};
  }
`;

const ContainerLinks = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 30px;
  a {
    font-size: 18px;
    padding: 10px 20px;
    text-align: left;
    width: 100%;
    color: ${({ theme }) => theme.navText};
    :hover {
      background-color: #424242;
      color: ${({ theme }) => theme.bodyLight};
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
  .mode {
    margin-left: 5px;
  }
`;

const ContainerLanguage = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  justify-content: space-between;
  cursor: pointer;
  margin-top: 10px;
  .flex-row{
    gap: 10px;
    color: ${({ theme }) => theme.navText};
  }
  .arrow-down{
    fill: ${({ theme }) => theme.navText};
  }
`;
