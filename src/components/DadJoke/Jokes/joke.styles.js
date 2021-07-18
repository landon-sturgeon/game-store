import styled from "styled-components";

export const StyledJoke = styled.div`
  display: flex;
  border-bottom: 2px solid #eeeeee;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  padding: 1rem;
`;

export const JokeButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;
`;

export const JokeText = styled.div`
  width: 75%;
  font-size: 1.2rem;
`;

export const NumberVotesSpan = styled.span`
  width: 50px;
  height: 50px;
  line-height: 45px;
  text-align: center;
  font-size: 20px;
  font-weight: 300;
  border-radius: 50%;
  border: 3px solid red;
  box-shadow: 0 10px 38px rgba(0, 0, 0, 0.2), 0 10px 12px rgba(0, 0, 0, 0.1);
`;

export const SmileyContainer = styled.div`
  font-size: 3rem;
  margin-left: auto;
  border-radius: 50%;
  box-shadow: 0 10px 38px rgba(0, 0, 0, 0.2), 0 10px 12px rgba(0, 0, 0, 0.1);
`;
