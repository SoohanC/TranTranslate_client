import { Hidden, useMediaQuery, useTheme } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import image from "../images/drawing.png";

const FadeIn = keyframes`
  0% {
    opacity:0;
  }
  100%{
    opacity:1;
  }
`;


const Container = styled.div`
  width: 100%;
  padding-top: 110px;
  animation: ${FadeIn} 0.4s ease-in;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${props=>props.matches ? "row" : "column"};
  justify-content: center;
  align-items: center;
  padding: 0px 50px;
  margin:  ${props=>props.matches ? "150px auto" : "50px auto"};;
`;
const MainHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const MainTitle = styled.div`
  font-size: ${props=>props.matches ? "70px" : "60px"};
  font-weight: 600;
  color: #1e272e;
  margin: 15px 0px;
`;
const MainDescripton = styled.div`
  margin: 20px 5px;
  line-height: 24px;
`;
const LinkButton = styled.button`
  margin-top: 5px;
  cursor: pointer;
  padding: 10px 20px;
  background-color: #00a8ff;
  outline: none;
  border: none;
  border-radius: 5px;
  color: white;
  width:${props=>props.matches ? "100%" : "100%"};
  font-size: 16px;
  &:hover {
    &:hover {
      background-color: #005f8e;
    }
  }
`;

const ImageContainer = styled.img`
  width: 220px;
  margin:0px 50px;
`;

const Spacer =styled.div`
  margin:30px 0px;
`;


const Construction = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const history = useHistory();

  const onClick = ()=>{
    history.push("/to-foreign");
  }
  return (
    <Container>
      <Wrapper matches={matches}>
          <MainHolder>
            <MainTitle matches={matches}>공사중!</MainTitle>
            <MainDescripton>
              현재 구현 중인 기능입니다.
              <br /> 완성되는대로 업데이트 하겠습니다.
            </MainDescripton>
            <LinkButton matches={matches}onClick={onClick}>번역기로 되돌아가기</LinkButton>
          </MainHolder>
          <Hidden mdup>
              <Spacer/>
          </Hidden>
          <ImageContainer src={image}/>
      </Wrapper>
    </Container>
  );
};

export default Construction;
