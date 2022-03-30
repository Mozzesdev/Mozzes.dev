import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#f7f7f7",
  bodyInverse: "#1a1a1a",
  fontColor: "#424242",
  fontColorInverse: "#f3f3f3",
  border: "1px solid #f7f7f7",
  borderModes: "1px solid #1a1a1a",
  top: "-2px",
  left: "-3px",
  leftResponsive: "-3px",
  languageBg: "#1a1a1a",
  languageColor: "#f3f3f3",
};
export const darkTheme = {
  body: "#1a1a1a",
  bodyInverse: "#f7f7f7",
  fontColor: "#f3f3f3",
  fontColorInverse: "#424242",
  border: "1px solid #1a1a1a",
  borderModes: "1px solid #f3f3f3",
  top: "-2px",
  left: "36px",
  leftResponsive: "45px",
  languageBg: "#f7f7f7",
  languageColor: "#424242",
};

export const GlobalStyles = createGlobalStyle`
  body{
   background-color: ${(props) => props.theme.body};
   transition: .7s all;
  }

  h1,h2,h3,h4,p,a{
   color: ${(props) => props.theme.fontColor};
  }

  .navegacion-principal{
   background-color: ${(props) => props.theme.body};
   transition: .7s all;
  }
  .container-nav{
   background-color: ${(props) => props.theme.body};
   border: ${(props) => props.theme.border};
   transition: .7s all;
  }
  .modes{
   position: relative;
   background-color: ${(props) => props.theme.body};
   border: ${(props) => props.theme.borderModes};
   transition: .7s all;
  }
  .modes-responsive{
   position: relative;
   background-color: ${(props) => props.theme.body};
   border: ${(props) => props.theme.borderModes};
   transition: .7s all;
  }
  .modes::after{
    content: "";
    display: block;
    width: 28px;
    height: 28px;
    position: absolute;
    background: #F1F1F1;
    top: ${(props) => props.theme.top};
    left: ${(props) => props.theme.left};
    right: unset;
    border-radius: 100px;
    transition: .3s ease all;
    box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, .2);
  }
  .modes-responsive::after{
    content: "";
    display: block;
    width: 40px;
    height: 40px;
    position: absolute;
    background: #F1F1F1;
    top: ${(props) => props.theme.top};
    left: ${(props) => props.theme.leftResponsive};
    right: unset;
    border-radius: 100px;
    transition: .6s all;
    box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, .2);
  }
  .container-div{
    background-color: ${(props) => props.theme.languageBg};
    p{
      color: ${(props) => props.theme.languageColor};
    }
  }
  .container-nav__responsive{
    background-color: ${(props) => props.theme.bodyInverse};
    a{
      color: ${(props) => props.theme.fontColorInverse};
    }
  }
  .flex-row{
    p{
      color: ${(props) => props.theme.fontColorInverse};
      margin-left: 10px;
      font-size: 19px;
    }
  }
  .container-div__responsive{
    background-color: ${(props) => props.theme.languageBg};
    border: ${(props) => props.theme.border};
    border-radius: 7px;
    width: 90%;
    margin-top: 20px;
    p{
      color: ${(props) => props.theme.languageColor};
    }
    .divContainer-responsive{
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 3px 18px;
      margin: 10px 0;
      cursor: pointer;
      p{
        font-size: 17px;
      }
      img{
        width: 32px;
        height: 32px;
        border-radius: 50%;
        object-fit: cover;
      }
      :hover{
        background-color: ${(props) => props.theme.body};
        p{
          color: ${(props) => props.theme.fontColor} ;
        }
      }
    }
  }
  .subtitle-services__card{
    color: #f1f1f1f1;
  }

  .subtitle-projects__card{
    color: #f1f1f1;
  }
`;
