import styled from "styled-components";
import { FormattedMessage } from "react-intl";
import { motion } from "framer-motion";

//Icons Gray
import htmlIcon from "../icons/html.svg";
import docIcon from "../icons/doc.svg";
import cssIcon from "../icons/css.svg";
import jsIcon from "../icons/js.svg";
import reactIcon from "../icons/react.svg";
import firebaseIcon from "../icons/firebase.svg";
import bootstrapIcon from "../icons/bootstrap.svg";
import sassIcon from "../icons/sass.svg";
import phpIcon from "../icons/php.svg";
import gitIcon from "../icons/git.svg";
//End Icons Gray

//Icons Color
import htmlIconColor from "../icons/html.color.svg";
import cssIconColor from "../icons/css.color.svg";
import jsIconColor from "../icons/js.color.svg";
import reactIconColor from "../icons/react.color.svg";
import firebaseIconColor from "../icons/firebase.color.svg";
import bootstrapIconColor from "../icons/bootstrap.color.svg";
import sassIconColor from "../icons/sass.color.svg";
import phpIconColor from "../icons/php.color.svg";
import gitIconColor from "../icons/git.color.svg";
//End Icons Color

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useState } from "react";
import ReactTooltip from "react-tooltip";
// ..
AOS.init();

const About = ({ theme }) => {
  const [hoverIcon, setHoverIcon] = useState("");
  return (
    <>
      <AboutH2 id="about">
        <h2>
          <FormattedMessage id="app.about-me-title" defaultMessage="Sobre Mi" />
          <div className="title-line" />
        </h2>
        <AboutContainer>
          <div className="container-about__details">
            <h3 className="subtitle-about">Who I am?</h3>
            <p className="p-subtitle">
              I am Moises Zambrano, a person passionate about technology <br />{" "}
              and Web development.
            </p>
            <p className="p-subtitle-2">
              I am a systems engineering student, I started building web pages
              since the end of 2021, compiling and learning the latest trends
              and technologies that support this branch, I am focused on turning
              ideas into fully functional projects
            </p>
            <a href="/cv" target="_blank">
              <button className="cv-download">
                <img src={docIcon} alt="" /> Download CV
              </button>
            </a>
          </div>
          <div>
            <h3 className="subtitle2-about">My Skills</h3>
            <div className="icons-container__about">
              <div>
                <motion.img
                  onClick={() =>
                    window.open(
                      "https://developer.mozilla.org/es/docs/Web/HTML",
                      "_blank"
                    )
                  }
                  data-tip
                  data-for="hover-icons"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 1.3 }}
                  onMouseLeave={() => setHoverIcon("")}
                  onMouseEnter={() => setHoverIcon("HTML")}
                  src={hoverIcon === "HTML" ? htmlIconColor : htmlIcon}
                  alt=""
                />
              </div>
              <div>
                <motion.img
                  onClick={() =>
                    window.open(
                      "https://developer.mozilla.org/es/docs/Web/CSS",
                      "_blank"
                    )
                  }
                  data-tip
                  data-for="hover-icons"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 1.3 }}
                  onMouseLeave={() => setHoverIcon("")}
                  onMouseEnter={() => setHoverIcon("CSS")}
                  src={hoverIcon === "CSS" ? cssIconColor : cssIcon}
                  alt=""
                />
              </div>
              <div>
                <motion.img
                  onClick={() =>
                    window.open(
                      "https://developer.mozilla.org/es/docs/Web/JavaScript",
                      "_blank"
                    )
                  }
                  data-tip
                  data-for="hover-icons"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 1.3 }}
                  onMouseLeave={() => setHoverIcon("")}
                  onMouseEnter={() => setHoverIcon("JavaScript")}
                  src={hoverIcon === "JavaScript" ? jsIconColor : jsIcon}
                  alt=""
                />
              </div>
              <div>
                <motion.img
                  onClick={() => window.open("https://reactjs.org/", "_blank")}
                  data-tip
                  data-for="hover-icons"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 1.3 }}
                  onMouseLeave={() => setHoverIcon("")}
                  onMouseEnter={() => setHoverIcon("ReactJS")}
                  src={hoverIcon === "ReactJS" ? reactIconColor : reactIcon}
                  alt=""
                />
              </div>
              <div>
                <motion.img
                  onClick={() =>
                    window.open("https://sass-lang.com/", "_blank")
                  }
                  data-tip
                  data-for="hover-icons"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 1.3 }}
                  onMouseLeave={() => setHoverIcon("")}
                  onMouseEnter={() => setHoverIcon("Sass")}
                  src={hoverIcon === "Sass" ? sassIconColor : sassIcon}
                  alt=""
                />
              </div>
              <div>
                <motion.img
                  onClick={() =>
                    window.open("https://firebase.google.com/", "_blank")
                  }
                  data-tip
                  data-for="hover-icons"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 1.3 }}
                  onMouseLeave={() => setHoverIcon("")}
                  onMouseEnter={() => setHoverIcon("Firebase")}
                  src={
                    hoverIcon === "Firebase" ? firebaseIconColor : firebaseIcon
                  }
                  alt=""
                />
              </div>
              <div>
                <motion.img
                  onClick={() =>
                    window.open("https://getbootstrap.com/", "_blank")
                  }
                  data-tip
                  data-for="hover-icons"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 1.3 }}
                  onMouseLeave={() => setHoverIcon("")}
                  onMouseEnter={() => setHoverIcon("Bootstrap")}
                  src={
                    hoverIcon === "Bootstrap"
                      ? bootstrapIconColor
                      : bootstrapIcon
                  }
                  alt=""
                />
              </div>
              <div>
                <motion.img
                  onClick={() => window.open("https://www.php.net/", "_blank")}
                  data-tip
                  data-for="hover-icons"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 1.3 }}
                  onMouseLeave={() => setHoverIcon("")}
                  onMouseEnter={() => setHoverIcon("PHP")}
                  src={hoverIcon === "PHP" ? phpIconColor : phpIcon}
                  alt=""
                />
              </div>
              <div>
                <motion.img
                  onClick={() => window.open("https://git-scm.com/", "_blank")}
                  data-tip
                  data-for="hover-icons"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 1.3 }}
                  onMouseLeave={() => setHoverIcon("")}
                  onMouseEnter={() => setHoverIcon("Git")}
                  src={hoverIcon === "Git" ? gitIconColor : gitIcon}
                  alt=""
                />
              </div>
            </div>
          </div>
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
  width: 86%;
  margin: 70px auto 0;
  h2 {
    font-size: 26px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const AboutContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 50px;
  margin-top: 40px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
  .container-about__details {
    display: flex;
    flex-direction: column;
    position: relative;

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
      color: #acacac;
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
    color: #acacac;
  }
  .subtitle2-about {
    text-align: left;
    color: #acacac;
    margin-left: 20px;
    margin-bottom: 20px;
    @media (max-width: 960px) {
      margin-top: 20px;
    }
  }
  .icons-container__about {
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    @media (max-width: 960px) {
      grid-template-columns: repeat(4, 1fr);
    }
    @media (max-width: 560px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 280px) {
      grid-template-columns: repeat(2, 1fr);
    }

    img {
      width: 60px;
      cursor: pointer;
      @media (max-width: 960px) {
        width: 50px;
      }
      @media (max-width: 375px) {
        width: 40px;
      }
    }
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #2d2d2d;
      margin: 10px 15px;
      padding: 25px 30px;
      @media (max-width: 960px) {
        margin: 10px 15px;
        padding: 30px 20px;
      }
      @media (max-width: 560px) {
        margin: 10px 10px;
        padding: 20px;
      }
      @media (max-width: 375px) {
        margin: 10px 10px;
        padding: 10px;
      }
    }
  }
`;
