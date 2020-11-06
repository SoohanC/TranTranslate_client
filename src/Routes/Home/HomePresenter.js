import Earth from "Components/Earth";
import Noise from "Components/Noise";
import React from "react";
import styled, { keyframes } from "styled-components";

const RerouteAnimation = keyframes`
  0% {
    transform: translateX(100%)
  }
  100% {
    transform: translateX(0%)
  }
`;

const FadeIn = keyframes`
0% {
    opacity:0;
  }
  100%{
    opacity:1;
  }
`;

const LogoFadeIn = keyframes`
0% {
    opacity:0;
  }
  50%{
    opacity:0;
  }
  100%{
    opacity:1;
  }
`;

const MessageFadeIn = keyframes`
0% {
    opacity:0;
  }
  70%{
    opacity:0;
  }
  100%{
    opacity:1;
  }
`;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color:${(props) => (props.serverStatus ? " #00a8ff" : "#383838")};
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Jumbotron = styled.div`
  width: 800px;
  margin: 35px auto;
  animation: ${FadeIn} 0.4s ease-in-out;
`;

const Title = styled.div`
  color: white;
  font-size: 46px;
  line-height: 52px;
`;
const Transition = styled.div`
  display: ${(props) => (props.reRouting ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  animation: ${RerouteAnimation} 0.8s ease-in;
  z-index: 6;
`;

const Button = styled.button`
  cursor: pointer;
  margin: 15px 0px 0px 0px;
  padding: 10px 20px;
  border-radius: 5px;

  outline: none;
  border: none;
  font-size: 16px;
  color: white;
  background-color: black;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  &:hover {
    color: gray;
    background-color: white;
  }
`;
const Status = styled.button`
  margin: 15px 0px 0px 0px;
  padding: 10px 20px;
  border-radius: 5px;
  outline: none;
  border: none;
  font-size: 16px;
  color: white;
  background-color: black;
`;

const Logo = styled.div`
  position: fixed;
  top: 435px;
  width: 100%;
  text-align: center;
  font-family: "Amatic SC", cursive;
  font-size: 80px;
  color: white;
  z-index: 6;
`;

const Logo2 = styled.div`
  display: ${(props) => (props.reRouting ? "block" : "none")};
  position: fixed;
  top: 435px;
  width: 100%;
  text-align: center;
  font-family: "Amatic SC", cursive;
  font-size: 80px;
  color: #00a8ff;
  z-index: 7;
  animation: ${LogoFadeIn} 0.8s ease-in;
`;
const Message = styled.div`
  display: ${(props) => (props.reRouting ? "block" : "none")};
  position: fixed;
  top: 54%;
  width: 100%;
  text-align: center;
  font-size: 20px;
  color: #00a8ff;
  z-index: 7;
  animation: ${MessageFadeIn} 1.2s ease-in;
`;

const Blink = keyframes`
50% {
  opacity: 0;
}`;
const Icon = styled.i`
  margin-right: 5px;
  font-size: 14px;
  color: ${(props) => (props.serverStatus ? "#00ff44" : "red")};
  animation: ${Blink} 1.5s linear infinite;
`;

const HomePresenter = ({ reRouting, handleReroute, serverStatus }) => {
  return (
    <>
      <Container reRouting={reRouting} serverStatus={serverStatus} >
        <Jumbotron>
          {serverStatus ? <Title>
            번역기가 돌려준 번역. <br />
            과연 믿고 써도 되는 걸까?
          </Title> : <Title>
            죄송합니다. <br />
            현재 점검중입니다.
          </Title>}
          {!serverStatus ? (
            <Status>
              <Icon className="fas fa-circle" /> 현재 서버 접속 불가
            </Status>
          ) : (
            <Button onClick={handleReroute}>
              <Icon className="fas fa-globe-asia" serverStatus={serverStatus} />{" "}
              TranTranslate 시작하기
            </Button>
          )}
        </Jumbotron>
        <Earth serverStatus={serverStatus}/>
      </Container>
      {!serverStatus && <Noise/>}
      <Logo>TranTranslate</Logo>
      <Logo2 reRouting={reRouting}>TranTranslate</Logo2>
      <Message reRouting={reRouting}>환영합니다.</Message>
      <Transition reRouting={reRouting}></Transition>
    </>
  );
};

export default HomePresenter;
