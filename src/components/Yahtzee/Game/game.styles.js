import styled, { keyframes } from "styled-components";

export const YahtzeeAppTitle = styled.h1`
  margin-top: 1rem;
  color: white;
  margin-bottom: 0;
  font-weight: 100;
  display: inline-block;
  font-size: 5rem;
  width: 50%;
`;

const Gradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

export const GameHeader = styled.header`
  width: 100%;
  background: linear-gradient(-45deg, #67ab7, #9c27b0);
  background-size: 400% 400%;
  -webkit-animation: ${Gradient} 15s ease infinite;
  -moz-animation: ${Gradient} 15s ease infinite;
  animation: ${Gradient} 15 ease infinite;
`;

export const StyledYahtzeeGame = styled.div`
  width: 30%;
  background: white;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.1);
  margin: 0 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const GameDiceSection = styled.div`
  width: 80%;
  margin-left; auto;
  margin-right: auto;
  margin-top: 0;
`;
