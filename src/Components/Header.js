import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const FadeIn = keyframes`
  0% {
    opacity:0;
  }
  100%{
    opacity:1;
  }
`;



const HeaderBlock = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`;

const Navbar = styled.div`
 
  width: 100%;
  height: 70px;
  background-color: #00a8ff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  z-index: 5;
`;

const LogoBlock = styled.div`
  position: relative;
  width: 25%;
`;
const Logo = styled.span`
  margin: 0px 10px;
  font-family: "Amatic SC", cursive;
  color: white;
  font-size: 40px;
`;
const Version = styled.span`
  position: absolute;
  top: 5px;
  left: 180px;
  font-size: 14px;
  color: white;
`;
const MenuBlock = styled.div`
  width: 300;
  display: flex;
  justify-content: center;
`;
const Menu = styled.span`
  color: white;
  margin: 0px 0px;
  padding: 20px 20px;
  border-bottom: 4px solid ${props=> props.current === "true" ? "white" : "transparent"};
  transition: border-bottom .5s linear;
`;
const LinkBlock = styled.div`
  width: 25%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const Item = styled.span`
  font-size: 14px;
  color: white;
  margin: 0px 20px;
`;

const Notification = styled.div`
  width: 100%;
  height: 40px;
  background-color: #eff3fe;
  display: flex;
  animation: 0.7s ${FadeIn} ease-in;
`;
const Message = styled.div`
  margin: auto;
  text-align: center;
  color: #2454b6;
  font-size: 14px;
`;

const Header = () => {
  const location = useLocation();

  return (
    <HeaderBlock>
      <Navbar>
        <LogoBlock>
          <Logo><Link to="/">TranTranslate</Link></Logo>
          <Version>Alpha</Version>
        </LogoBlock>
        <MenuBlock>
          <Link to="/to-foreign">
            <Menu current={location.pathname === "/to-foreign" ? "true" : "false" }>한국어 - 외국어</Menu>
          </Link>
          <Link to="/to-korean">
            <Menu current={location.pathname === "/to-korean" ? "true" : "false"}>외국어 - 한국어</Menu>
          </Link>
        </MenuBlock>
        <LinkBlock>
          <Link to="/about-us">
            <Item>사용법</Item>
          </Link>
          <Link to="/how-to">
            <Item>문의 </Item>
          </Link>
          <Link to="/contact">
            <Item>다크 모드</Item>
          </Link>
        </LinkBlock>
      </Navbar>
      <Notification>
        <Message>
          개발중이라 서버반응이 느릴 수 있습니다. Google 번역엔진을 사용합니다.
        </Message>
      </Notification>
    </HeaderBlock>
  );
};

export default Header;
