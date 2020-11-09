import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ReactTooltip from 'react-tooltip';

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
  border: ${(props) =>
    props.turn === 1 ? "2px solid #00a8ff" : "1px solid #d3d3d3"};
  font-size: 16px;
  resize: none;
  outline: none;
  transition: border 0.4s ease-in-out;
`;
const Info = styled.span`
  color: gray;
`;
const Button = styled.button`
  display: ${(props) => (props.turn === 1 ? "visible" : "none")};
  cursor: pointer;
  padding: 5px 15px;
  background-color: #10ac84;
  outline: none;
  border: none;
  color: white;
  border-radius: 5px;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: #0b785b;
  }
`;
const Arrow = styled.i`
  font-size: 24px;
  color: ${props=>props.turn ===1 ? "#00a8ff" : "gray"};
`;
const ArrowDown = styled.i`
  position: absolute;
  bottom: -30px;
  right: 225px;
  font-size: 24px;
  color: ${props=>props.turn ===2 ? "#1dd1a1" : "gray"};
`;

const TranslateModule = ({
  onSelectChange,
  translation,
  handleMultiTrans,
  turn,
}) => {
  const [textLeng, setTextLeng] = useState(0);
  
  useEffect(() => {
    console.log("yue")
    setTextLeng(translation.length)
  }, [translation]);
 
  const copyClipboard = async(e)=>{
    const text = e.target.value;
    await navigator.clipboard.writeText(text)
    console.log("copied")
  }

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
        <TextArea
          data-tip
          data-for='copyTooltip'
          data-event='click'
          onClick={copyClipboard}
          readOnly
          value={translation}
          turn={turn}
          placeholder="여기에 번역 결과가 출력됩니다."
        />
         <ReactTooltip id="copyTooltip" place="top" type="dark" effect="float" globalEventOff='click' delayHide={800}>
            클립보드에 복사되었습니다.
          </ReactTooltip>
        <ModuleRow>
          <Info>글자 수 : {textLeng}</Info>
          <Button onClick={handleMultiTrans} turn={turn}>
            다중 번역 하기
          </Button>
        </ModuleRow>
        <ArrowDown className="fas fa-angle-double-down" turn={turn} />
      </TranslateBlock>
      <Arrow className="fas fa-angle-double-right" turn={turn} />
    </>
  );
};

export default TranslateModule;
