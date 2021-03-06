import React from "react";
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
const Button = styled.button`
  cursor: pointer;
  padding: 6px 15px;
  width: 100px;
  background-color: #00a8ff;
  outline: none;
  font-size:16px;
  border: none;
  color: white;
  border-radius: 5px;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: #005f8e;
  }
`;
const Textarea = styled.textarea`
  width: 100%;
  height: 250px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid inherit;
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
    props.turn === 1 ? "2px solid #00a8ff" : "1px solid inherit"};
  font-size: 20px;
  resize: none;
  outline: none;
  transition: border 0.4s ease-in-out;
`;

const Arrow = styled.div`
  display: flex;
  justify-content: center;
  font-size:30px;
  margin:10px 0px;
  color:gray;
`;

const Language = styled.select`
  font-size:16px;
`;


const DirectTrans = ({langType, onChange, handleTranslate, original , onSelectChange,result, turn}) => {


  return (
    <Container>
      <TransContainer>
        <TransRow>
          <Label className="module-label">원본</Label>
          <Language onChange={onSelectChange} value={langType}>
            <option value="en">영어 (English)</option>
            <option value="jp">일본어 (Japanese)</option>
            <option value="cn">중국어 간체 (Simp. Chinese)</option>
            <option value="de">독일어 (German)</option>
            <option value="es">스페인어 (Spanish)</option>
            <option value="fr">프랑스어 (French)</option>
          </Language>
        </TransRow>
        <Textarea value={original} onChange={onChange} placeholder="100자 이내로 입력해 주세요."/>
        <TransRow>
          <TransInfo>글자 수 : {original.length} / 100</TransInfo>
          <Button onClick={handleTranslate}>번역 하기</Button>
        </TransRow>
      </TransContainer>
      <Arrow><i className="fas fa-angle-double-down" /></Arrow>
      <TransContainer>
        <TransRow>
          <Label className="module-label">다이렉트 번역</Label>
          <LangType className="language-type">한국어 (Korean)</LangType>
        </TransRow>
        <Result readOnly
        value={result}
        turn={turn} placeholder="여기에 재번역 결과가 출력됩니다."/>
        <TransRow>
        </TransRow>
      </TransContainer>
    </Container>
  );
};

export default DirectTrans;