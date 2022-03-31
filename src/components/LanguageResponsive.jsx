import esIcon from "../icons/es.svg";
import usIcon from "../icons/us.svg";
import { motion } from "framer-motion";
import { FormattedMessage } from "react-intl";
import { useLang } from "../context/langContext";

const variants = {
  open: {
    opacity: 1,
    maxHeight: '120px',
    overflow: "hidden",
  },
  close: {
    opacity: 0,
    pointerEvents: "none",
    maxHeight: '0px',
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
      className="container-div__responsive"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div className="divContainer-responsive" onClick={()=> {
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
      <div className="divContainer-responsive" onClick={()=> {
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
