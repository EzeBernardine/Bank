import React from "react";
import { Wrapper, Container } from "./styles";

const Index = ({ up, down, center, right, thickness, color, children }) => {
  return (
    <Wrapper
      up={up}
      right={right}
      center={center}
      down={down}
      thickness={thickness}
      color={color}
    >
      <Container
        up={up}
        right={right}
        center={center}
        down={down}
        thickness={thickness}
        color={color}
      >
        {children}
      </Container>
    </Wrapper>
  );
};

export default Index;
