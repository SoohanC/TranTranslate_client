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
  border: ${props=> props.turn === 1 ? "2px solid #00a8ff" : "1px solid #d3d3d3"};
  font-size: 16px;
  resize: none;
  outline:none;
`;
const Info = styled.span`
  color: gray;
`;

const TranslateResult = ({ result,turn }) => {
  return (
    <TranslateBlock>
      <ModuleRow>
        <Label>재번역</Label>
        <Language>한국어 (Korean)</Language>
      </ModuleRow>
      <TextArea readOnly value={result} turn={turn} placeholder="여기에 최종 번역 결과가 출력됩니다."/>
      <ModuleRow>
        <Info></Info>
        <Info></Info>
      </ModuleRow>
    </TranslateBlock>
  );
};

export default TranslateResult;
