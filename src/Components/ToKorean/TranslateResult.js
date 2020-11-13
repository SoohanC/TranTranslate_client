import React, { useState } from "react";
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
  border: ${(props) =>
    props.turn === 1 ? "2px solid #00a8ff" : "1px solid #d3d3d3"};
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

const TranslateResult = ({ result, turn }) => {
  const [copied, setCopied] = useState(false);

  const copyClipboard = async (e) => {
    const text = e.target.value;
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(()=>{
      setCopied(false);
    },600)
  };

  return (
    <TranslateBlock>
      <ModuleRow>
        <Label>재번역</Label>
        <Language>한국어 (Korean)</Language>
      </ModuleRow>
      <TextArea
        readOnly
        value={result}
        turn={turn}
        placeholder="여기에 최종 번역 결과가 출력됩니다."
        onClick={copyClipboard}
      />
      <Copied copied={copied}>클립보드에 복사되었습니다.</Copied>
      <ModuleRow>
        <Info></Info>
        <Info></Info>
      </ModuleRow>
    </TranslateBlock>
  );
};

export default TranslateResult;
