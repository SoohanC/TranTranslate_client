import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const FadeIn = keyframes`
  0% {
    opacity:0;
  }
  100%{
    opacity:1;
  }
`;

const TranslateBlock = styled.div`
position: relative;
  min-width: 28%;
  margin: 10px;
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
const Copied = styled.span`
  position:absolute;
  display: ${(props)=> props.copied ? "inline" : "none"};
  bottom: 50px;
  left:140px;
  z-index:3;
  color: blue;
  font-size:14px;
  animation: ${FadeIn} 0.4s ease-in-out;
`;
const Arrow = styled.i`
  font-size: 24px;
  color: ${props=>props.turn ===2 ? "#1dd1a1" : "gray"};
`;

const TranslateMulti = ({ destination, translation ,turn}) => {
  const [dest, setDest] = useState("");
  const [textLeng, setTextLeng] = useState(0);
  const [copied, setCopied] = useState(false);

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

  const copyClipboard = async (e) => {
    const text = e.target.value;
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(()=>{
      setCopied(false);
    },600)
  };

  return (
    <>
      <TranslateBlock>
        <ModuleRow>
          <Label>다중 번역</Label>
          <Language>{dest}</Language>
        </ModuleRow>
        <TextArea onClick={copyClipboard}
        turn={turn} readOnly value={translation} placeholder="여기에 다중 번역 결과가 출력됩니다."/>
        <Copied copied={copied}>클립보드에 복사되었습니다.</Copied>
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
