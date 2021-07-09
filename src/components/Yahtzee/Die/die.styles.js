import styled, { css, keyframes } from "styled-components";

// export const StyledDie = styled.i`
//   font-size: 25px;
//   display: inline-block;
//   padding: 0.5em 0.8em;
//   font-family: monospace;
//   font-weight: bold;
//   background-color: black;
//   color: white;
//   margin: 0.7em;

//   ${(props) => {
//     if (props.locked) {
//       return css`
//         background-color: grey;
//       `;
//     } else {
//       return css`
//         background-color: black;
//       `;
//     }
//   }}
// `;

export const Rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const StyledDie = styled.i`
  color: white;
  text-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  font-size: 3.5rem;

  ${(props) => {
    if (props.locked) {
      return css`
        opacity: 0.5;
        text-shadow: none;
      `;
    } else {
      return css`
        &:hover {
          cursor: pointer;
          opacity: 0.8;
        }

        ${(props) => {
          if (props.rolling) {
            return css`
              animation: ${Rotate} 1s ease-out;
            `;
          }
        }}
      `;
    }
  }}

  &:[disabled] {
    cursor: not-allowed;
  }
`;
