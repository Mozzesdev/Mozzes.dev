import styled from "styled-components"

const IconWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default IconWrapper;

const Wrapper = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
`