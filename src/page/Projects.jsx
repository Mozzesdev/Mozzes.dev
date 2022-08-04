import styled from "styled-components";
import { FormattedMessage } from "react-intl";
import { imgInfo, settingsSlider } from "../utils";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardHover from "../components/CardHover";
import { useState } from "react";
import ModalProject from "../components/ModalProject";
import { AnimatePresence } from "framer-motion";

const Projects = () => {
  const [open, setOpen] = useState({
    open: false,
    item: {},
  });

  const modalToggler = (item = {}) => {
    if (open.open) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
    setOpen({
      open: !open.open,
      item: item,
    });
  };

  return (
    <>
      <AnimatePresence 
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {open.open && <ModalProject toggler={modalToggler} item={open.item} />}
      </AnimatePresence>
      <ContainerProjects id="projects">
        <h2 className="title-color ">
          <FormattedMessage id="projects.title" defaultMessage="Projects" />
          <div className="title-line" />
        </h2>
        <p className="tex-color__primary">
          <FormattedMessage
            id="projects.subtitle"
            defaultMessage="Showcasing some of my best work"
          />
        </p>
        <Slider {...settingsSlider}>
          {imgInfo.map((item) => (
            <Card key={item.id}>
              <div style={{ margin: "0 10px", padding: "20px 5px" }}>
                <div className="card-wrapper">
                  <img src={item.img} alt="portfolio-img" />
                  <CardHover item={item} toggler={modalToggler} />
                </div>
              </div>
            </Card>
          ))}
        </Slider>
      </ContainerProjects>
    </>
  );
};

export default Projects;

const ContainerProjects = styled.div`
  margin: 30px auto;
  padding: 20px 40px 40px;
  max-width: 1600px;
  h2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 23px;
    text-align: center;
  }
  p {
    text-align: center;
    font-size: 17px;
  }
  @media (max-width: 582px) {
    padding: 20px 20px 40px;
  }
`;

const Card = styled.div`
  display: flex !important;
  justify-content: center;
  margin-top: 30px;
  .card-wrapper {
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    position: relative;
    border-radius: 5px;
    transition: 0.5s;
    :hover {
      transform: scale(1.05);
    }
    img {
      width: 100%;
      border-radius: 5px;
      height: 217px;
      object-fit: cover;
    }
  }
`;

export const HoverCard = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  border-radius: 5px;
  bottom: 0;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translateY(100%);
  background-color: #0000005c;
  transition: 0.6s ease-in-out;
  opacity: 0;
  h4 {
    color: ${({ theme }) => theme.modeSwitch};
    font-size: 20px;
  }
  p {
    color: ${({ theme }) => theme.modeSwitch};
    font-size: 15px;
  }
  ${Card}:hover & {
    transform: translateY(0%);
    opacity: 1;
  }
`;
