import React from "react";
import styled, { keyframes } from "styled-components";


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
  height: 100%;
  padding-top: 110px;
  animation: 0.5s ${FadeIn} ease-in;
`;

const Block = styled.div`
    margin:100px;
`;

const EmojiBlock = styled.div`
  font-size: 100px;
  text-align:center;
  margin: 30px 0px;
`;

const MessageBlock =styled.div`
 text-align:center;
  margin: 30px 0px;
`


const Construction = () => {
  return (
    <Container>
     <Block>
     <EmojiBlock>
          🚧
      </EmojiBlock>
      <MessageBlock>
         현재 개발중인 페이지 입니다.
      </MessageBlock>
     </Block>
    </Container>
  );
};

export default Construction;
