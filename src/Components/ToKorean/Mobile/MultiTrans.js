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
  margin:15px 0px;
`;
const Language = styled.select`
  font-size:16px;
`;

const MultiTrans = () => {
  return (
    <Container>
       <TransContainer>
        <TransRow>
          <Label>원본</Label>
          <LangType>영어 (English)</LangType>
        </TransRow>
        <Textarea placeholder="다이렉트 번역 탭에서 입력하세요"/>
        <TransRow>
          <TransInfo>유사도</TransInfo>
          <TransInfo></TransInfo>
        </TransRow>
      </TransContainer>
      <Arrow><i className="fas fa-angle-double-down" /></Arrow>
      <TransContainer>
        <TransRow>
          <Label>다중 번역</Label>
          <Language>
            <option value="en">영어 (English)</option>
            <option value="jp">일본어 (Japanese)</option>
            <option value="cn">중국어 간체 (Simp. Chinese)</option>
            <option value="de">독일어 (German)</option>
            <option value="es">스페인어 (Spanish)</option>
            <option value="fr">프랑스어 (French)</option>
          </Language>
        </TransRow>
        <Textarea placeholder="여기에 다중 번역 결과가 출력됩니다."/>
        <TransRow>
          <TransInfo>글자 수 : 0</TransInfo>
          <TransInfo></TransInfo>
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

export default MultiTrans;