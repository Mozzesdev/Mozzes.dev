import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";

import imgPort from "../img/Portf.webp";
import cafeBlog from "../img/Cafeblog.webp";
import festival from "../img/Festival.webp";
import giffy from "../img/giffy.png";
import calcu from '../img/calcu.png'
import weather from '../img/weather.png'

const variants = {
  open: {
    opacity: 1,
    maxHeight: "250px",
    overflow: "hidden",
  },
  close: {
    pointerEvents: "none",
    maxHeight: "0px",
    opacity: 0,
    overflow: "hidden",
  },
};

const Projects = ({ theme }) => {
  const [hoverCard, setHoverCard] = useState("");

  return (
    <>
      <ContainerProjects id="projects">
        <h2>
          <FormattedMessage id="projects.title" defaultMessage="Projects" />
          <div className="title-line" />
        </h2>
        <p>
          <FormattedMessage
            id="projects.subtitle"
            defaultMessage="Showcasing some of my best work"
          />
        </p>
        <ContainerCards>
          <div
            className="container-card"
            onMouseLeave={() => setHoverCard("")}
            onMouseEnter={() => setHoverCard("1")}
          >
            <motion.img
              animate={hoverCard === "1" ? { scale: 1.05 } : { scale: 1 }}
              transition={{ duration: 0.6 }}
              src={imgPort}
              alt="portfolio-img"
            />
            <motion.div
              animate={hoverCard === "1" ? "open" : "close"}
              transition={{ duration: 0.6 }}
              variants={variants}
              className="hover-card"
            >
              <h4 className="subtitle-projects__card">Mozzes.dev</h4>
              <p>My Portfolio</p>
              <div className="container-button__card">
                <button>
                  <a href="https://mozzes-dev.netlify.app/" target="_blank">
                    <FormattedMessage
                      id="projects.viewpage"
                      defaultMessage="View page"
                    />
                  </a>
                </button>
                <button>
                  <a
                    href="https://github.com/WinFlix/Mozzes.dev"
                    target="_blank"
                  >
                    <FormattedMessage
                      id="projects.repositorie"
                      defaultMessage="Repositorie"
                    />
                  </a>
                </button>
              </div>
            </motion.div>
          </div>
          <div
            className="container-card"
            onMouseLeave={() => setHoverCard("")}
            onMouseEnter={() => setHoverCard("2")}
          >
            <motion.img
              animate={hoverCard === "2" ? { scale: 1.05 } : { scale: 1 }}
              transition={{ duration: 0.6 }}
              src={calcu}
              alt="random-img"
            />
            <motion.div
              animate={hoverCard === "2" ? "open" : "close"}
              transition={{ duration: 0.6 }}
              variants={variants}
              className="hover-card"
            >
              <h4 className="subtitle-projects__card">Calculator App - Practice</h4>
              <p>A simple calculator with React</p>
              <div className="container-button__card">
                <button>
                  <a
                    href="https://calculator-app-green.vercel.app"
                    target="_blank"
                  >
                    <FormattedMessage
                      id="projects.viewpage"
                      defaultMessage="View page"
                    />
                  </a>
                </button>
                <button>
                <a href="https://github.com/WinFlix/Calculator-App" target="_blank">
                    <FormattedMessage
                      id="projects.repositorie"
                      defaultMessage="Repositorie"
                    />
                  </a>
                </button>
              </div>
            </motion.div>
          </div>
          <div
            className="container-card"
            onMouseLeave={() => setHoverCard("")}
            onMouseEnter={() => setHoverCard("3")}
          >
            <motion.img
              animate={hoverCard === "3" ? { scale: 1.05 } : { scale: 1 }}
              transition={{ duration: 0.6 }}
              src={weather}
              alt="random-img"
            />
            <motion.div
              animate={hoverCard === "3" ? "open" : "close"}
              transition={{ duration: 0.6 }}
              variants={variants}
              className="hover-card"
            >
              <h4 className="subtitle-projects__card">
                Weather App - Practice
              </h4>
              <p>Weather app with API of WeatherMap</p>
              <div className="container-button__card">
                <button>
                  <a
                    href="https://weather-web-topaz.vercel.app"
                    target="_blank"
                  >
                    <FormattedMessage
                      id="projects.viewpage"
                      defaultMessage="View page"
                    />
                  </a>
                </button>
                <button>
                  <a
                    href="https://github.com/WinFlix/Weather-App"
                    target="_blank"
                  >
                    <FormattedMessage
                      id="projects.repositorie"
                      defaultMessage="Repositorie"
                    />
                  </a>
                </button>
              </div>
            </motion.div>
          </div>
          <div
            className="container-card"
            onMouseLeave={() => setHoverCard("")}
            onMouseEnter={() => setHoverCard("4")}
          >
            <motion.img
              animate={hoverCard === "4" ? { scale: 1.05 } : { scale: 1 }}
              transition={{ duration: 0.6 }}
              src={giffy}
              alt="random-img"
            />
            <motion.div
              animate={hoverCard === "4" ? "open" : "close"}
              transition={{ duration: 0.6 }}
              variants={variants}
              className="hover-card"
            >
              <h4 className="subtitle-projects__card">
                Giffy App - App for Gifs
              </h4>
              <p>A project with API of GIPHY</p>
              <div className="container-button__card">
                <button>
                  <a href="https://giffy-app-ten.vercel.app" target="_blank">
                    <FormattedMessage
                      id="projects.viewpage"
                      defaultMessage="View page"
                    />
                  </a>
                </button>
                <button>
                  <a
                    href="https://github.com/WinFlix/Giffy-App"
                    target="_blank"
                  >
                    <FormattedMessage
                      id="projects.repositorie"
                      defaultMessage="Repositorie"
                    />
                  </a>
                </button>
              </div>
            </motion.div>
          </div>
        </ContainerCards>
      </ContainerProjects>
    </>
  );
};

export default Projects;

const ContainerProjects = styled.div`
  margin: 30px auto 0;
  padding-top: 40px;
  h2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 23px;
    text-align: center;
  }
  p {
    text-align: center;
    color: #acacac;
    font-size: 17px;
  }
`;

const ContainerCards = styled.div`
  width: 95%;
  margin: 20px auto;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  .container-card {
    margin: 0 auto;
    position: relative;
    border-radius: 2px;
    margin: 10px 13px;
    width: 440px;
    height: 220px;
    box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    @media (max-width: 1024px) {
      width: 360px;
      height: 170px;
    }
    @media (max-width: 803px) {
      width: 320px;
      height: 160px;
    }
    @media (max-width: 716px) {
      width: 260px;
      height: 140px;
    }
    @media (max-width: 580px) {
      width: 360px;
      height: 180px;
    }
    @media (max-width: 340px) {
      width: 240px;
      height: 130px;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    p {
      color: #e1e1e1;
    }
    .hover-card {
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: #0000007a;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      padding-bottom: 20px;
      h4,
      p {
        text-align: center;
        @media (max-width: 340px) {
          font-size: 13px;
        }
      }
      .container-button__card {
        display: flex;
        margin-top: 20px;
        @media (max-width: 340px) {
          margin-top: 10px;
        }
        button {
          margin: 0 25px;
          cursor: pointer;
          border: none;
          padding: 2px 10px;
          background-color: #61dafb;
          text-transform: uppercase;
          font-size: 14px;
          color: #424242;
          font-weight: 500;
          a {
            color: #424242;
          }
          @media (max-width: 340px) {
            font-size: 12px;
            padding: 4px 8px;
            line-height: 1;
            margin: 0 18px;
          }
        }
      }
    }
  }
`;
