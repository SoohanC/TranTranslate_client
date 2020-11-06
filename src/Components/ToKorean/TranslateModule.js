import React from "react";
import styled from "styled-components";

const TranslateBlock = styled.div`
  position: relative;
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
const Language = styled.select``;
const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 10px;
  border-radius: 10px;
  border: ${props=> props.turn === 1 ? "2px solid #00a8ff" : "1px solid #d3d3d3"};
  font-size: 16px;
  resize: none;
  outline:none;
  transition: border 0.4s ease-in-out;
`;
const Info = styled.span`
  color: gray;
`;
const Button = styled.button`
  display: ${props=> props.turn === 1 ? "visible" : "none"};
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
  color: gray;
`;

const TranslateModule = ({ onSelectChange, translation, handleMultiTrans,turn}) => {

  return (
    <>
      <TranslateBlock>
        <ModuleRow>
          <Label>번역</Label>
          <Language onChange={onSelectChange}>
            <option value="en">영어 (English)</option>
            <option value="ja">일본어 (Japanese)</option>
            <option value="zh-cn">중국어 간체 (Simplified Chinese)</option>
          </Language>
        </ModuleRow>
        <TextArea readOnly value={translation} turn={turn}/>
        <ModuleRow>
          <Info>글자 수</Info>
          <Button onClick={handleMultiTrans} turn={turn}>다중 번역 하기</Button>
        </ModuleRow>
      </TranslateBlock>
      <Arrow className="fas fa-angle-double-right" turn={turn}/>
    </>
  );
};

export default TranslateModule;
