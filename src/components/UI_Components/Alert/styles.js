import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-bottom: 30px;
  position: relative;
  padding: 10px 30px 10px 40px;
  border-radius: 4px;
  border: ${({ type, theme }) =>
    type === "success"
      ? `1px solid ${theme.palette.success.main}`
      : `1px solid ${theme.palette.error.main}`};
  background: ${({ type, theme }) =>
    type === "success"
      ? theme.palette.success.light
      : theme.palette.error.light};

  * {
    color: ${({ type, theme }) =>
      type === "success"
        ? theme.palette.success.main
        : theme.palette.error.main} ;
  }

  > svg {
    position: absolute;
    top: 10px;
    left: 10px;
  }
`;
