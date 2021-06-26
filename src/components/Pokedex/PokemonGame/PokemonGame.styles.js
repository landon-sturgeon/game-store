import styled from "styled-components";

export const StyledPokemonGame = styled.div`
  font-family: "Work Sans";
`;

export const ReplayButton = styled.button`
  background-color: #eceff1;
  border: 1px solid var(--color-smoke);
  color: black;
  transition: all ease 0.2s;
  width: 200px;
  font-family: "Work Sans";
  font-size: 2rem;
  margin: 20px;
  border-radius: 5px;

  &:hover {
    background-color: black;
    color: #eceff1;
  }
`;

export const ReplayButtonContainer = styled.div`
  background-color: #eceff1;
  text-align: center;
  align-content: center;
  align-items: center;
`;
