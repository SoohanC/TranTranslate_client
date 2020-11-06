import React from "react";
import styled from "styled-components";

const Container = styled.div``;
const Text = styled.div`
    font-size:24px;
    color:gray;
    text-align:center;
`;

const DirectModule = () =>{


    return(
        <Container>
            <Text className="animate__animated animate__rubberBand">한국어로 바로 번역합니다</Text>
        </Container>
    )
}

export default DirectModule