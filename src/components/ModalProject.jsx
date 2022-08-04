import styled from "styled-components";
import { motion } from "framer-motion";
import IconWrapper from "./IconWrapper";

const flip = {
  hidden: {
    transform: "scale(0) rotateX(-180deg)",
    opacity: 0,
    transition: {
      delay: 0.3,
    },
  },
  visible: {
    transform: " scale(1) rotateX(0deg)",
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  exit: {
    transform: "scale(0) rotateX(180deg)",
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
};

const ModalProject = ({ toggler, item }) => {
  const { img, title, details, url, github } = item;

  return (
    <Overlay onClick={toggler}>
      <Container
        variants={flip}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
      >
        <Card>
          <Image>
            <img src={img} alt="portfolio-img" />
          </Image>
        </Card>
        <Card>
          <div className="wrapper-detail">
            <h2>{title}</h2>
            <Description>{details.description}</Description>
            <WrapperLibs>
              <h3>Made with:</h3>
              <div className="container-content">
                {details.lib.map((item, i) => (
                  <Libs key={i}>
                    <IconWrapper>{item.icon}</IconWrapper>
                    <p>
                      <span className={`${item.class}`}>{item.name}</span>
                    </p>
                  </Libs>
                ))}
              </div>
              <Buttons>
                <a href={url} target={"_blank"}>
                  <button>Go to page</button>
                </a>
                <a href={github} target={"_blank"}>
                  <button>Repositorie</button>
                </a>
              </Buttons>
            </WrapperLibs>
          </div>
        </Card>
      </Container>
    </Overlay>
  );
};

export default ModalProject;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  max-height: 100vh;
  background-color: rgba(44, 44, 44, 0.267);
  display: grid;
  place-items: center;
  z-index: 100;
`;

const Card = styled.div`
  width: 100%;
  overflow: hidden;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  :last-child {
    margin-top: 20px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
  }
  .wrapper-detail {
    display: flex;
    flex-direction: column;
    background-color: #1a1a1a;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 5px 10px 10px;
    max-height: 330px;
    overflow-y: auto;
    h2 {
      text-align: center;
      font-size: 20px;
      margin-bottom: 5px;
      color: ${({ theme }) => theme.modeSwitch};
    }
  }
`;

const Container = styled(motion.div)`
  max-width: 70vw;
  justify-content: center;
  width: 100%;
`;

const Image = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    max-height: 310px;
    height: auto;
    object-fit: cover;
    object-position: top;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
`;

const Description = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.gray};
`;

const WrapperLibs = styled.div`
  margin-top: 20px;
  h3 {
    text-align: center;
    color: ${({ theme }) => theme.modeSwitch};
  }
  .container-content {
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
    justify-content: center;
    gap: 10px;
    cursor: pointer;
  }
`;

const Libs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  border-radius: 4px;
  min-width: 102px;
  transition: 0.3s;
  :hover {
    background-color: #2d2d2d;
  }
  span {
    cursor: pointer;
    transition: 0.3s;
    width: 100%;
  }
  svg {
    width: 40px;
    height: 40px;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin: 30px 0;
  button {
    width: 100px;
    cursor: pointer;
    border: none;
    padding: 5px 7px;
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: 3px;
    transition: 0.3s;
    :hover {
      opacity: 0.9;
    }
  }
`;
