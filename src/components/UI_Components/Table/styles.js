import styled from "styled-components";

export const CustomTableMain = styled.section`
  .container {
    overflow-y: visible;
    overflow-x: scroll;
  }
  background: white;
  padding-bottom: ${({ paginator }) => !paginator && "20px"};
`;

export const TableBodyData = styled.td`
  padding: 1.2rem 1.8rem;
  font-weight: 400;
  font-size: 14px;
  span {
    font-size: 0.8rem;
    color: ${({ theme }) => (theme ? theme.palette.grey[300] : "#767675")};
  }
  color: ${({ theme }) => (theme ? theme.palette.grey[300] : "#767675")};
  @media (max-width: 1200px) {
    min-width: auto;
  }
  @media (max-width: 900px) {
    padding: 0.8rem 1.8rem;
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;
    min-width: 100%;
    align-items: flex-start;
    text-align: end;
    &:before {
      margin-right: 21px;
      text-align: start;
      color: ${({ theadColor }) => theadColor || "#033"};
      font-size: 0.8rem;
      font-weight: bold;
    }
    &:before {
      content: ${({ head }) => (head ? `'${head}'` : " ")};
      font-size: 0.7rem;
    }
  }
  @media (max-width: 600px) {
    font-size: 0.65rem;
    font-size: 14px;
    &:before {
      font-size: 14px;
    }
  }
`;

export const Paginator = styled("div")`
  background: white;
  padding: 1em 5px;
  display: ${({ paginator }) => (paginator ? "block" : "none")};
  ul {
    justify-content: flex-end;
  }
`;

export const Table = styled.table`
  background: white;
  border-collapse: collapse;
  text-align: start;
  width: 100%;
`;

export const TableHead = styled.thead`
  background: ${({ theme }) =>
    theme ? theme.palette.primary.default : "#fff"};
  :hover * {
    /* background: ${({ theme }) => (theme ? theme.palette.common.white : "#fff")}; */
    cursor: auto;
  }
  > tr {
    background-color: transparent;
  }
  @media (max-width: 900px) {
    display: none;
  }
`;
export const TableRow = styled.tr`
  background: ${({ theme }) => (theme ? theme.palette.common.white : "#fff")};
  cursor: pointer;
  border: none;
  border-bottom: ${({ gap }) =>
    gap ? `${gap} solid   #fff` : "5px solid  #fff "};
  &:hover {
    box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.27);
    background: ${({ rowHovColor }) => rowHovColor || "#fff7ee !important"};
  }
  /* &:not(.moreTableContent):nth-child(2n) {
    background: #d2ccc612;
  } */
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
  }
`;
export const TableHeadData = styled.th`
  text-align: start;
  color: ${({ theme }) => (theme ? theme.palette.common.white : "#033")};
  font-size: 16px;
  padding: 0.8em 0 0.8rem 1.8rem;
  min-width: 160px;
  @media (max-width: 1200px) {
    min-width: auto;
  }
`;
// export const Table = styled.table`
// ` ;
