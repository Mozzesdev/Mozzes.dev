import { motion } from "framer-motion";

const Html = (props) => (
  <motion.svg  aria-hidden="true" {...props}>
    {props.hoverIcon === "HTML" ? (
      <>
        <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z" />
        <path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z" />
        <path
          fill="#FFF"
          d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"
        />
        <path
          fill="#EEE"
          d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"
        />
      </>
    ) : (
      <path
        fill="#969696"
        d="M4.136 3.012h15.729l-1.431 16.15-6.451 1.826-6.414-1.826-1.433-16.15zm5.266 7.302-.173-2.035 7.533.002.173-1.963-9.87-.002.522 5.998h6.835l-.243 2.566-2.179.602-2.214-.605-.141-1.58H7.691l.247 3.123L12 17.506l4.028-1.08.558-6.111H9.402v-.001z"
      />
    )}
  </motion.svg>
);

export default Html;
