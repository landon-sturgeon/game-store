import styled from "styled-components";

export const JokeListContainer = styled.div`
  display: flex;
  width: 80%;
  height: 80%;
  min-width: 800px;
`;

export const JokeListJokesContainer = styled.div`
  height: 90%;
  background: white;
  align-self: center;
  width: 70%;
  overflow-y: scroll;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.1);
`;

export const JokeListSidebar = styled.div`
  background: #9575cd;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30%;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.1),
    inset 0 0 25px #7e57c2;
  z-index: 2;

  img {
    width: 50%;
    border-radius: 50%;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.1),
      inset 0 0 25px #7e57c2;
  }
`;

export const JokeListTitle = styled.h1`
  font-size: 4rem;
  margin: 2rem;
  color: white;
  font-weight: 300;
  letter-spacing: 0.6rem;

  span {
    font-weight: 700;
    letter-spacing: 0;
  }
`;

export const JokeListGetMoreButton = styled.button``;
