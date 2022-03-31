import esIcon from "../icons/es.svg";
import usIcon from "../icons/us.svg";
import { motion } from "framer-motion";
import { FormattedMessage } from "react-intl";
import { useLang } from "../context/langContext";

const variants = {
  open: {
    opacity: 1,
    maxHeight: '90px',
    overflow: "hidden",
  },
  close: {
    pointerEvents: "none",
    maxHeight: '0%',
    overflow: "hidden",
  },
};

const Language = ({ language, setLanguage }) => {

  const { changeLang } = useLang();

  return (
    <motion.div
      animate={language ? "open" : "close"}
      transition={{ duration: 0.3 }}
      variants={variants}
      className="container-div"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div className="divContainer" onClick={()=> {
        changeLang('es-ES')
        setLanguage(!language)
      }}>
        <p>
          <FormattedMessage
            id="app.lang-select-spanish"
            defaultMessage="Español"
          />
        </p>
        <img src={esIcon} alt="es-icon" />
      </div>
      <div className="divContainer" onClick={()=> {
        changeLang('en-US')
        setLanguage(!language)
      }}>
        <p>
          <FormattedMessage
            id="app.lang-select-english"
            defaultMessage="Ingles"
          />
        </p>
        <img src={usIcon} alt="us-icon" />
      </div>
    </motion.div>
  );
};

export default Language;
