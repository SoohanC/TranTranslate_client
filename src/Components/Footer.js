import React from "react";
import styled from "styled-components";



const FooterBlock = styled.div`
  margin-top:30px;
  width: 100%;
`;


const LogoBlock = styled.div`
  color:gray;
  text-align:center;
`;
const Footer = () => {

  return (
    <FooterBlock>
        <LogoBlock>© 2020 TranTranslate</LogoBlock>
    </FooterBlock>
  );
};

export default Footer;
