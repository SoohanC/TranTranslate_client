import React from "react";
import styled from "styled-components";
import TranslateOriginal from "Components/ToKorean/TranslateOriginal";
import TranslateModule from "Components/ToKorean/TranslateModule";
import TranslateResult from "Components/ToKorean/TranslateResult";

const Container = styled.div`
  width: 100%;
  padding: 120px 100px 0px 100px;
`;

const Row1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Row2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
`;
const Row3 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Spacer = styled.div`
  min-width: 450px;
  margin: 10px 20px;
`;
const ArrowSpacer = styled.div`
  min-width: 24px;
`;

const ToKoreanPresenter = ({
  onChange,
  handleTranslate,
  onSelectChange,
  translation,
  handleMultiTrans,
  result,
  multiResult1,
  multiResult2,
  turn,
}) => {
  return (
    <Container>
      <Row1>
        <TranslateOriginal
          onChange={onChange}
          handleTranslate={handleTranslate}
          turn={turn}
        />
        <TranslateModule
          onSelectChange={onSelectChange}
          handleMultiTrans={handleMultiTrans}
          translation={translation}
          turn={turn}
        />
        <TranslateResult result={result} turn={turn} />
      </Row1>
      <Row2>
        <Spacer>이번 세션에서 사용한 글자수</Spacer>
        <ArrowSpacer />
        <TranslateModule
          onSelectChange={onSelectChange}
          handleMultiTrans={handleMultiTrans}
          translation={translation}
          turn={turn}
        />
        <TranslateResult result={multiResult1} turn={turn}/>
      </Row2>
      <Row3>
        <Spacer></Spacer>
        <ArrowSpacer />
        <TranslateModule
          onSelectChange={onSelectChange}
          handleMultiTrans={handleMultiTrans}
          translation={translation}
          turn={turn}
        />
        <TranslateResult result={multiResult2} turn={turn}/>
      </Row3>
    </Container>
  );
};

export default ToKoreanPresenter;
