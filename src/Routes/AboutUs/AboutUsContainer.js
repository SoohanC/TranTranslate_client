import { Grid, useMediaQuery, useTheme, withStyles } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import logo from "../../images/logo_b.png";

const styles = (theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
  },
});

 const Container = styled.div`
  width: 100%;
  padding: ${props=>props.matches ? "60px 50px 0px 50px" : "120px 50px 0px 50px"};
  margin-top: 30px;
`;
const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const MainTitle = styled.div`
  font-size:${props=>props.matches ? "36px" : "30px"};
  font-weight: 600;
  color: #1e272e;
  margin: 20px 0px;
`;

const Logo = styled.span`
  margin: 10px 0px 0px 0px;
  font-family: "Amatic SC", cursive;
  color: #00a8ff;
  font-size: ${props=>props.matches ? "80px" : "60px"};
`;
const Symbol = styled.img`
  width: ${props=>props.matches ? "80px" : "60px"};
  margin-left: 20px;
  object-fit: contain;
`;
const Paragraph = styled.p`
  font-size: 15px;
  line-height: 24px;
  margin-bottom: 30px;
  color: #1e272e;
`;

const SmallTitle = styled.div`
  font-size: ${props=>props.matches ? "26px" : "20px"};
  margin-bottom: 20px;
  font-weight: 600;
  color: #1e272e;
`;

const AboutUsContainer = (props) => {
  const { classes } = props;
  const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <Container matches={matches}>
      <Grid container className={classes.container}>
        <Grid item xs={12} sm={10} md={8} lg={6}>
          <Header className="animate__animated animate__fadeInLeft">
            <Logo matches={matches} >TranTranslate</Logo>
            <Symbol src={logo} matches={matches} />
          </Header>
          <MainTitle className="animate__animated animate__fadeInLeft animate__delay-1s" matches={matches}>
            서비스 소개
          </MainTitle>
          <Paragraph className="animate__animated animate__fadeInLeft animate__delay-1s">
            TranTranslate는 파파고 번역, 카카오 번역,Google Translate 와 같은
            번역 프로그램의 정확도를 교차 검증할 수 있게 도와주는 웹
            어플리케이션입니다. 인공신경망 기술의 발달로 인해, 예전에 비해 많은
            성능 향상이 이루어져 왔지만, 번역 어플리케이션은 아직 완벽하지
            않습니다. 번역을 돌리고 결과값을 그대로 가져다 쓰다가, 동음이의어
            또는 미세한 뉘앙스 차이로 인해서, 잘못된 의미가 전달되거나 오해를
            불러일으키기도 합니다.
          </Paragraph>
          <SmallTitle className="animate__animated animate__fadeInLeft animate__delay-2s" matches={matches}>
            다중 언어 번역과 재번역
          </SmallTitle>
          <Paragraph className="animate__animated animate__fadeInLeft animate__delay-2s">
            우리는 일반적으로, 한국어-외국어, 또는 외국어-한국어 번역을
            사용합니다. 그러나 대상 외국어를 잘 모르는 경우엔 한국어가 외국어로
            제대로 번역 되었는지, 또는 외국어가 한국어로 번역이 되었는지 알기
            힘듭니다. 애초에, 외국어를 잘했다면 번역기능을 그렇게 필요로 하지도
            않았을 것입니다.
            <br />
            <br />
            내가 잘 알지 못하는 외국어를 번역하는 방법은 보통 파파고,Google
            Translate 와 같은 번역 프로그램입니다. 조사 결과, 상당수의 사람들이
            번역의 결과물을 다시 한국어로 돌려보고 확인하는 방식을 통해서 번역이
            제대로 되었는지를 확인한다고 합니다. 만약 입력값과, 번역된 결과물을
            한국어로 재번역 한 값이 비슷하다면 괜찮게 번역 되었다고 볼 수도
            있을겁니다. <br />
            <br />
            외국어를 한국어로 번역하는 경우에 대해서도 생각해 봅시다. 외국어를
            한국어로 번역한 것과, 그 외국어를 사람들이 많이 사용하는 다른 외국어
            (영어,스페인어,중국어,일본어) 등으로도 같이 번역해본뒤 그것을
            한국어로 번역한 것을 처음에 외국어를 한국어로 바로 번역했던 것과
            비교해봤을 때 비슷하면, 의도가 잘 전달된 것이라고 볼 수 있을겁니다.
            <br />
            <br />
            TranTranslate가 완벽한 번역을 자동으로 해주는 것은 아닙니다. 그러나
            TranTranslate는 다중언어-재번역 과정을 사용자가 더 쉽게 사용할 수
            있도록 만들어 줄 수 있을 것입니다.
          </Paragraph>
        </Grid>
      </Grid>
    </Container>
  );
};

export default withStyles(styles)(AboutUsContainer);
