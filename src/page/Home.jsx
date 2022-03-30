import React, { useContext } from "react";
import { useEffect } from "react";
import lol from "../img/Lol.png";
import lolDark from "../img/LolDark.png";
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
            <img src={lol} className="me-home" alt="" />
          ) : (
            <img src={lolDark} className="me-home" alt="" />
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
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAA/JJREFUSEt9Vj2MG0UU/t5s8O5eijgdQkj48PqgoLgCKbJ9SL4IQYUwtGmMiBAdRimgIndKAwXE6RAKigvSUIApkRBnifNageaQaLjd+6kQHQ7SxbvWeR5649273bPNVPbMvJ/vve99s0QAGPPrfD/5teCi2Zrbz2/Iv2RlD+YvLUoim1Y2IQKfJU3LEri6c1SM7NPb4oQJP0TVSj/r0BkGDWK8CQLs6NL2483V0TwayPEFDElE1w/7TOgCfExMbYljx9Y7cjt2pg/AIBB3mKlEQGtc8xrG2wWo8wgAOMPDElh3IzHCLAvbD1tgugVicf1FVPW6aWquf9B3YtX85/rqaC7Aoh5cHuyvT0l1orrXEAMJcMWUTP9GYLIj6+XR9edHabqC1iAw60L/lrHIGCUBxMz1wx4TesYFozmuec3UdmGADPnyHE245wyCv4joM0CXAHobgAIQJpc9gDSgvwOpY2j+aFz3nlmIIFui4s5hMXL0B8TcYuCKAr5lhT6m2LYn1rXR5qwsxZ2jYlzQj2DxbUzRBOE1AP8y0QMnUvcMozLkN2W7vLu/rkFdAnqFidWZ2Fpq2mSgxMRbQlPHDz4WgON65VPHDxpgaitgBLGJrf7kqdM2E5oEbj2pr+2lHTGx3EGwp8Ctk+RA9pzdICSl/h7XyhuOH9wnqHcFARN/HVUrN10/3GXmp6N6xUv7YQgC6kb1yroJcNaoQbAnmzNoBJlGZxiGYP1oXFu74Q7CX0DYMMeM3XHde8X1g4cAXRvXKl52AFw/PB7XvFIOwcpgfwtQzxUm1oejzdWRMzwqEU+/AfCsHVvrceH0VRB9ZerJ+j17Yv0UFaZ9gCwo642ounosvZkUpneZ6PdxrdzJITAlGYYtYmwB/D0YNhP9ajAyr0c1T6b5jCjuIOwwYY9ARWi9xoSYQG8xYSuuet1UNnJSkdqv+AdNDf6SGBMQDkB4CZp/ZKUCYzDVFVj0Ohh/QKMMhYIC3j+pez0RLiN26RzMyXIS5byOBGe4f4NAnxPTTbmvwfeZ+FZcrTyUnp3dXSLp+UFLmuz6QWb8gRU/bAK4o0GsiD95Uq30TGNJGHjQj2rlxizrBEFuDrIhCBCOE9PWTCpmaRV/PirGzvTPRFVflKFLS+EOwr4I4/ybIcGWLJkLe3KpMWOUBFR3mfieYYbmtsyMDJOIYFw47Wcpfk7ZXIA8NMMozW0QSWKPldbtk40X9sRYhkmT1RE5IXCRibajajmR76VP5jwU4bU4nGnQxUW4unNYZAZG8g6kU5XI+1k/Fj/ciaovaNqykmYDXAyWt1lCtaWPfkb3U5nJykbuqyL7NXAedfnXxv+iSQ7/A1PK6CutFAmLAAAAAElFTkSuQmCC"
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
              alt=""
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
              alt=""
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
  margin: 70px auto 0;
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
