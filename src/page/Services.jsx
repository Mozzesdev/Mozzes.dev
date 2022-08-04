import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FormattedMessage } from "react-intl";

const Services = () => {
  const [hoverCard, setHoverCard] = useState("");

  return (
    <>
      <ContainerServices id="services">
        <h2 className="title-color">
          <FormattedMessage id="services.title" defaultMessage="Services" />
          <div className="title-line" />
        </h2>
        <p className="subtitle-services tex-color__primary">
          <FormattedMessage
            id="services.subtitle"
            defaultMessage="Services I offer to my clients"
          />
        </p>
        <ContainerAllServices>
          <div
            className="container-div__services"
            onMouseLeave={() => setHoverCard("")}
            onMouseEnter={() => setHoverCard("devices")}
          >
            <motion.svg
              initial={{ width: 24, height: 24 }}
              transition={{ duration: 0.4 }}
              animate={
                hoverCard === "devices"
                  ? { fill: "#efd81d" }
                  : { fill: "#747474" }
              }
            >
              <path d="M20 3H7c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h6c1.103 0 2-.897 2-2h8c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM9.997 19H4V9h6l-.003 10zm10-2H12V9c0-1.103-.897-2-2-2H7V5h13l-.003 12z"></path>
            </motion.svg>
            <div>
              <h4 className="subtitle-services__card">
                <FormattedMessage
                  id="services.responsive"
                  defaultMessage="Fully Responsive"
                />
              </h4>
              <p>
                <FormattedMessage
                  id="services.responsive.description"
                  defaultMessage="Fully responsive design, adaptable to most devices on the market for a better experience."
                />
              </p>
            </div>
          </div>
          <div
            className="container-div__services"
            onMouseLeave={() => setHoverCard("")}
            onMouseEnter={() => setHoverCard("pen")}
          >
            <motion.svg
              initial={{ width: 24, height: 24 }}
              transition={{ duration: 0.4 }}
              animate={
                hoverCard === "pen" ? { fill: "#efd81d" } : { fill: "#747474" }
              }
            >
              <path d="M18.404 2.998c-.757-.754-2.077-.751-2.828.005l-1.784 1.791L11.586 7H7a.998.998 0 0 0-.939.658l-4 11c-.133.365-.042.774.232 1.049l2 2a.997.997 0 0 0 1.049.232l11-4A.998.998 0 0 0 17 17v-4.586l2.207-2.207v-.001h.001L21 8.409c.378-.378.586-.881.585-1.415 0-.535-.209-1.038-.588-1.415l-2.593-2.581zm-3.111 8.295A.996.996 0 0 0 15 12v4.3l-9.249 3.363 4.671-4.671c.026.001.052.008.078.008A1.5 1.5 0 1 0 9 13.5c0 .026.007.052.008.078l-4.671 4.671L7.7 9H12c.266 0 .52-.105.707-.293L14.5 6.914 17.086 9.5l-1.793 1.793zm3.206-3.208-2.586-2.586 1.079-1.084 2.593 2.581-1.086 1.089z"></path>
            </motion.svg>
            <div>
              <h4 className="subtitle-services__card">
                <FormattedMessage
                  id="services.creative"
                  defaultMessage="Creative Design"
                />
              </h4>
              <p>
                <FormattedMessage
                  id="services.creative.description"
                  defaultMessage="Creative design, according to the tastes or rules that are established when preparing the project, and focused on UX and UI"
                />
              </p>
            </div>
          </div>
          <div
            className="container-div__services"
            onMouseLeave={() => setHoverCard("")}
            onMouseEnter={() => setHoverCard("code")}
          >
            <motion.svg
              initial={{ width: 24, height: 24 }}
              transition={{ duration: 0.4 }}
              animate={
                hoverCard === "code" ? { fill: "#efd81d" } : { fill: "#747474" }
              }
            >
              <path d="m7.375 16.781 1.25-1.562L4.601 12l4.024-3.219-1.25-1.562-5 4a1 1 0 0 0 0 1.562l5 4zm9.25-9.562-1.25 1.562L19.399 12l-4.024 3.219 1.25 1.562 5-4a1 1 0 0 0 0-1.562l-5-4zm-1.649-4.003-4 18-1.953-.434 4-18z"></path>
            </motion.svg>
            <div>
              <h4 className="subtitle-services__card">
                <FormattedMessage
                  id="services.development"
                  defaultMessage="Development"
                />
              </h4>
              <p>
                <FormattedMessage
                  id="services.development.description"
                  defaultMessage="Development focused on being sustainable in the long term and focused on technologies with more performance of our time."
                />
              </p>
            </div>
          </div>
          <div
            className="container-div__services"
            onMouseLeave={() => setHoverCard("")}
            onMouseEnter={() => setHoverCard("like")}
          >
            <motion.svg
              initial={{ width: 24, height: 24 }}
              transition={{ duration: 0.4 }}
              animate={
                hoverCard === "like" ? { fill: "#efd81d" } : { fill: "#747474" }
              }
            >
              <path d="M4 21h1V8H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2zM20 8h-7l1.122-3.368A2 2 0 0 0 12.225 2H12L7 7.438V21h11l3.912-8.596L22 12v-2a2 2 0 0 0-2-2z"></path>
            </motion.svg>
            <div>
              <h4 className="subtitle-services__card">
                <FormattedMessage
                  id="services.social"
                  defaultMessage="Social Media Integration"
                />
              </h4>
              <p>
                <FormattedMessage
                  id="services.social.description"
                  defaultMessage="Integration of social media to highly optimized websites and necessary for organic growth."
                />
              </p>
            </div>
          </div>
          <div
            className="container-div__services"
            onMouseLeave={() => setHoverCard("")}
            onMouseEnter={() => setHoverCard("perfor")}
          >
            <motion.svg
              initial={{ width: 24, height: 24 }}
              transition={{ duration: 0.4 }}
              animate={
                hoverCard === "perfor"
                  ? { fill: "#efd81d" }
                  : { fill: "#747474" }
              }
            >
              <path d="M12 4C6.486 4 2 8.486 2 14a9.89 9.89 0 0 0 1.051 4.445c.17.34.516.555.895.555h16.107c.379 0 .726-.215.896-.555A9.89 9.89 0 0 0 22 14c0-5.514-4.486-10-10-10zm7.41 13H4.59A7.875 7.875 0 0 1 4 14c0-4.411 3.589-8 8-8s8 3.589 8 8a7.875 7.875 0 0 1-.59 3z"></path>
              <path d="M10.939 12.939a1.53 1.53 0 0 0 0 2.561 1.53 1.53 0 0 0 2.121-.44l3.962-6.038a.034.034 0 0 0 0-.035.033.033 0 0 0-.045-.01l-6.038 3.962z"></path>
            </motion.svg>
            <div>
              <h4 className="subtitle-services__card">
                <FormattedMessage
                  id="services.performance"
                  defaultMessage="Performance"
                />
              </h4>
              <p>
                <FormattedMessage
                  id="services.performance.description"
                  defaultMessage="Guarantee of a loading speed of the web page from the server to the client, this for a better experience."
                />
              </p>
            </div>
          </div>
          <div
            className="container-div__services"
            onMouseLeave={() => setHoverCard("")}
            onMouseEnter={() => setHoverCard("seo")}
          >
            <motion.svg
              initial={{ width: 24, height: 24 }}
              transition={{ duration: 0.4 }}
              animate={
                hoverCard === "seo" ? { fill: "#efd81d" } : { fill: "#747474" }
              }
            >
              <circle cx="12" cy="12" r="3"></circle>
              <path d="M13 4.069V2h-2v2.069A8.008 8.008 0 0 0 4.069 11H2v2h2.069A8.007 8.007 0 0 0 11 19.931V22h2v-2.069A8.007 8.007 0 0 0 19.931 13H22v-2h-2.069A8.008 8.008 0 0 0 13 4.069zM12 18c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6z"></path>
            </motion.svg>
            <div>
              <h4 className="subtitle-services__card">SEO</h4>
              <p>
                <FormattedMessage
                  id="services.seo.description"
                  defaultMessage="Positioning and optimization of the website in the organic results of the different search engines."
                />
              </p>
            </div>
          </div>
        </ContainerAllServices>
      </ContainerServices>
    </>
  );
};

export default Services;

const ContainerServices = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.bodyLight};
  padding: 40px 50px 50px;
  @media (max-width: 768px) {
    padding: 40px 20px;
  }
  h2 {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 23px;
  }
  .subtitle-services {
    text-align: center;
    font-size: 17px;
  }
`;

const ContainerAllServices = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  text-align: center;
  max-width: 1300px;
  margin: 15px auto;
  gap: 60px;
  @media (max-width: 768px) {
    gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
  .container-div__services {
    width: 100%;
    height: 100%;
    padding: 22px 10px 13px;
    background-color: #2d2d2d;
    border-bottom: 4px solid transparent;
    transition: 0.4s all;
    h4 {
      margin-bottom: 8px;
      font-size: 18px;
      font-weight: 600;
      color: ${({ theme }) => theme.modeSwitch};
    }
    svg {
      margin: 7px 0 6px 0;
      transform: scale(1.4);
    }
    p {
      color: #acacac;
      line-height: 1.2;
      @media (max-width: 1100px) {
        font-size: 14px;
      }
      @media (max-width: 789px) {
        font-size: 13px;
        line-height: 1.4;
      }
      @media (max-width: 682px) {
        font-size: 13px;
      }
    }
    :hover {
      border-bottom: 4px solid #efd81d;
      box-shadow: 0px -23px 27px -14px rgba(23, 23, 23, 0.3) inset;
      transition: 0.4s all;
    }

    @media (max-width: 956px) {
      svg {
        transform: scale(1.1);
      }
    }
    @media (max-width: 808px) {
      svg {
        transform: scale(1.1);
      }
      h4 {
        font-size: 16px;
        margin-bottom: 12px;
        line-height: 1.2;
      }
    }
    @media (max-width: 742px) {
      svg {
        transform: scale(1.1);
      }
      h4 {
        font-size: 18px;
        margin-bottom: 16px;
        line-height: 1.2;
      }
      p {
        font-size: 14px;
      }
    }
    @media (max-width: 664px) {
      svg {
        transform: scale(1.1);
      }
      h4 {
        font-size: 18px;
        margin-bottom: 16px;
        line-height: 1.2;
      }
      p {
        font-size: 14px;
      }
    }
    @media (max-width: 557px) {
      svg {
        transform: scale(0.9);
        margin: 4px 0 6px 0;
      }
      h4 {
        font-size: 15px;
        margin-bottom: 8px;
        line-height: 1.2;
      }
      p {
        font-size: 12.5px;
      }
    }
    @media (max-width: 487px) {
      svg {
        transform: scale(0.9);
        margin: 4px 0 6px 0;
      }
      h4 {
        font-size: 15px;
        margin-bottom: 8px;
        line-height: 1.2;
      }
      p {
        font-size: 12.5px;
      }
    }
    @media (max-width: 405px) {
      svg {
        transform: scale(1.3);
        margin: 4px 0 6px 0;
      }
      h4 {
        font-size: 13px;
        margin-bottom: 5px;
        line-height: 1.2;
      }
      p {
        font-size: 12px;
      }
    }
    @media (max-width: 340px) {
      svg {
        transform: scale(1.2);
        margin: 4px 0 6px 0;
      }
      h4 {
        font-size: 16px;
        margin-bottom: 8px;
        line-height: 1.2;
      }
      p {
        font-size: 13px;
      }
    }
  }
`;
