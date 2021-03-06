import styled from "styled-components";

export const Styles = styled.div`
  @keyframes drop {
    0% {
      transform: translateY(-100%);
      padding: 0 0;
    }
    100% {
      padding: 20px 0 0;
      transform: translateY(0%);
    }
  }
  overflow: hidden;
  > .profile-card {
    animation: drop 300ms linear forwards;
    position: relative;
    z-index: 10000;
    background: white;
    border-radius: 8px;
    overflow: hidden;
    text-align: center;
    > .image-section {
      padding: 20px 40px 0;
      background: #fff;
      > div {
        border: 9px solid #de8430;
      }
    }
    > .name-section {
      padding: 0 40px 40px;
      background: #fff;
    }

    > .location-details {
      border-radius: 70px 70px 0 0;
      padding: 20px 40px 10px;
      background: #de8430;
      color: ${({ theme }) => theme.palette.primary.dark};
    }

    @media (max-width: 700px) {
      max-width: 300px;
    }
  }
`;
