import giffy from "../img/giffy.png";
import calcu from "../img/calcu.png";
import weather from "../img/weather.png";
import imgPort from "../img/Portf.webp";
import cloneTwitter from "../img/devter.png";
import ArrowNavigation from "../components/ArrowNavigation";
import React from "../components/svg/skills/React";
import Axios from "../components/svg/skills/Axios";
import Framer from "../components/svg/skills/Framer";
import StyledFill from "../components/svg/skills/StyledFill";
import RouterDom from "../components/svg/skills/RouterDom";
import Next from "../components/svg/skills/Next";
import FirebaseFill from "../components/svg/skills/FirebaseFill";
import Recoil from "../components/svg/skills/Recoil";
import Wouter from "../components/svg/skills/Wouter";

export const imgInfo = [
  {
    id: 1,
    title: "My Portfolio",
    description: "My Portfolio",
    img: imgPort,
    url: "https://mozzes-dev.netlify.app",
    github: "https://github.com/WinFlix/Mozzes.dev",
    details: {
      lib: [
        { name: "React", icon: <React fill={"#61dafb"} />, class: "react-lib" },
        {
          name: "Styled-Components",
          icon: <StyledFill />,
          class: "styled-lib",
        },
        { name: "React-Router-Dom", icon: <RouterDom />, class: "router-lib" },
        { name: "Framer-Motion", icon: <Framer />, class: "framer-lib" },
      ],
      description: `Personal portfolio where work skills and different projects are shown, giving proof of their truthfulness...`,
    },
  },
  {
    id: 2,
    title: "Weather App",
    description: "Simple app with React Hooks",
    img: weather,
    url: "https://weather-web-topaz.vercel.app",
    github: "https://github.com/WinFlix/Weather-App",
    details: {
      lib: [
        { name: "React", icon: <React fill={"#61dafb"} />, class: "react-lib" },
        { name: "Axios", icon: <Axios />, class: "axios-lib" },
        {
          name: "Styled-Components",
          icon: <StyledFill />,
          class: "styled-lib",
        },
        { name: "Framer-Motion", icon: <Framer />, class: "framer-lib" },
      ],
      description: `A simple web application that uses the "GeoLocation" browser API to get your location and give you today's and next week's weather and more...`,
    },
  },
  {
    id: 3,
    title: "Calculator",
    description: "Calculator styled with styled-components",
    img: calcu,
    url: "https://calculator-app-green.vercel.app",
    github: "https://github.com/WinFlix/Calculator-React",
    details: {
      lib: [
        { name: "React", icon: <React fill={"#61dafb"} />, class: "react-lib" },
        {
          name: "Styled-Components",
          icon: <StyledFill />,
          class: "styled-lib",
        },
        { name: "Framer-Motion", icon: <Framer />, class: "framer-lib" },
      ],
      description: `A simple calculator app with various functions and a creamy style...`,
    },
  },
  {
    id: 4,
    title: "Twitter Clone",
    description: "Twitter Clone in development phase",
    img: cloneTwitter,
    url: "https://twitter-winflix.vercel.app",
    github: "https://github.com/WinFlix/Twitter-Clone",
    details: {
      lib: [
        { name: "NextJS", icon: <Next fill={"#f1f1f1"} />, class: "next-lib" },
        { name: "Firebase", icon: <FirebaseFill />, class: "firebase-lib" },
        {
          name: "Styled-Components",
          icon: <StyledFill />,
          class: "styled-lib",
        },
        { name: "Framer-Motion", icon: <Framer />, class: "framer-lib" },
        { name: "Recoil", icon: <Recoil />, class: "recoil-lib" },
      ],
      description: `An almost "exact" clone of twitter in development but with different functions ready for "use", being my first project with NextJS and SSR (Server Side Rendering)...`,
    },
  },
  {
    id: 5,
    title: "Giffy App",
    description: "A simple app with Giphy API",
    img: giffy,
    url: "https://giffy-app-ten.vercel.app",
    github: "https://github.com/WinFlix/Giffy-App",
    details: {
      lib: [
        { name: "React", icon: <React fill={"#61dafb"} />, class: "react-lib" },
        { name: "Wouter", icon: <Wouter />, class: "router-lib" },
        {
          name: "Styled-Components",
          icon: <StyledFill  />,
          class: "styled-lib",
        },
        {
          name: "Framer-Motion",
          icon: <Framer/>,
          class: "framer-lib",
        },
      ],
      description: `Web application that uses the GIPHY developers API to provide users with all kinds of possible gifs, this with the help of React and other dependencies...`,
    },
  },
];

export const addOpacityColor = (color, opacity) => {
  const opacityHex = Math.round(opacity * 255).toString(16);
  return `${color}${opacityHex}`;
};

export const settingsSlider = {
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  cssEase: "ease-in-out",
  pauseOnHover: true,
  lazyLoad: true,

  nextArrow: (
    <ArrowNavigation
      styles={{
        position: { left: "auto", right: "0" },
        transform: { transform: "rotate(180deg)" },
      }}
    />
  ),
  prevArrow: (
    <ArrowNavigation
      styles={{
        position: { left: "0", right: "auto" },
        transform: { transform: "rotate(0deg)" },
      }}
    />
  ),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 500,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
