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

const Result = styled.textarea`
  width: 100%;
  height: 250px;
  padding: 10px;
  border-radius: 10px;
  border: ${(props) =>
    props.turn === 1 ? "2px solid #00a8ff" : "1px solid #d3d3d3"};
  font-size: 20px;
  resize: none;
  outline: none;
  transition: border 0.4s ease-in-out;
`;

const Arrow = styled.div`
  display: flex;
  justify-content: center;
  font-size: 30px;
  margin: 15px 0px;
`;

const MultiTrans = ({
  original,
  destination,
  translation,
  result,
  turn,
  langType,
}) => {
  const [originalLang, setOriginalLang] = useState("영어 (English)");
  const [dest, setDest] = useState("");
  const [transLength, setTransLength] = useState(0);

  useEffect(() => {
    switch (langType) {
      case "en":
        setOriginalLang("영어 (English)")
        break;
      case "jp":
        setOriginalLang("일본어 (Japanese)")
        break;
      case "cn":
        setOriginalLang("중국어 간체 (Simp. Chinese)")
        break;
      case "de":
        setOriginalLang("독일어 (German)")
        break;
      case "es":
        setOriginalLang("스페인어 (Spanish)")
        break;
      case "fr":
        setOriginalLang("프랑스어 (French)")
        break;
      default:
        break;
    }

    switch (destination) {
      case "":
        setDest("");
        break;
      case "en":
        setDest("영어 (English)");
        break;
      case "jp":
        setDest("일본어 (Japanese)");
        break;
      case "cn":
        setDest("중국어 간체 (Simp. Chinese)");
        break;
      default:
        break;
    }
    if (translation) {
      setTransLength(translation.length);
    }
  }, [destination, translation, langType]);

  return (
    <Container>
      <TransContainer>
        <TransRow>
          <Label>원본</Label>
          <LangType>{originalLang}</LangType>
        </TransRow>
        <Textarea
          readOnly
          value={original}
          placeholder="다이렉트 번역 탭에서 입력하세요"
        />
        <TransRow>
          <TransInfo>글자 수 : {original.length}</TransInfo>
          <TransInfo></TransInfo>
        </TransRow>
      </TransContainer>
      <Arrow>
        <i className="fas fa-angle-double-down" />
      </Arrow>
      <TransContainer>
        <TransRow>
          <Label>다중 번역</Label>
          <LangType>{dest}</LangType>
        </TransRow>
        <Textarea
          readOnly
          value={translation}
          turn={turn}
          placeholder="여기에 다중 번역 결과가 출력됩니다."
        />
        <TransRow>
          <TransInfo>글자 수 : {transLength}</TransInfo>
          <TransInfo></TransInfo>
        </TransRow>
      </TransContainer>
      <Arrow>
        <i className="fas fa-angle-double-down" />
      </Arrow>
      <TransContainer>
        <TransRow>
          <Label>재번역</Label>
          <LangType>한국어 (Korean)</LangType>
        </TransRow>
        <Result
          readOnly
          value={result}
          turn={turn}
          placeholder="여기에 재번역 결과가 출력됩니다."
        />
        <TransRow></TransRow>
      </TransContainer>
    </Container>
  );
};

export default MultiTrans;
