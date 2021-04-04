import styled from "styled-components";
import { Flex } from "../Box/styles";

export const Styles = styled.div`
  svg {
    width: 100px;
    height: 100px;
    fill: ${({ theme }) => theme.palette.grey[200]};
    display: inline-block;
  }
`;

const Loader = () => {
  return (
    <Flex>
      <Styles>
        <svg x="0px" y="0px" viewbox="0 0 100 100">
          <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              dur="1s"
              from="0 50 50"
              to="360 50 50"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </Styles>
    </Flex>
  );
};

export default Loader;
