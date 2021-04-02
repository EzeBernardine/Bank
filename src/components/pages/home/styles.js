import styled from "styled-components";

export const Styles = styled.div``;

export const Section = styled.section`
  > div {
    position: relative;
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
  top: 0;
  flex: 1;
  display: flex;
  justify-content: center;

  li {
    color: ${({ theme }) => theme.palette.grey[300]};
    padding: ${({ theme }) => theme.spacing.xxsmall};
    margin: ${({ theme }) => theme.spacing.small + " 0"};
    cursor: pointer;
  }
  @media (max-width: 700px) {
    display: none;
  }
`;
