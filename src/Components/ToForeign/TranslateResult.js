import React from "react";
import styled from "styled-components";

const TranslateBlock = styled.div`
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
`;
const Language = styled.span``;
const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 10px;
  border-radius: 10px;
  border: ${(props) =>{
    if(props.turn===1 && props.type==="1"){
      return "2px solid #00a8ff"
    }else if(props.turn===2 && props.type==="2"){
      return "2px solid #1dd1a1"
    }else{
      return" 1px solid inherit"
    }
  }};
  font-size: 16px;
  resize: none;
  outline: none;
`;

const TranslateResult = ({ result, turn, jaccard, leven, type }) => {
  return (
    <TranslateBlock>
      <ModuleRow>
        <Label className="module-label">재번역</Label>
        <Language className="language-type">한국어 (Korean)</Language>
      </ModuleRow>
      <TextArea readOnly value={result} turn={turn} type={type} placeholder="여기에 재번역 결과가 출력됩니다."/>
      <ModuleRow>
        <span className="module-label">유사도</span>
        <span className="similarity">
         {jaccard} - {leven}
        </span>
      </ModuleRow>
    </TranslateBlock>
  );
};

export default TranslateResult;
