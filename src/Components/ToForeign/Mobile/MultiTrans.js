import React, { useEffect, useState } from "react";
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
  border: ${(props) =>
    props.turn === 2 ? "2px solid #1dd1a1" : "1px solid inherit"};
  font-size: 20px;
  resize: none;
  outline: none;
  transition: border 0.4s ease-in-out;
`;
const Arrow = styled.div`
  display: flex;
  justify-content: center;
  font-size: 30px;
  margin: 10px 0px;
  color:${props=>props.turn === 2 ? "#1dd1a1": "gray"};
`;

const MultiTrans = ({ turn,destination, translation, result, jaccard, leven }) => {
  const [dest, setDest] = useState("");
  const [textLeng, setTextLeng] = useState(0);


  useEffect(() => {
    switch (destination) {
      case "en":
        setDest("영어 (English)");
        break;
      case "jp":
        setDest("일본어 (Japanese)");
        break;
      case "cn":
        setDest("중국어 (Simp. Chinese)");
        break;
      default:
    }
    setTextLeng(translation.length)
  }, [destination,translation]);


  return (
    <Container>
      <TransContainer>
        <TransRow>
          <Label className="module-label">다중 번역</Label>
          <LangType className="language-type">{dest}</LangType>
        </TransRow>
        <Textarea  turn={turn} readOnly
          value={translation} placeholder="여기에 다중 번역 결과가 출력됩니다." />
        <TransRow>
          <TransInfo>글자 수 : {textLeng}</TransInfo>
          <TransInfo></TransInfo>
        </TransRow>
      </TransContainer>
      <Arrow turn={turn}>
        <i className="fas fa-angle-double-down" />
      </Arrow>
      <TransContainer>
        <TransRow>
          <Label className="module-label">재번역</Label>
          <LangType className="language-type">한국어 (Korean)</LangType>
        </TransRow>
        <Textarea  turn={turn} readOnly value={result} placeholder="여기에 재번역 결과가 출력됩니다." />
        <TransRow>
          <TransInfo>유사도</TransInfo>
          <TransInfo className="similarity">{jaccard} - {leven}</TransInfo>
        </TransRow>
      </TransContainer>
    </Container>
  );
};

export default MultiTrans;
