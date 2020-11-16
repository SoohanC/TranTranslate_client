import { Grid, Hidden, useMediaQuery, useTheme, withStyles } from "@material-ui/core";
import Earth from "Components/Earth";
import Noise from "Components/Noise";
import React from "react";
import styled, { keyframes}  from "styled-components";

const styles = (theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
  },
});

const RerouteAnimation = keyframes`
  0% {
    transform: translateX(100%)
  }
  100% {
    transform: translateX(0%)
  }
`;

const FadeIn = keyframes`
0% {
    opacity:0;
  }
  100%{
    opacity:1;
  }
`;

const LogoFadeIn = keyframes`
0% {
    opacity:0;
  }
  50%{
    opacity:0;
  }
  100%{
    opacity:1;
  }
`;

const MessageFadeIn = keyframes`
0% {
    opacity:0;
  }
  70%{
    opacity:0;
  }
  100%{
    opacity:1;
  }
`;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color:${(props) => (props.serverStatus ? " #00a8ff" : "#383838")};
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index:6;
`;

const Jumbotron = styled.div`
  width:100%;
  padding:0px 30px;
  margin: 35px auto;
  animation: ${FadeIn} 0.4s ease-in-out;
`;

const Title = styled.div`
  color: white;
  font-size: ${props=>props.matches ? "44px": "28px"};
  line-height: ${props=>props.matches ? "52px": "38px"};
`;
const Transition = styled.div`
  display: ${(props) => (props.reRouting ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  animation: ${RerouteAnimation} 0.8s ease-in;
  z-index: 6;
`;

const Button = styled.button`
  cursor: pointer;
  margin: 15px 0px 0px 0px;
  padding: 10px 20px;
  border-radius: 5px;

  outline: none;
  border: none;
  font-size: 16px;
  color: white;
  background-color: black;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  &:hover {
    color: gray;
    background-color: white;
  }
`;
const Status = styled.button`
  margin: 15px 0px 0px 0px;
  padding: 10px 20px;
  border-radius: 5px;
  outline: none;
  border: none;
  font-size: 16px;
  color: white;
  background-color: black;
`;

const Logo = styled.div`
  position: fixed;
  top: ${props=>props.matches ? "435px" :"50%"};
  width: 100%;
  text-align: center;
  font-family: "Amatic SC", cursive;
  font-size: 80px;
  color: white;
  z-index: 6;
`;

const Logo2 = styled.div`
  display: ${(props) => (props.reRouting ? "block" : "none")};
  position: fixed;
  top: ${props=>props.matches ? "435px" :"50%"};
  width: 100%;
  text-align: center;
  font-family: "Amatic SC", cursive;
  font-size: 80px;
  color: #00a8ff;
  z-index: 7;
  animation: ${LogoFadeIn} 0.8s ease-in;
`;
const Message = styled.div`
  display: ${(props) => (props.reRouting ? "block" : "none")};
  position: fixed;
  top: ${props=>props.matches ? "530px" :"calc(50% + 85px)"};
  width: 100%;
  text-align: center;
  font-size: 20px;
  color: #00a8ff;
  z-index: 7;
  animation: ${MessageFadeIn} 1.2s ease-in;
`;

const Blink = keyframes`
50% {
  opacity: 0;
}`;
const Icon = styled.i`
  margin-right: 5px;
  font-size: 14px;
  color: ${(props) => (props.serverStatus ? "#00ff44" : "red")};
  animation: ${Blink} 1.5s linear infinite;
`;

const HomePresenter = (props) => {
  const { classes } = props;
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <>
      <Container reRouting={props.reRouting} serverStatus={props.serverStatus} >
        <Grid container className={classes.container} >
        <Grid item xs={12} sm={10} md={8} lg={6} xl={4}>
        <Jumbotron>
          {props.serverStatus ? <Title matches={matches}>
            번역기가 돌려준 번역. <br />
            과연 믿고 써도 되는 걸까?
          </Title> : <Title matches={matches}>
            죄송합니다. <br />
            현재 점검중입니다.
          </Title>}
          {!props.serverStatus ? (
            <Status>
              <Icon className="fas fa-circle" /> 현재 서버 접속 불가
            </Status>
          ) : (
            <Button onClick={props.handleReroute}>
              <Icon className="fas fa-globe-asia" serverStatus={props.serverStatus} />{" "}
              TranTranslate 시작하기
            </Button>
          )}
        </Jumbotron>
        </Grid>
        </Grid>
        <Hidden smDown>
          <Earth serverStatus={props.serverStatus} matches={matches}/>
        </Hidden>
      </Container>
      {!props.serverStatus && <Noise/>}
      <Logo matches={matches}>TranTranslate</Logo>
      <Logo2 matches={matches} reRouting={props.reRouting}>TranTranslate</Logo2>
      <Message matches={matches} reRouting={props.reRouting}>환영합니다.</Message>
      <Transition reRouting={props.reRouting}></Transition>
    </>
  );
};

export default withStyles(styles)(HomePresenter);
