import esIcon from "../icons/es.svg";
import usIcon from "../icons/us.svg";
import { motion } from "framer-motion";
import { FormattedMessage } from "react-intl";
import { useLang } from "../context/langContext";
import styled from "styled-components";

const variants = {
  open: {
    opacity: 1,
    maxHeight: "120px",
    overflow: "hidden",
  },
  close: {
    opacity: 0,
    pointerEvents: "none",
    maxHeight: "0px",
    overflow: "hidden",
  },
};

const Language = ({ language, setLanguage }) => {
  const { changeLang } = useLang();

  return (
    <Container
      animate={language ? "open" : "close"}
      transition={{ duration: 0.3 }}
      variants={variants}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div
        className="wrapper-responsive"
        onClick={() => {
          changeLang("es-ES");
          setLanguage(!language);
        }}
      >
        <img src={esIcon} alt="es-icon" />
        <p>
          <FormattedMessage
            id="app.lang-select-spanish"
            defaultMessage="Español"
          />
        </p>
      </div>
      <div
        className="wrapper-responsive"
        onClick={() => {
          changeLang("en-US");
          setLanguage(!language);
        }}
      >
        <img src={usIcon} alt="us-icon" />
        <p>
          <FormattedMessage
            id="app.lang-select-english"
            defaultMessage="Ingles"
          />
        </p>
      </div>
    </Container>
  );
};

export default Language;

const Container = styled(motion.div)`
  background-color: #363636;
  width: 90%;
  border-radius: 5px;
  margin-top: 10px;
  .wrapper-responsive {
    display: flex;
    align-items: center;
    cursor: pointer;
  padding:7px 10px;
    gap: 10px;
    :hover{
      background-color: #4f4f4f;
    }
    img {
      width: 35px;
      height: 35px;
      border-radius: 50%;
    }
    p {
      color: ${({ theme }) => theme.navText};
    }
  }
`;
