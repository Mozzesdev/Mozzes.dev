import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";

const Contact = () => {
  const [hoverCard, setHoverCard] = useState("");
  return (
    <ContainerSectionContact id="contact">
      <h2 className="title-color">
        <FormattedMessage id="contact.title" defaultMessage="Contact" />
      </h2>
      <div className="title-line" />
      <p className="tex-color__secundary">
        <FormattedMessage
          id="contact.subtitle"
          defaultMessage="I am always available for any job, write me whenever you want."
        />
      </p>
      <ContainerCards>
        <a href="mailto:moiseszambrano488@gmail.com" target="_blank">
          <div
            onMouseLeave={() => setHoverCard("")}
            onMouseEnter={() => setHoverCard("mail")}
            className="card-contact"
          >
            <motion.svg
              initial={{ width: 24, height: 24 }}
              transition={{ duration: 0.4 }}
              animate={
                hoverCard === "mail" ? { fill: "#efd81d" } : { fill: "#747474" }
              }
            >
              <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"></path>
            </motion.svg>
            <p>E-mail</p>
          </div>
        </a>
        <a href="https://www.instagram.com/mozzes.dev/" target="_blank">
          <div
            onMouseLeave={() => setHoverCard("")}
            onMouseEnter={() => setHoverCard("inst")}
            className="card-contact"
          >
            <motion.svg
              initial={{ width: 24, height: 24 }}
              transition={{ duration: 0.4 }}
              animate={
                hoverCard === "inst" ? { fill: "#efd81d" } : { fill: "#747474" }
              }
            >
              <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
              <circle cx="16.806" cy="7.207" r="1.078"></circle>
              <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path>
            </motion.svg>
            <p>Instagram</p>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/mois%C3%A9s-omar-zambrano-rodr%C3%ADguez-6a1310174/"
          target="_blank"
        >
          <div
            onMouseLeave={() => setHoverCard("")}
            onMouseEnter={() => setHoverCard("link")}
            className="card-contact"
          >
            <motion.svg
              initial={{ width: 24, height: 24 }}
              transition={{ duration: 0.4 }}
              animate={
                hoverCard === "link" ? { fill: "#efd81d" } : { fill: "#747474" }
              }
            >
              <circle cx="4.983" cy="5.009" r="2.188"></circle>
              <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path>
            </motion.svg>
            <p>Linkedin</p>
          </div>
        </a>
      </ContainerCards>
    </ContainerSectionContact>
  );
};

export default Contact;

const ContainerSectionContact = styled.div`
  width: 100%;
  margin: 30px auto 0;
  padding: 40px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    margin-top: 20px;
    text-align: center;
  }
`;

const ContainerCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  width: 80%;
  max-width: 1300px;
  justify-content: center;
  margin-top: 20px;
  @media (max-width: 250px) {
    grid-template-columns: repeat(1, 1fr);
  }
  a {
    width: 255px;
    height: 130px;
    margin: 10px auto;
    @media (max-width: 815px) {
      width: 185px;
      height: 120px;
    }
    @media (max-width: 610px) {
      width: 140px;
      height: 100px;
    }
    @media (max-width: 467px) {
      width: 100px;
      height: 80px;
    }
    @media (max-width: 350px) {
      width: 90px;
      height: 70px;
    }
    @media (max-width: 274px) {
      width: 75px;
      height: 60px;
    }
    @media (max-width: 250px) {
      width: 140px;
      height: 75px;
    }
  }
  .card-contact {
    cursor: pointer;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #2d2d2d;
    svg {
      transform: scale(1.8);
    }
    @media (max-width: 815px) {
      svg {
        transform: scale(1.6);
      }
    }
    @media (max-width: 610px) {
      svg {
        transform: scale(1.3);
      }
    }
    @media (max-width: 467px) {
      svg {
        transform: scale(1.2);
      }
    }
    @media (max-width: 350px) {
      svg {
        transform: scale(1);
      }
    }
    @media (max-width: 274px) {
      svg {
        transform: scale(0.9);
      }
    }
    @media (max-width: 250px) {
      svg {
        transform: scale(1.3);
      }
    }
    p {
      margin-top: 13px;
      text-transform: uppercase;
      font-size: 13px;
      font-weight: 500;
      letter-spacing: 1px;
      color: #cacaca;
      @media (max-width: 467px) {
        font-size: 12px;
        margin-top: 7px;
      }
      @media (max-width: 274px) {
        font-size: 9px;
        margin-top: 5px;
      }
      @media (max-width: 250px) {
        font-size: 10px;
        margin-top: 7px;
      }
    }
  }
`;
