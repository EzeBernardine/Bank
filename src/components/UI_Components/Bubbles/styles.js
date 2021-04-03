import styled from "styled-components";

export const Wrapper = styled("div")`
  position: relative;
  z-index: 2;
  &:before {
    position: absolute;
    z-index: -1;
    top: ${({ up = 2 }) => up + "%"};
    left: 0%;
    content: "";
    padding: ${({ thickness }) => thickness[0] + "px"};
    border: ${(props) =>
      props.color
        ? "1px solid " + props.color.up
          ? "1px solid " + props.color.up
          : "1px solid #6c006c0f"
        : " 1px solid #6c006c0f"};
    border-radius: 100%;
  }
  &:after {
    position: absolute;
    z-index: -1;
    bottom: ${({ end= 20 }) => end+ "%"};
    right: -50px;
    content: "";
    padding: ${({ thickness }) => thickness[1] + "px"};
    border: ${(props) =>
      props.color
        ? "1px solid " + props.color.right
          ? "1px solid " + props.color.right
          : " 1px solid #6c006c0f"
        : "  1px solid #6c006c0f"};
    border-radius: 100%;
    @media (max-width: 600px) {
      right: -10px;
    }
  }
`;

export const Container = styled("div")`
  position: relative;
  z-index: 2;
  &:before {
    position: absolute;
    z-index: -1;
    left: 0px;
    margin: auto;
    bottom: ${({ center = "0" }) => center + "%"};
    right: ${({ center = "0" }) => center + "%"};
    width: 0;
    height: 0;
    top: 0;
    content: "";
    padding: ${({ thickness }) => thickness[2] + "px"};
    border: ${(props) =>
      props.color
        ? "1px solid " + props.color.center
          ? "1px solid " + props.color.center
          : "1px solid #ff66001a"
        : "  1px solid #ff66001a"};
    border-radius: 100%;
  }
  &:after {
    position: absolute;
    z-index: -1;
    bottom: ${({ down = "0" }) => down + "%"};
    left: 0;
    content: "";
    padding: ${({ thickness }) => thickness[3] + "px"};
    border: ${(props) =>
      props.color
        ? "1px solid " + props.color.down
          ? "1px solid " + props.color.down
          : " 1px solid #ff66001a"
        : "1px solid #ff66001a"};
    border-radius: 100%;
  }
`;
