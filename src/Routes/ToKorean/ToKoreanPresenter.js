import React from "react";
import styled from "styled-components";
import TranslateOriginal from "Components/ToKorean/TranslateOriginal";
import TranslateModule from "Components/ToKorean/TranslateModule";
import TranslateResult from "Components/ToKorean/TranslateResult";

const Container = styled.div`
  width: 100%;
  padding:30px;
  display:flex;
  flex-direction:column;
  padding-top: 80px;
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
  margin-top: 10px;
`;
const Row3 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Spacer = styled.div`
  min-width: 28%;
  margin: 10px;
`;
const ArrowSpacer = styled.i`
  font-size: 24px;
  color: gray;
`;

const ToKoreanPresenter = ({
  onChange,
  original,
  handleTranslate,
  onSelectChange,
  translation,
  result,
  totalCost,
  destination1,
  destination2,
  destination3,
  turn,
}) => {
  return (
    <>
      <Container>
        <Row1>
          <TranslateOriginal
            onChange={onChange}
            original={original}
            onSelectChange={onSelectChange}
            handleTranslate={handleTranslate}
            turn={turn}
          />
          <TranslateModule
            destination={destination1}
            translation={translation[0]}
            turn={turn}
          />
          <TranslateResult result={result[0]} turn={turn} />
        </Row1>
        <Row2>
          <Spacer>이번 세션에서 사용한 글자수 : {totalCost}</Spacer>
          <ArrowSpacer className="fas fa-angle-double-right" />
          <TranslateModule
            destination={destination2}
            translation={translation[1]}
            turn={turn}
          />
          <TranslateResult result={result[1]} turn={turn} />
        </Row2>
        <Row3>
          <Spacer></Spacer>
          <ArrowSpacer className="fas fa-angle-double-right" />
          <TranslateModule
            destination={destination3}
            translation={translation[2]}
            turn={turn}
          />
          <TranslateResult result={result[2]} turn={turn} />
        </Row3>
      </Container>
    </>
  );
};

export default ToKoreanPresenter;
