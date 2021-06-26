import styled from "styled-components";

export const StyledPokecard = styled.div`
  width: 300px;
  padding: 10px;
  margin: 1rem;
  box-shadow: 7px 10px 12px -5px var(--color-smoke);
  text-align: center;
  background-color: white;
  border-radius: 3px;
`;

export const StyledPokemonImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  background-color: #eceff1;
  border-radius: 3px;
  margin-bottom: 1rem;

  img {
    transition: all ease 500ms;
  }
  img:hover {
    transform: scale(1.1);
    opacity: 0.7;
  }
`;
