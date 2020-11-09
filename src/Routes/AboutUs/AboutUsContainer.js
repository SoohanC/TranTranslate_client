import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 1080px;
  margin: auto;
  padding-top: 40px;
  margin-top: 110px;
  display: flex;
  flex-direction: column;
`;

const Logo = styled.span`
  margin: 10px 0px 20px 0px;
  font-family: "Amatic SC", cursive;
  color: #00a8ff;
  font-size: 60px;
`;
const LargeTitle = styled.span`
  font-size: 22px;
  margin-bottom: 20px;
  font-weight: 600;
  color: #1e272e;
  padding: 0px 10px;
`;
const Paragraph = styled.p`
  font-size: 15px;
  line-height: 24px;
  margin-bottom: 40px;
  color: #1e272e;
  padding: 0px 10px;
`;

const SmallTitle = styled.span`
  font-size: 18px;
  margin-bottom: 20px;
  font-weight: 600;
  color: #1e272e;
  padding: 0px 10px;
`;

const AboutUsContainer = () => {
  return (
    <Container>
      <Logo className="animate__animated animate__fadeInLeft">TranTranslate</Logo>
      <LargeTitle className="animate__animated animate__fadeInLeft animate__delay-1s">개요</LargeTitle>
      <Paragraph className="animate__animated animate__fadeInLeft animate__delay-1s">
        파파고,Google Translate 와 같은 번역 프로그램의 정확도를 더블
        체크할 수 있도록 도와주는 Web Application. 우리는 외국어 번역을 위해
        번역 어플리케이션을 많이 써왔습니다. 인공신경망 기술의 발달로 인해,
        예전에 비해 많은 성능 향상이 이루어졌지만, 번역 어플리케이션은 아직
        완벽하지 않습니다. 단순히 번역을 돌리고 결과값을 가져다가 쓰는 경우엔,
        동음이의어 또는 단어별 미세한 뉘앙스 차이로 인해서, 잘못된 의미가
        전달되거나 오해를 불러일으키기도 합니다. 저는 10년간의 해외 생활을 통해,
        번역 어플을 사용하는 노하우를 익혔습니다. 그 노하우는 바로 다중언어
        번역과 재번역을 통한 교차검증이었습니다. 그런데 이러한 방식으로 번역
        어플리케이션을 사용하는 사람이 주위에 생각보다 많다는 걸 최근에 알게
        되었습니다.
      </Paragraph>
      <SmallTitle className="animate__animated animate__fadeInLeft animate__delay-2s">다중 언어 번역? 재번역?</SmallTitle>
      <Paragraph className="animate__animated animate__fadeInLeft animate__delay-2s">
        일반적인 번역은 한국어-외국어, 또는 외국어-한국어 입니다. 그러나
        우리는 한국어가 외국어로 제대로 번역 되었는지, 또는 외국어가 한국어로
        번역이 되었는지, 두가지 언어에 어느정도의 지식이 있지 않으면 알기
        힘듭니다. 만약 스페인어를 모른다면 어떻게 이 번역이 잘되었는지를 알 수
        있을까요?
      </Paragraph>
      <SmallTitle className="animate__animated animate__fadeInLeft animate__delay-3s">재번역</SmallTitle>
      <Paragraph className="animate__animated animate__fadeInLeft animate__delay-3s">
        내가 잘 알지 못하는 외국어를 번역하는 방법은 당연히 파파고,Google
        Translate 와 같은 번역 프로그램입니다. 많은 사람들이 번역의 결과물을
        다시 한국어로 돌려보고 확인하는 방식을 통해서 번역이 제대로 되었는지를n
        확인한다고 합니다. 만약 입력값과, 번역된 결과물을 한국어로 재번역 한
        값이 비슷하다면 괜찮게 번역되었다고 볼수도 있겠죠. <br/><br/>기본적으로는
        TranTranslate가 완벽한 번역을 자동으로 해주는 것은 아닙니다. 그러나
        TranTranslate는 다중언어-재번역 과정을 사용자가 더 쉽게 사용할 수
        있도록 만들어 줄 수 있을 것입니다.
      </Paragraph>
    </Container>
  );
};

export default AboutUsContainer;
