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
  width: 800px;
  margin: 150px auto;
`;
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 50px;
`;
const MainHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const MainTitle = styled.div`
  font-size: 70px;
  font-weight: 600;
  color: #1e272e;
  margin: 15px 0px;
`;
const MainDescripton = styled.div`
  margin: 20px 5px;
  line-height: 24px;
`;
const LinkButton = styled.button`
  margin-top: 15px;
  cursor: pointer;
  padding: 10px 20px;
  background-color: #00a8ff;
  outline: none;
  border: none;
  border-radius: 5px;
  color: white;
  width: 220px;
  font-size: 16px;
  &:hover {
    &:hover {
      background-color: #005f8e;
    }
  }
`;

const ImageContainer = styled.div`
  width: 220px;
  height: 220px;
  background-size: contain, cover;
  background-image: url(${image});
`;

const Construction = () => {
  const history = useHistory();

  const onClick = ()=>{
    history.push("/to-foreign");
  }
  return (
    <Container>
      <Wrapper>
        <Row>
          <MainHolder>
            <MainTitle>공사중!</MainTitle>
            <MainDescripton>
              현재 구현 중인 기능입니다.
              <br /> 완성되는대로 업데이트 하겠습니다.
            </MainDescripton>
            <LinkButton onClick={onClick}>번역기로 되돌아가기</LinkButton>
          </MainHolder>
          <ImageContainer />
        </Row>
      </Wrapper>
    </Container>
  );
};

export default Construction;
