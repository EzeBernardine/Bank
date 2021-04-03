import styled from "styled-components";

export const PaginatorStyles = styled("div")``;

export const Paginator = styled("ul")`
  display: flex;
  list-style: none;
`;
export const ListItems = styled("li")`
  position: relative;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #6b6b6b;
  text-decoration: none;
  min-width: 30px;
  background: transparent;
  box-sizing: border-box;
  min-height: auto;
  transition: all 0.3s;
  font-weight: 400;
  line-height: 30px;
  border-radius: ${({ radius }) => (radius ? radius : "4px")};
  margin: 2px;
  cursor: pointer;
  :hover {
    z-index: 3;
    border-color: #ddd;
    background-color: #44444435;
  }
  a {
    font-size: 12px;
    color: #555;
  }

  &.active {
    color: #fff;
    font-weight: 700;
    box-shadow: 0 4px 5px 0 rgba(156, 39, 176, 0.14),
      0 1px 10px 0 rgba(156, 39, 176, 0.12),
      0 2px 4px -1px rgba(156, 39, 176, 0.2);
    border-color: #540c8c;
    background-color: ${({ theme }) =>
      theme ? theme.palette.primary.default : "#de8430"};
    a {
      color: white;
    }
  }
  &.disabled {
    cursor: not-allowed;
    color: #44444480;
    border-color: #44444435;
    background-color: #44444435;
  }
`;
