import styled from "styled-components";

export const Styles = styled.div``;

export const TransactionDate = styled.div`
  width: 100%;
  .transaction-dates {
    position: relative;
    flex: 1;
    > div {
      padding: 0 10px;
      span {
        white-space: nowrap;
        min-width: max-content;
        margin-top: 10px;
      }
    }
    :after {
      position: absolute;
      top: 0;
      bottom: 0;
      background: #5b5551;
      width: 1px;
      right: 0;
      left: 0;
      margin: auto;
      content: "";
    }
    @media (max-width: 1015px) {
      margin: 30px 0 0 0;
    }
  }
`;

export const Section = styled.section`
  margin-top: 70px;
  > div {
    position: relative;
    > .main {
      border-left: ${({ theme }) => "1px solid " + theme.palette.grey.line};
      > div {
        position: relative;
        &:not(:first-child):after {
          position: absolute;
          content: "";
          height: 20px;
          width: 20px;
          background-color: ${({ theme }) => theme.palette.grey[100]};
          border-radius: 50%;
          left: -59px;
          top: 6px;
        }
      }
    }

    @media (max-width: 700px) {
      > div {
        width: 100%;
        padding: ${({ theme }) => theme.spacing.res_xxsmall};
      }
    }
  }
`;

export const Nav = styled.nav`
  padding: ${({ theme }) => theme.spacing.xlarge + " " + theme.spacing.small};
  position: sticky;
  top: 70px;
  flex: 1;
  display: flex;
  justify-content: center;

  li {
    color: ${({ theme }) => theme.palette.grey[300]};
    padding: ${({ theme }) => theme.spacing.xxsmall};
    margin: ${({ theme }) => theme.spacing.large + " 0"};
    cursor: pointer;
    :hover {
      color: ${({ theme }) => theme.palette.grey[500]};
    }
  }
  @media (max-width: 700px) {
    display: none;
  }
`;
