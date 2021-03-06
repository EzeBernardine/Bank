import styled from "styled-components";

export const Styles = styled.header`
  height: 70px;
  padding: 0 5%;
  width: 100%;
  position: fixed;
  background: white;
  z-index: 100;
  right: 0;
  left: 0;
  top: 0;
  > div {
    > h4 {
      cursor: default;
    }
    span {
      margin-left: 15px;
    }

    .welcomeNote {
      border-right: 1px solid #e1d9d4;
      padding-right: 10px;
      cursor: default;
    }
    .avatar {
      cursor: pointer;
      position: relative;
      .image {
        border-radius: 50%;
      }
      > .modal {
        position: absolute;
        top: 120%;
        width: 300px;
        max-width: 300px;
        right: -70px;
        cursor: auto;
        > .overlay {
          position: fixed;
          top: 0;
          right: 0;
          left: 0;
          bottom: 0;
          background: #0600004f;
          z-index: 1000;
        }
        @media (max-width: 700px) {
          position: fixed;
          top: 0;
          cursor: auto;
          bottom: 0;
          right: 0;
          left: 0;
          max-width: 100%;
          width: 100%;
        }
      }
    }
    .logout {
      display: flex;
      padding: 0;
      background: transparent;
      color: ${({ theme }) => theme.palette.grey[200]};
    }
  }
  @media (max-width: 700px) {
    .welcomeNote {
      display: none;
    }
  }
`;
