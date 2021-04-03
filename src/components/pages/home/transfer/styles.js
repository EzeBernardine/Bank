import styled from "styled-components";

export const Styles = styled.div`
  margin-bottom: ${({theme}) => theme.spacing.xxlarge};
  position: relative;
  z-index: 10;
  form {
    width: 100%;
    max-width: 800px;

    .input-container {
      max-width: 700px;

      .input-wrap {
        label {
          margin-right: 15px;
          color: ${({ theme }) => theme.palette.grey[300]};
        }
        > div {
          max-width: 450px;
        }

        @media (max-width: 950px) {
          flex-direction: column;
          align-items: stretch;
          input,
          select {
            max-width: 100%;
            margin-top: 10px;
          }
        }
      }
    }

    .btn {
      button {
        @media (max-width: 500px) {
          width: 100%;
        }
      }
      * {
        font-weight: bold;
      }
      span:last-child {
        margin-left: 10px;
        display: flex;
      }
    }
  }
`;
