import { useEffect } from "react";
import lol from "../img/Lol.webp";
import styled from "styled-components";
import About from "./About";
import { motion } from "framer-motion";
import { FormattedMessage } from "react-intl";

import Projects from "./Projects";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Services from "./Services";

import Contact from "./Contact";
import Github from "../components/svg/Github";
import IconWrapper from "../components/IconWrapper";
import Linkd from "../components/svg/Linkedin";

const Home = () => {
  const dateNow = new Date();

  useEffect(() => {
    document.title = "Moisés Zambrano - Portfolio";
  }, []);

  return (
    <>
      <div id="home" />
      <NavBar />
      <Header>
        <HeaderImg
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
        >
          <img src={lol} className="me-home" alt="me-img" />
        </HeaderImg>
        <TextHeader
          className="tex-color__primary"
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{
            duration: 1,
            delay: 1.5,
            type: "spring",
            damping: 15,
            mass: 4,
          }}
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
              ReactJS
              <motion.img
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                alt="react-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
              />
            </span>
          </p>
          <div className="icons-header">
            <IconWrapper>
              <Github
                onClick={() =>
                  window.open("https://github.com/WinFlix", "_blank")
                }
                width={30}
                whileHover={{ rotate: [0, 5, 15, -15, 5, 0] }}
                whileTap={{ scale: 3 }}
                transition={{ duration: 0.5 }}
              />
            </IconWrapper>
            <IconWrapper>
              <Linkd
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/mozzesdev/",
                    "_blank"
                  )
                }
                width={30}
                whileHover={{ rotate: [0, 5, 15, -15, 5, 0] }}
                whileTap={{ scale: 3 }}
                transition={{ duration: 0.5 }}
              />
            </IconWrapper>
            <p className="date-now"> - {dateNow.toLocaleDateString()}</p>
          </div>
        </TextHeader>
      </Header>
      <About />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;

const Header = styled.header`
  display: flex;
  width: 100%;
  min-height: calc(100vh - 63px);
  background-color: ${({ theme }) => theme.body};
  align-items: center;
  justify-content: center;
  @media (max-width: 582px) {
    flex-direction: column;
    min-height: calc(100vh - 52px);
  }
`;

const TextHeader = styled(motion.div)`
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
    svg {
      fill: ${({theme}) => theme.modeColor};
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

const HeaderImg = styled(motion.div)`
  position: relative;
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

  ::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(
      rgb(0, 0, 0, 0),
      rgb(0, 0, 0, 0),
      ${({ theme }) => theme.body},
      ${({ theme }) => theme.body} 150%
    );
  }
`;
