import Earth from "Components/Earth";
import React from "react";
import styled, { keyframes } from "styled-components";

const RerouteAnimation = keyframes`
  0% {
    transform: translateX(100%)
  }
  100%{
    transform: translateX(0)
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


const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #00a8ff;
  padding-top:40px;
  display:flex;
  flex-direction:column;
  align-items:center;
`;

const Jumbotron = styled.div`
  width: 800px;
  margin: 35px auto;
  animation: ${FadeIn} 0.4s ease-in-out;
`;

const Title = styled.div`
  color: white;
  font-size: 50px;
  line-height: 60px;
`;
const Transition = styled.div`
  display: ${(props) => (props.reRouting ? "flex" : "none")};
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
   margin: 20px 0px 0px 0px;
   padding: 10px 20px;
   border-radius: 5px;
  
   outline:none;
   border:none;
   font-size:16px;
   color:white;
     background-color:black;
   transition:background-color 0.2s ease-in-out, color 0.2s ease-in-out;
   &:hover{
     color:gray;
     background-color:white;
   }
`;

const Logo = styled.div`
  margin: auto;
  text-align:center;
  font-family: "Amatic SC", cursive;
  color: #00a8ff;
  font-size: 80px;
`;


const HomePresenter = ({ reRouting, handleReroute }) => {
  return (
    <>
      <Container>
        <Jumbotron>
          <Title>
            번역기가 돌려준 번역. <br />
            과연 믿고 써도 되는 걸까?
          </Title>
          <Button onClick={handleReroute}><i class="fas fa-globe-asia"></i> TranTranslate 시작하기</Button>
        </Jumbotron>
        <Earth/>
      </Container>
      <Transition reRouting={reRouting}><Logo>TranTranslate</Logo></Transition>
    </>
  );
};

export default HomePresenter;
