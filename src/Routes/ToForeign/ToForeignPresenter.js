import React from "react";
import styled, { keyframes } from "styled-components";
import TranslateOriginal from "Components/ToForeign/TranslateOriginal";
import TranslateModule from "Components/ToForeign/TranslateModule";
import TranslateResult from "Components/ToForeign/TranslateResult";
import TranslateMulti from "Components/ToForeign/TranslateMulti";
import Loading from "Components/Loading"


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
const ArrowSpacer = styled.div`
  min-width: 24px;
`;

const ToForeignPresenter = ({
  totalCost,
  onChange,
  original,
  handleTranslate,
  onSelectChange,
  translation,
  handleMultiTrans,
  result,
  similarity,
  multiSimil,
  multiDest1,
  multiDest2,
  multiTrans1,
  multiTrans2,
  multiResult1,
  multiResult2,
  loading,
  turn,
}) => {
  return (
    <>
      <Container>
        <Row1>
          <TranslateOriginal
            original={original}
            onChange={onChange}
            handleTranslate={handleTranslate}
            turn={turn}
          />
          <TranslateModule
            onSelectChange={onSelectChange}
            handleMultiTrans={handleMultiTrans}
            translation={translation}
            loading={loading}
            turn={turn}
          />
          <TranslateResult
            result={result}
            turn={turn}
            loading={loading}
            jaccard={similarity ? similarity[0] : null}
            leven={similarity ? similarity[1] : null}
            type="1"
          />
        </Row1>
        <Row2>
          <Spacer>이번 세션에서 사용한 글자수: {totalCost}</Spacer>
          <ArrowSpacer />
          <TranslateMulti
            destination={multiDest1}
            translation={multiTrans1}
            turn={turn}
          />
          <TranslateResult
            result={multiResult1}
            turn={turn}
            jaccard={multiSimil ? multiSimil[0] : null}
            leven={multiSimil ? multiSimil[1] : null}
            type="2"
          />
        </Row2>
        <Row3>
          <Spacer></Spacer>
          <ArrowSpacer />
          <TranslateMulti
            destination={multiDest2}
            translation={multiTrans2}
            turn={turn}
          />
          <TranslateResult
            result={multiResult2}
            turn={turn}
            jaccard={multiSimil ? multiSimil[2] : null}
            leven={multiSimil ? multiSimil[3] : null}
            type="2"
          />
        </Row3>
      </Container>
      {loading? <Loading/> :null}
    </>
  );
};

export default ToForeignPresenter;
