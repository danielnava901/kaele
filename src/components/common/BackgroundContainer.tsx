import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100%;
`;

function BackgroundContainer({ imageUrl, children }) {
    return (
        <Container imageUrl={imageUrl}>
            {children}
        </Container>
    );
}

export default BackgroundContainer;
