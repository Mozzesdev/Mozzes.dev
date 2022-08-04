import styled from "styled-components";
import { FormattedMessage } from "react-intl";

//Icons Gray
import docIcon from "../icons/doc.svg";

import { useState } from "react";
import ReactTooltip from "react-tooltip";
import Styled from "../components/svg/skills/Styled";
import Html from "../components/svg/skills/Html";
import Css from "../components/svg/skills/Css";
import Js from "../components/svg/skills/Js";
import React from "../components/svg/skills/React";
import Firebase from "../components/svg/skills/Firebase";
import Three from "../components/svg/skills/Three";
import Next from "../components/svg/skills/Next";
import Figma from "../components/svg/skills/Figma";
import Cube3d from "../components/Cube";

const About = () => {
  const [hoverIcon, setHoverIcon] = useState("");
  return (
    <>
      <AboutH2 id="about">
        <h2 className="title-color">
          <FormattedMessage id="app.about-me-title" defaultMessage="Sobre Mi" />
          <div className="title-line" />
        </h2>
        <AboutContainer>
          <div className="container-about__details ">
            <div>
              <h3 className="subtitle-about tex-color__secundary">
                <FormattedMessage
                  id="about.subtitle"
                  defaultMessage="Who I am?"
                />
              </h3>
              <p className="p-subtitle tex-color__primary">
                <FormattedMessage
                  id="about.description"
                  defaultMessage="I am Moises Zambrano, a person passionate about technology and Web development."
                />
              </p>
              <p className="p-subtitle-2 tex-color__secundary">
                <FormattedMessage
                  id="about.description2"
                  defaultMessage="I am a systems engineering student, I started building web pages since the end of 2021, compiling and learning the latest trends and technologies that support this branch, I am focused on turning ideas into fully functional projects"
                />
              </p>
            </div>
            <ContainerCube>
              <a href="/cv" target="_blank">
                <button className="cv-download">
                  <img src={docIcon} alt="pdf-icon" />{" "}
                  <FormattedMessage
                    id="about.download"
                    defaultMessage="Download"
                  />{" "}
                  CV
                </button>
              </a>
              <Cube3d
                styles={{
                  dimension: "40px",
                  sidesZ: "20px",
                  shadowZ: "-60px",
                  color: "#61dafb",
                  bottom: "90px",
                  right: "180px",
                  delay: "1s",
                }}
              />
              <Cube3d
                styles={{
                  dimension: "20px",
                  sidesZ: "10px",
                  shadowZ: "-60px",
                  color: "#61fba9",
                  bottom: "170px",
                  right: "130px",
                  delay: "0.5s",
                }}
              />
              <Cube3d
                styles={{
                  dimension: "80px",
                  sidesZ: "40px",
                  shadowZ: "-120px",
                  color: "#fde52b",
                  bottom: "30px",
                  right: "30px",
                  delay: "0s",
                }}
              />
            </ContainerCube>
          </div>
          <ContainerSkills>
            <h3 className="subtitle2-about tex-color__secundary">
              <FormattedMessage
                id="about.subttile2"
                defaultMessage="My Skills"
              />
            </h3>
            <div className="icons-container__about">
              <div>
                <Html
                  data-tip
                  data-for="hover-icons"
                  whileHover={{ scale: 1.1 }}
                  onClick={() =>
                    window.open(
                      "https://developer.mozilla.org/es/docs/Web/HTML",
                      "_blank"
                    )
                  }
                  onMouseLeave={() => setHoverIcon("")}
                  onMouseEnter={() => setHoverIcon("HTML")}
                  viewBox={hoverIcon === "HTML" ? "18 2 14 45" : "7 0 10 24"}
                  hoverIcon={hoverIcon}
                />
              </div>
              <div>
                <Css
                  data-tip
                  data-for="hover-icons"
                  whileHover={{ scale: 1.1 }}
                  onClick={() =>
                    window.open(
                      "https://developer.mozilla.org/es/docs/Web/CSS",
                      "_blank"
                    )
                  }
                  onMouseLeave={() => setHoverIcon("")}
                  onMouseEnter={() => setHoverIcon("CSS")}
                  viewBox={hoverIcon === "CSS" ? "18 2 14 45" : "7 0 10 24"}
                  hoverIcon={hoverIcon}
                />
              </div>
              <div>
                <Js
                  data-tip
                  data-for="hover-icons"
                  whileHover={{ scale: 1.1 }}
                  onClick={() =>
                    window.open(
                      "https://developer.mozilla.org/es/docs/Web/JavaScript",
                      "_blank"
                    )
                  }
                  onMouseLeave={() => setHoverIcon("")}
                  onMouseEnter={() => setHoverIcon("JavaScript")}
                  viewBox={
                    hoverIcon === "JavaScript" ? "18 2 14 45" : "7 0 10 24"
                  }
                  hoverIcon={hoverIcon}
                />
              </div>
              <div>
                <React
                  data-tip
                  data-for="hover-icons"
                  whileHover={{ scale: 1.1 }}
                  onClick={() => window.open("https://reactjs.org/", "_blank")}
                  onMouseLeave={() => setHoverIcon("")}
                  onMouseEnter={() => setHoverIcon("ReactJS")}
                  viewBox={hoverIcon === "ReactJS" ? "5 0 15 24" : "7 0 10 23"}
                  fill={hoverIcon === "ReactJS" ? "#61dafb" : "#969696"}
                />
              </div>
              <div>
                <Styled
                  data-tip
                  data-for="hover-icons"
                  whileHover={{ scale: 1.1 }}
                  onClick={() =>
                    window.open("https://styled-components.com", "_blank")
                  }
                  onMouseLeave={() => setHoverIcon("")}
                  onMouseEnter={() => setHoverIcon("Styled")}
                  fill={"rgb(150, 150, 150)"}
                />
              </div>
              <div>
                <Firebase
                  data-tip
                  data-for="hover-icons"
                  whileHover={{ scale: 1.1 }}
                  onClick={() =>
                    window.open("https://firebase.google.com/", "_blank")
                  }
                  onMouseLeave={() => setHoverIcon("")}
                  onMouseEnter={() => setHoverIcon("Firebase")}
                  viewBox={
                    hoverIcon === "Firebase" ? "18 2 14 45" : "7 0 10 24"
                  }
                  hoverIcon={hoverIcon}
                />
              </div>
              <div>
                <Three
                  data-tip
                  data-for="hover-icons"
                  whileHover={{ scale: 1.08, x: 8, y: 8 }}
                  onClick={() => window.open("https://threejs.org", "_blank")}
                  onMouseLeave={() => setHoverIcon("")}
                  onMouseEnter={() => setHoverIcon("Three")}
                  stroke={hoverIcon === "Three" ? "#ffffff" : "#969696"}
                />
              </div>
              <div>
                <Next
                  data-tip
                  data-for="hover-icons"
                  whileHover={{ scale: 1.1, x: 4 }}
                  onClick={() => window.open("https://nextjs.org", "_blank")}
                  onMouseLeave={() => setHoverIcon("")}
                  onMouseEnter={() => setHoverIcon("NextJS")}
                  fill={hoverIcon === "NextJS" ? "#ffffff" : "#969696"}
                />
              </div>
              <div>
                <Figma
                  data-tip
                  data-for="hover-icons"
                  whileHover={{ scale: 1.1 }}
                  onClick={() => window.open("https://www.figma.com", "_blank")}
                  onMouseLeave={() => setHoverIcon("")}
                  onMouseEnter={() => setHoverIcon("Figma")}
                  hoverIcon={hoverIcon}
                />
              </div>
            </div>
          </ContainerSkills>
        </AboutContainer>
      </AboutH2>
      <ReactTooltip
        id="hover-icons"
        place="bottom"
        arrowColor="#e2e2e2"
        effect="solid"
        className="tooltip-icons"
      >
        {hoverIcon ? hoverIcon : ""}
      </ReactTooltip>
    </>
  );
};

export default About;

const AboutH2 = styled.div`
  width: 100%;
  padding: 40px 50px 70px;
  background-color: ${({ theme }) => theme.bodyLight};
  h2 {
    font-size: 26px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 582px) {
    padding: 40px 20px 70px;
  }
`;

const AboutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1300px;
  gap: 50px;
  margin: 40px auto 0;
  @media (max-width: 960px) {
    flex-direction: column;
    gap: 20px;
  }
  .container-about__details {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    max-width: 700px;
    @media (max-width: 950px) {
      max-width: 100%;
    }
    .p-subtitle {
      font-size: 23px;
      line-height: 1.3;
      font-weight: 600;
      @media (max-width: 582px) {
        font-size: 18px;
      }
    }
    .p-subtitle-2 {
      font-size: 17px;
      margin-top: 15px;
      line-height: 1.3;
      font-weight: 400;
      @media (max-width: 582px) {
        font-size: 14px;
      }
    }
  }
  .subtitle-about {
    text-align: left;
    padding: 0;
    margin-bottom: 20px;
    margin-left: 0;
  }
  .subtitle2-about {
    text-align: left;
    margin-left: 20px;
    margin-bottom: 20px;
    @media (max-width: 960px) {
      margin-top: 20px;
    }
  }
`;

const ContainerSkills = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width: 100%;
  @media (max-width: 960px) {
    max-width: 100%;
  }
  .icons-container__about {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    justify-content: center;
    width: 100%;
    gap: 20px;
    @media (max-width: 580px) {
      grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    }
    svg {
      width: 60px;
      height: 60px;
      cursor: pointer;
      @media (max-width: 960px) {
        width: 65px;
      }
      @media (max-width: 375px) {
        width: 50px;
      }
    }
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #2d2d2d;
      padding: 25px 0;
    }
  }
`;

const ContainerCube = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  perspective-origin: 50% 50vh;
  width: 100%;
  height: 100%;
  @media (max-width: 960px) {
    margin-top: 160px;
  }
  @media (max-width: 768px) {
    margin-top: 56px;
  }
  a {
    width: 159px;
    align-self: flex-end;
  }
`;
