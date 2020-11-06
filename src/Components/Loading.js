import React from "react";
import styled, { keyframes } from "styled-components";
import Loader from "react-loader-spinner";

const FadeIn = keyframes`
  0% {
    opacity:0;
  }
  100%{
    opacity:1;
  }
`;

const LoaderContainer = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: 0.4s ${FadeIn} ease-in-out;
`;
const LoaderBackground = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.6;
`;
const Message = styled.div`
  color: white;
  text-align:center;
  font-size: 20px;
  z-index: 1;
  margin-bottom:30px;
`;

const LoaderHolder = styled.div`
  z-index: 1;
`;

const Loading = () => {
  return (
    <LoaderContainer>
      <LoaderHolder>
        <Message>Translating....</Message>
        <Loader type="TailSpin" color="#00BFFF" height={150} width={150} />
      </LoaderHolder>
      <LoaderBackground />
    </LoaderContainer>
  );
};

export default Loading;
