import styled from "styled-components";
import { motion, useAnimationControls } from "framer-motion";

const Cube3d = ({ styles }) => {
  const cubeList = [4, 3, 2, 1];

  const controls = useAnimationControls();

  return (
    <Container
      styles={styles}
      animate={controls}
      onClick={() => {
        controls.start({
          scaleX: [1, 1.25, 0.75, 1.15, 0.95, 1.05, 1],
          scaleY: [1, 0.75, 1.25, 0.85, 1.05, 0.95, 1],
          transition: {
            duration: 1,
            ease: "linear",
            delay: 0,
          },
        });
      }}
    >
      <Cube styles={styles}>
        <Top styles={styles} />
        <motion.div>
          {cubeList.map((cube, index) => (
            <Spans key={cube} index={index + 1} styles={styles}>
              {/* <h2>1</h2>
              <h2>1</h2> */}
            </Spans>
          ))}
        </motion.div>
        <Bottom styles={styles} />
      </Cube>
    </Container>
  );
};

export default Cube3d;

const Container = styled(motion.div)`
  display: flex;
  position: absolute;
  bottom: ${({ styles }) => styles.bottom};
  right: ${({ styles }) => styles.right};
  align-items: center;
  justify-content: center;
  cursor: pointer;
  align-self: flex-end;
  @media (max-width: 768px) {
    bottom: ${({ styles }) => styles.bottom.slice(0, styles.bottom.indexOf("p")) / 2}px;
    right: ${({ styles }) => styles.right.slice(0, styles.right.indexOf("p")) / 2}px;
  }
`;

const Cube = styled.div`
  position: relative;
  pointer-events: none;
  width: ${({ styles }) => styles.dimension};
  height: ${({ styles }) => styles.dimension};
  transform-style: preserve-3d;
  z-index: 0;
  animation: levitate 6s linear infinite;
  animation-delay: ${({ styles }) => styles.delay};

  @media (max-width: 768px) {
    width: ${({ styles }) => styles.dimension.slice(0, 2) / 2}px;
    height: ${({ styles }) => styles.dimension.slice(0, 2) / 2}px;
  }

  @keyframes levitate {
    0% {
      transform: translateY(0) rotateX(-20deg) rotateY(0deg);
    }
    50% {
      transform: translateY(-15px) rotateX(-20deg) rotateY(180deg);
    }
    100% {
      transform: translateY(0) rotateX(-20deg) rotateY(360deg);
    }
  }

  div {
    position: absolute;
    top: -10px;
    left: 0;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
  }
`;

const Spans = styled.span`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    ${({ theme }) => theme.bodyDark},
    ${({ styles }) => styles.color}
  );
  transform-style: preserve-3d;
  animation: open 4s ease-in-out infinite;
  transform: rotateY(${({ index }) => 90 * index}deg)
    translateZ(${({ styles }) => styles.sidesZ});

  @media (max-width: 768px) {
    transform: rotateY(calc(90deg * ${({ index }) => index}))
      translateZ(${({ styles }) => styles.sidesZ.slice(0, 2) / 2}px);
  }

  /* h2 {
    position: absolute;
    font-size: 8em;
    color: #fff;
    transform: translateZ(70px);
    :nth-child(1) {
      transform: translateZ(0) translateY(20px);
      color: rgba(0, 0, 0, 0.1);
      filter: blur(8px);
    }
  } */
`;

const Top = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.bodyDark};
  transform: rotateX(90deg) translateZ(${({ styles }) => styles.sidesZ});
  @media (max-width: 768px) {
    transform: rotateX(90deg)
      translateZ(${({ styles }) => styles.sidesZ.slice(0, 2) / 2}px);
  }
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ styles }) => styles.color};
    transform: translateZ(${({ styles }) => styles.shadowZ});
    filter: blur(20px);
    box-shadow: 0 0 10px 0 ${({ styles }) => `${styles.color}4b`};

    @media (max-width: 768px) {
      transform: translateZ(
        ${({ styles }) => styles.shadowZ.slice(0, 4) / 2 - 10}px
      );
    }
  }
`;
const Bottom = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ styles }) => styles.color};
  transform: rotateX(90deg)
    translateZ(calc(${({ styles }) => styles.sidesZ} * -1));

  @media (max-width: 768px) {
    transform: rotateX(90deg)
      translateZ(calc(${({ styles }) => styles.sidesZ.slice(0, 2) / 2}px * -1));
  }
`;
