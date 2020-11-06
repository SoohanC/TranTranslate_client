import React from "react";
import styled, { keyframes } from "styled-components";
import noiseSource from "images/noise.png"


const noise = keyframes` 
  0% {
    transform: translateX(0px,0px); }
  10% {
    transform: translate(-100px, 100px);
  }
  20% {
    transform: translate(150px, -100px);
  }
  30% {
    transform: translate(-100px,100px);
  }
  40% {
    transform: translate(100px, -150px);
  }
  50% {
    transform: translate(-100px, 200px);
  }
  60% {
    transform: translate(-200px, -100px);
  }
  70% {
    transform: translateY(50px, 100px);
  }
  80% {
    transform: translate(100px, -150px);
  }
  90% {
    transform: translate(0px, 200px);
  }
  100% {
    transform: translate(-100px, 100px);
  }`;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index:4;
`;
const NoiseMaker =styled.div`
  position: absolute;
  top: -500px;
  right: -500px;
  bottom: -500px;
  left: -500px;
  background: transparent url(${noiseSource}) 0 0;
  background-size: 320px 320px;
  opacity: .3;
  animation: ${noise} 1s steps(8,end) infinite both;
`;


const Noise = ()=>{
    return(
        <Container>
            <NoiseMaker/>
        </Container>
    )
} 

export default Noise;
