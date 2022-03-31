import React, { useContext } from "react";
import { useEffect } from "react";
import lol from "../img/Lol.webp";
import lolDark from "../img/LolDark.webp";
import reactColor from '../icons/react.color.svg'
import linkdIcon from "../icons/linkd.svg";
import linkdnw from "../icons/linkdnw.svg";
import github from "../icons/github.svg";
import githubw from "../icons/githubw.svg";
import styled from "styled-components";
import About from "./About";
import { motion } from "framer-motion";
import { FormattedMessage } from "react-intl";

import Projects from "./Projects";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Services from "./Services";

import AOS from "aos";
import Contact from "./Contact";
AOS.init();

const Home = ({ theme, themeToggler }) => {
  const dateNow = new Date();

  useEffect(() => {
    document.title = "Moisés Zambrano - Portfolio";
  }, []);

  return (
    <>
      <NavBar themeToggler={themeToggler} theme={theme} />
      <Header id="home">
        <HeaderImg
          data-aos="fade-right"
          data-aos-delay="500"
          data-aos-duration="1000"
        >
          {theme === "light" ? (
            <img src={lol} className="me-home" alt="me-img" />
          ) : (
            <img src={lolDark} className="me-home" alt="me-img" />
          )}
        </HeaderImg>
        <TextHeader
          data-aos="fade-down"
          data-aos-delay="1200"
          data-aos-duration="1000"
        >
          <h2>
            <FormattedMessage
              id="app.helloworld"
              defaultMessage="Hola Mundo!"
            />
            {/* Hello World! */}
          </h2>
          <h2>
            <FormattedMessage
              id="app.i`m"
              defaultMessage="Soy Moisés Zambrano"
            />
            {/* I`m Moises Zambrano */}
          </h2>
          <p>
            <FormattedMessage
              id="app.developer"
              defaultMessage="Desarrollador Web Frontend Junior especializado en"
            />{" "}
            {/* Frontend Web Developer Junior specialized in  */}
            <span className="javascript-color">JavaScript</span>{" "}
            <FormattedMessage id="app.and" defaultMessage="y" />{" "}
            <span className="react-color">
              ReactJS{" "}
              <motion.img
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                alt='react-icon'
                src={reactColor}
              />
            </span>
          </p>
          <div className="icons-header">
            <motion.img
              onClick={() =>
                window.open("https://github.com/WinFlix", "_blank")
              }
              whileHover={{ rotate: [0, 5, 15, -15, 5, 0] }}
              whileTap={{ scale: 3 }}
              transition={{ duration: 0.5 }}
              src={theme === "light" ? github : githubw}
              alt="github-icon"
            />
            <motion.img
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/mois%C3%A9s-omar-zambrano-rodr%C3%ADguez-6a1310174/",
                  "_blank"
                )
              }
              whileHover={{ rotate: [0, 5, 15, -15, 5, 0] }}
              whileTap={{ scale: 3 }}
              transition={{ duration: 0.5 }}
              src={theme === "light" ? linkdIcon : linkdnw}
              alt="linkedin-icon"
            />
            <p className="date-now"> - {dateNow.toLocaleDateString()}</p>
          </div>
        </TextHeader>
      </Header>
      <About theme={theme} />
      <Services theme={theme} />
      <Projects theme={theme} />
      <Contact theme={theme} />

      <Footer />
    </>
  );
};

export default Home;

const Header = styled.header`
  display: flex;
  width: 90%;
  margin: 110px auto 0;
  align-items: center;
  justify-content: center;
  @media (max-width: 800px) {
    justify-content: space-between;
  }
  @media (max-width: 582px) {
    flex-direction: column;
    margin: 40px auto 0;
  }
`;

const TextHeader = styled.div`
  position: relative;
  margin-bottom: 80px;
  margin-left: 50px;
  width: 40%;
  @media (max-width: 670px) {
    margin-left: 20px;
    margin-bottom: 20px;
    width: 100%;
  }
  @media (max-width: 582px) {
    margin-top: 20px;
    margin-left: 0px;
    text-align: center;
    margin-bottom: 0;
  }
  .icons-header {
    padding: 10px 0 0;
    display: flex;
    img {
      width: 30px;
      cursor: pointer;
      height: 30px;
    }
    p {
      margin-left: 5px;
    }
    @media (max-width: 582px) {
      justify-content: center;
    }
  }
  h2 {
    font-size: 35px;
    @media (max-width: 800px) {
      font-size: 29px;
    }
    @media (max-width: 310px) {
      font-size: 25px;
    }
  }
  p {
    font-size: 20px;
    @media (max-width: 800px) {
      font-size: 18px;
    }
    @media (max-width: 310px) {
      font-size: 16px;
    }
  }
`;

const HeaderImg = styled.div`
  img {
    width: 400px;
    object-fit: cover;
    @media (max-width: 800px) {
      width: 320px;
    }
    @media (max-width: 670px) {
      width: 280px;
    }
    @media (max-width: 582px) {
      width: 230px;
    }
    @media (max-width: 310px) {
      width: 200px;
      margin-top: 20px;
    }
  }
`;
