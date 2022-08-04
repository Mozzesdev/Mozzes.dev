import { motion } from "framer-motion";

const Figma = (props) => (
  <motion.svg viewBox="0 0 38 57" {...props}>
    <path
      fill={props.hoverIcon === "Figma" ? "#1abcfe" : "#7d7d7d"}
      d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z"
    />
    <path
      fill={props.hoverIcon === "Figma" ? "#0acf83" : "#898989"}
      d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z"
    />
    <path
      fill={props.hoverIcon === "Figma" ? "#ff7262" : "#989898"}
      d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z"
    />
    <path
      fill={props.hoverIcon === "Figma" ? "#f24e1e" : "#5e5e5e"}
      d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z"
    />
    <path
      fill={props.hoverIcon === "Figma" ? "#a259ff" : "#6c6c6c"}
      d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z"
    />
  </motion.svg>
);

export default Figma;
