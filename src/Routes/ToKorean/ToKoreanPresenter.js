import React from "react";
import styled, { keyframes } from "styled-components";
import TranslateOriginal from "Components/ToKorean/TranslateOriginal";
import TranslateModule from "Components/ToKorean/TranslateModule";
import TranslateResult from "Components/ToKorean/TranslateResult";
import Loading from "Components/Loading";

const FadeIn = keyframes`
  0% {
    opacity:0;
  }
  100%{
    opacity:1;
  }
`;

const Container = styled.div`
  width: 100%;
  padding: 120px 100px 0px 100px;
  animation: 0.5s ${FadeIn} ease-in;
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
  min-width: 450px;
  margin: 10px 20px;
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
  loading,
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
      {loading ? <Loading /> : null}
    </>
  );
};

export default ToKoreanPresenter;
