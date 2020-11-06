import React from "react";
import styled from "styled-components";

const TranslateBlock = styled.div`
  min-width: 450px;
  margin: 10px 20px;
`;
const ModuleRow = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0px;
  padding: 0px 5px;
`;
const Label = styled.span`
  color: gray;
`;
const Language = styled.span``;
const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #d3d3d3;
  font-size: 16px;
  resize: none;
`;
const Info = styled.span`
  color: gray;
`;
const Button = styled.button`
  cursor: pointer;
  padding: 5px 15px;
  background-color: #00a8ff;
  outline: none;
  border: none;
  color: white;
  border-radius: 5px;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: #005f8e;
  }
`;
const Arrow = styled.i`
  font-size: 24px;
  color: ${props=>props.turn ===1 ? "#00a8ff" : "gray"};
`;

const TranslateOriginal = ({ onChange, handleTranslate, original,turn }) => {
  return (
    <>
      <TranslateBlock>
        <>
        <ModuleRow>
          <Label>원본</Label>
          <Language>한국어 (Korean)</Language>
        </ModuleRow>
        <TextArea
          value={original}
          onChange={onChange}
          placeholder="100자 이내로 입력해 주세요."
        />
        <ModuleRow>
          <Info>글자 수 : {original.length}/100</Info>
          <Button onClick={handleTranslate}>번역 하기</Button>
        </ModuleRow>
        </>
      </TranslateBlock>
      <Arrow turn={turn} className="fas fa-angle-double-right" />
    </>
  );
};

export default TranslateOriginal;
