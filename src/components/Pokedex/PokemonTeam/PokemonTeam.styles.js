import styled, { css } from "styled-components";

export const StyledPokemonTeam = styled.div`
  background-color: #eceff1;
  color: #4d4d4d;
  text-align: center;
  align-content: center;
  align-items: center;
`;

export const PokedexCardList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const StyledPokedexExperience = styled.p`
  margin: 5px;
`;

export const PokecardTitle = styled.h1`
  margin-bottom: 1rem;
  font-weight: bold;
`;

export const StyledPokedexWinner = styled.p`
  ${(props) => {
    if (props.isWinner === true) {
      return css`
        color: #4caf50;
      `;
    } else {
      return css`
        color: #e91e63;
      `;
    }
  }}
`;
