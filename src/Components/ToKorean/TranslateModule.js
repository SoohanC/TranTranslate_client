import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DirectModule from "./DirectModule";

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
const Language = styled.div``;
const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #d3d3d3;
  font-size: 16px;
  resize: none;
  outline: none;
  transition: border 0.4s ease-in-out;
`;
const Info = styled.span`
  color: gray;
`;

const Arrow = styled.i`
  font-size: 24px;
  color: ${(props) => (props.turn === 1 ? "#00a8ff" : "gray")};
`;

const TranslateModule = ({ translation, turn, destination }) => {
  const [dest, setDest] = useState("");
  const [transLength, setTransLength] = useState(0);


  useEffect(() => {
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
    if(translation){
      setTransLength(translation.length);
    }
  }, [destination, translation]);

  return (
    <>
      <TranslateBlock>
        {dest === "" ? (
          <DirectModule />
        ) : (
          <>
            <ModuleRow>
              <Label>번역</Label>
              <Language>{dest}</Language>
            </ModuleRow>
            <TextArea
              readOnly
              value={translation}
              turn={turn}
              placeholder="여기에 1차 번역이 입력됩니다."
            />
            <ModuleRow>
              <Info>글자 수 :{transLength}</Info>
              <Info></Info>
            </ModuleRow>
          </>
        )}
      </TranslateBlock>
      <Arrow className="fas fa-angle-double-right" turn={turn} />
    </>
  );
};

export default TranslateModule;
