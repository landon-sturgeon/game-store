import styled, { css } from "styled-components";

export const Container = styled.div`
  min-width: 350px;
  min-height: 350px;
  margin: 20px;
  border-radius: 20px;
  position: relative;
  -webkit-transition: 1.5s ease-in-out;
  transition: 1.5s ease-in-out;
  transform-style: preserve-3d;
  &:hover {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
`;

export const CardSide = styled.div`
  position: absolute;
  text-align: center;
  width: 100%;
  height: 100%;
  color: var(--color-text-standard);
  transform-style: preserve-3d;
  backface-visibility: hidden;
  border-radius: 20px;
  ${(props) => {
    if (props.front === true) {
      return css`
        background-size: 100% 70%;
        background-repeat: none;
        background-color: black;
        background-image: url(${props.backgroundImg});
        background-repeat: no-repeat;
        background-position: top;

        h1 {
          margin-top: 80%;
        }
      `;
    } else {
      return css`
        background-color: var(--color-background-primary);
        transform: rotateY(180deg);
        z-index: 0;
        padding-top: 10px;
        background-image: url(https://userscontent2.emaze.com/images/f9538183-0ff9-478f-b964-c8ab90421e3b/3d28e192fda5c17250f96a2779c84475.jpg);
        h1 {
          margin: 0;
        }
      `;
    }
  }}
`;

export const Content = styled.div`
  transform: translateZ(70px) scale(0.8);
  line-height: 1.5em;

  h1 {
    position: relative;
    text-shadow: 0px 0px 5px black;
  }

  h1:before {
    content: "";
    position: absolute;
    bottom: -20px;
    height: 3px;
    background-color: var(--color-text-accent);
    width: 70px;
    left: 50%;
    transform: translateX(-50%);
  }

  p {
    margin-top: 50px;
    line-height: 2em;
  }
`;

export const CardForm = styled.form`
  text-align: left;

  label,
  input {
    display: block;
  }

  input,
  textarea {
    background: transparent;
    border: 0;
    border-bottom: 2px solid var(--color-smoke);
    padding: 5px;
    width: 100%;
    color: var(--color-text-standard);
  }

  label {
    margin: 15px 0;
  }

  input[type="submit"] {
    display: block;
    width: auto;
    margin: 10px auto;
    padding: 5px 10px;
    border: 3px solid var(--color-button-border-standard);
    border-radius: 4px;
    color: var(--color-text-standard);
    cursor: pointer;

    &:hover {
      background-color: var(--color-background-primary);
    }
  }
`;
