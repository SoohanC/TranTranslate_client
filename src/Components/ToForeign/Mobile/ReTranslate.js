import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`;

const TransContainer = styled.div`
  width: 100%;
`;
const TransRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
`;
const Label = styled.span`
  color: gray;
  font-size: 20px;
`;
const LangType = styled.span``;
const TransInfo = styled.span`
  color: gray;
  font-size: 16px;
`;
const Button = styled.button`
  cursor: pointer;
  padding: 6px 15px;
  width: 100px;
  background-color: #00a8ff;
  outline: none;
  font-size:16px;
  border: none;
  color: white;
  border-radius: 5px;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: #005f8e;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 250px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #d3d3d3;
  font-size: 20px;
  resize: none;
  outline: none;
  transition: border 0.4s ease-in-out;
`;
const Arrow = styled.div`
    display: flex;
  justify-content: center;
  font-size:30px;
  margin:10px 0px;
`;


const ReTranslate = () => {
  return (
    <Container>
      <TransContainer>
        <TransRow>
          <Label>원본</Label>
          <LangType>한국어 (Korean)</LangType>
        </TransRow>
        <Textarea placeholder="100자 이내로 입력해 주세요."/>
        <TransRow>
          <TransInfo>글자 수 : 0 / 100</TransInfo>
          <Button> 번역 하기 </Button>
        </TransRow>
      </TransContainer>
      <Arrow><i className="fas fa-angle-double-down" /></Arrow>
      <TransContainer>
        <TransRow>
          <Label>번역</Label>
          <LangType>한국어 (Korean)</LangType>
        </TransRow>
        <Textarea placeholder="여기에 번역 결과가 출력됩니다."/>
        <TransRow>
          <TransInfo>글자 수 : 0</TransInfo>
          <Button> 다중 번역 </Button>
        </TransRow>
      </TransContainer>
      <Arrow><i className="fas fa-angle-double-down" /></Arrow>
      <TransContainer>
        <TransRow>
          <Label>재번역</Label>
          <LangType>한국어 (Korean)</LangType>
        </TransRow>
        <Textarea placeholder="여기에 재번역 결과가 출력됩니다."/>
        <TransRow>
          <TransInfo>유사도</TransInfo>
          <TransInfo></TransInfo>
        </TransRow>
      </TransContainer>
    </Container>
  );
};

export default ReTranslate;