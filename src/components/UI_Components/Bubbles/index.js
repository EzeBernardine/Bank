import React from "react";
import { Wrapper, Container } from "./styles";

const Index = ({ up, down, center, end, thickness, color, children }) => {
  return (
    <Wrapper
      up={up}
      end={end}
      center={center}
      down={down}
      thickness={thickness}
      color={color}
    >
      <Container
        up={up}
        end={end}
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
