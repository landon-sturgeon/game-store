import styled, { keyframes, css } from "styled-components";

export const Slide = keyframes`
  0% { background-position: 100% 50%; }
  100% { background-position: 0% 51%; }
`;

export const StyledRuleRow = styled.tr`
  transition: all 0.2s;

  &:hover {
    cursor: pointer;
    background: rgba(227, 242, 253, 0.5);
  }

  td {
    padding: 0.3em;
    border-bottom: solid 1px black;
  }

  ${(props) => {
    if (props.active === true) {
      return css`
        &:hover {
          cursor: pointer;
          background: rgba(227, 242, 253, 0.5);
        }
      `;
    } else {
      return css`
        background: linear-gradient(
          to right,
          rgba(209, 196, 233, 1) 0%,
          rgba(209, 196, 233, 1) 0%,
          rgba(209, 196, 233, 1) 30%,
          rgba(277, 242, 253, 1) 40%
        );
        background-size: 300% 300%;
        animation: ${Slide} 1s ease 1;

        td:first-child {
          text-decoration: line-through;
        }

        &:hover {
          cursor: not-allowed;
        }
      `;
    }
  }}
`;

export const RuleRowName = styled.td`
  width: 50%;
  text-align: left;
`;

export const RuleRowScore = styled.td`
  width: 50%;
  text-align: right;
`;
