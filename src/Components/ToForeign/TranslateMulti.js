import React, { useEffect, useState } from "react";
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
  border: ${props=>props.turn === 2 ? "2px solid #1dd1a1" :"1px solid #d3d3d3"};
  font-size: 16px;
  resize: none;
  outline: none;
`;
const Info = styled.span`
  color: gray;
`;
const Arrow = styled.i`
  font-size: 24px;
  color: ${props=>props.turn ===2 ? "#1dd1a1" : "gray"};
`;

const TranslateMulti = ({ destination, translation ,turn}) => {
  const [dest, setDest] = useState("");
  const [textLeng, setTextLeng] = useState(0);

  useEffect(() => {
    switch (destination) {
      case "en":
        setDest("영어 (English)");
        break;
      case "ja":
        setDest("일본어 (Japanese)");
        break;
      case "zh-cn":
        setDest("중국어 (Simp. Chinese)");
        break;
      default:
    }
    setTextLeng(translation.length)
  }, [destination,translation]);

  return (
    <>
      <TranslateBlock>
        <ModuleRow>
          <Label>다중 번역</Label>
          <Language>{dest}</Language>
        </ModuleRow>
        <TextArea turn={turn} readOnly value={translation} placeholder="여기에 다중 번역 결과가 출력됩니다."/>
        <ModuleRow>
          <Info>글자 수 : {textLeng}</Info>
          <Info></Info>
        </ModuleRow>
      </TranslateBlock>
      <Arrow className="fas fa-angle-double-right" turn={turn}/>
    </>
  );
};

export default TranslateMulti;
