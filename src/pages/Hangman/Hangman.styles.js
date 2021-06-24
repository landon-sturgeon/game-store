import styled from "styled-components";

export const HangmanAppContainer = styled.div`
  text-align: center;
  font-family: "Coming Soon", cursive;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/61f7685f-47e5-49a0-b5cb-ca6b8cab4228/drok89-a7a2a550-ba87-40a6-9701-b635550d55b3.jpg");
  background-position: center center;
`;

export const HangmanComponentsContainer = styled.div`
  width: 400px;
  color: black;
  text-align: center;
  zoom: 1.3;

  img {
    border: 10px solid white;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.27),
      0 0 40px rgba(0, 0, 0, 0.06) inset;
  }

  h1 {
    font-size: 4rem;
    font-weight: 100;
    margin-bottom: 0.1em;
    margin-top: 0;
  }

  button {
    border: none;
    font-family: inherit;
    font-size: 1rem;
    cursor: pointer;
    width: 30px;
    margin: 5px 2px 2px 2px;
    letter-spacing: 1px;
    outline: none;
    background: #ffc107;
    color: #fff;
    box-shadow: 0 6px #ff9800;
    border-radius: 5px;
    padding-top: 4px;

    &:hover {
      background-color: #ff9800;
    }

    &:disabled {
      background: #bdbdbd;
      color: #eeeeee;
      box-shadow: 0 6px #9e9e9e;
    }
  }

  & .reset-button {
    width: auto;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    margin-bottom: 20px;
    background: #e68900;
    box-shadow: 0 6px #e68900;
    
    span {
      padding 10px;
    }

    &:hover {
      background: #cc7a00;
    }
  }
`;

export const HangmanWord = styled.p`
  letter-spacing: 1em;
  margin: 0.4em -1em 0.2em 0;
  font-szie: 2rem;
`;

export const HangmanButtons = styled.p`
  text-align: center;
  display: inline-block;
  width: 250px;
  margin-top: 0;
  margin-botton: 20px;
`;
