import React from "react";
import styled from "styled-components";

const Footer = () => {
  const date = new Date();
  return (
    <>
      <FooterContainer>
        <p>
          <span dangerouslySetInnerHTML={{ __html: "&copy;" }} />
          {date.getFullYear()}{" "}
          All rights reserved. @mozzes.dev
        </p>
      </FooterContainer>
    </>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  margin-top: 40px;
  background-color: #141414;
  padding: 20px 0;
  text-align: center;
  p{
    font-weight: 300;
  }
`;
