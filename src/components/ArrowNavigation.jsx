import styled from "styled-components";
import Arrow from "./svg/Arrow";

const ArrowNavigation = ({onClick, styles}) => {
 return (
   <ArrowSlider onClick={onClick} position={styles.position}>
     <Arrow fill={"#000"} width={24} style={styles.transform} />
   </ArrowSlider>
 );
};

export default ArrowNavigation;


const ArrowSlider = styled.div`
  background-color: #fff;
  position: absolute;
  top: 50%;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  left: ${({ position }) => position.left};
  right: ${({ position }) => position.right};
  z-index: 10;
  cursor: pointer;
`;
