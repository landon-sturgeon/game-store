import styled from "styled-components";

export const StyledDadJokeViewer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  height: calc(100vh - var(--pixel-navbar-height));
  width: 100vw;
  font-family: "Rubik", sans-serif;
  color: #78909c;
  background: linear-gradient(
    135deg,
    rgba(179, 229, 252, 1) 0%,
    rgba(179, 229, 252, 1) 50%,
    rgba(240, 98, 146, 1) 50%,
    rgba(240, 98, 146, 1) 100%
  );
`;
