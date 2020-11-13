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
const Button = styled.button`
  cursor: pointer;
  padding: 6px 15px;
  width: 100px;
  background-color: #00a8ff;
  outline: none;
  font-size: 16px;
  border: none;
  color: white;
  border-radius: 5px;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: #005f8e;
  }
`;

const MultiButton = styled.button`
  cursor: pointer;
  display: ${props=>props.turn ===1 ? "block" : "none"};
  padding: 6px 15px;
  width: 100px;
  background-color:#1dd1a1;
  outline: none;
  font-size: 16px;
  border: none;
  color: white;
  border-radius: 5px;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color:#0b785b;
  }
`;
const Textarea = styled.textarea`
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
  margin: 10px 0px;
  color: ${(props) => (props.turn === 1 ? "#00a8ff" : "gray")};
`;

const Language = styled.select`
  font-size: 16px;
`;

const ReTranslate = ({
  onChange,
  original,
  handleTranslate,
  handleMultiTrans,
  onSelectChange,
  translation,
  result,
  jaccard,
  leven,
  turn,
}) => {
  const [textLeng, setTextLeng] = useState(0);

  useEffect(() => {
    setTextLeng(translation.length);
  }, [translation]);

  return (
    <Container>
      <TransContainer>
        <TransRow>
          <Label>원본</Label>
          <LangType>한국어 (Korean)</LangType>
        </TransRow>
        <Textarea
          value={original}
          onChange={onChange}
          placeholder="100자 이내로 입력해 주세요."
        />
        <TransRow>
          <TransInfo>글자 수 : {original.length} / 100</TransInfo>
          <Button  onClick={handleTranslate}> 번역 하기 </Button>
        </TransRow>
      </TransContainer>
      <Arrow turn={turn}>
        <i className="fas fa-angle-double-down" />
      </Arrow>
      <TransContainer>
        <TransRow>
          <Label>번역</Label>
          <Language onChange={onSelectChange}>
            <option value="en">영어 (English)</option>
            <option value="jp">일본어 (Japanese)</option>
            <option value="cn">중국어 간체 (Simpl. Chinese)</option>
          </Language>
        </TransRow>
        <Textarea turn={turn} readOnly
          value={translation}
          placeholder="여기에 번역 결과가 출력됩니다."/>
        <TransRow>
  <TransInfo>글자 수 : {textLeng}</TransInfo>
          <MultiButton  turn={turn} onClick={handleMultiTrans}> 다중 번역 </MultiButton>
        </TransRow>
      </TransContainer>
      <Arrow turn={turn}>
        <i className="fas fa-angle-double-down" />
      </Arrow>
      <TransContainer>
        <TransRow>
          <Label>재번역</Label>
          <LangType>한국어 (Korean)</LangType>
        </TransRow>
        <Textarea turn={turn} readOnly value={result} placeholder="여기에 재번역 결과가 출력됩니다." />
        <TransRow>
          <TransInfo>유사도</TransInfo>
          <TransInfo>{jaccard} - {leven}</TransInfo>
        </TransRow>
      </TransContainer>
    </Container>
  );
};

export default ReTranslate;
