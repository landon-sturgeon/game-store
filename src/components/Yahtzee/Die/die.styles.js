import styled, { css } from "styled-components";

export const StyledDie = styled.div`
  font-size: 25px;
  display: inline-block;
  padding: 0.5em 0.8em;
  font-family: monospace;
  font-weight: bold;
  background-color: black;
  color: white;
  margin: 0.7em;

  ${(props) => {
    if (props.locked) {
      return css`
        background-color: grey;
      `;
    } else {
      return css`
        background-color: black;
      `;
    }
  }}
`;
