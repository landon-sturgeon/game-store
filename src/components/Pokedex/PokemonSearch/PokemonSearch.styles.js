import styled, { css, keyframes } from "styled-components";

export const Logo = styled.div`
  justify-self: start;
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchContainer = styled.div`
  width: 100%;
  height: 80px;
  justify-self: center;
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const shake = keyframes`
  10%, 90% { transform: rotate(5deg); }
  20%, 80% { transform: rotate(-5deg); }
  30%, 50%, 70% { transform: rotate(0deg); }
  40%, 60% { transform: rotate(0deg); }
`;

export const BallContainer = styled.div`
  overflow: hidden;
  width: 60px;
  height: 60px;
  border: 2px solid black;
  border-radius: 50%;
  position: relative;

  &:hover {
    animation: ${shake} 1.5s ease-in infinite;
  }
`;

export const UpperHalfBallContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 42%;
  background-color: #fe0065;
`;

export const BottomHalfBallContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 42%;
  background-color: #f2f2f2;
`;

export const CenterBallContainer = styled.div`
  background-color: white;
  width: 25%;
  height: 25%;
  border: 2px solid black;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const CenterBallLineContainer = styled.div`
  background: black;
  height: 100%;
  width: 100%;
`;

export const PokedexContainer = styled.div`
  height: 342px;
  width: calc(228px * 2);
  display: flex;
  border-radius: 10px;
  background-color: transparent;

  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const LeftPanelContainer = styled.div`
  background-color: #fe0065;
  box-sizing: border-box;
  height: 100%;
  width: 50%;
  display: grid;
  grid-template-rows: 23% 50% 27%;
  border: solid black 3px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-top-right-radius: 7px;
`;

export const LightsContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const LeftSvg = styled.svg`
  position: absolute;
  z-index: +5;
`;

export const BigLightBorderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  margin-top: 5px;
  height: 60px;
  width: 60px;
  border: solid black;
  border-radius: 50%;
  background-color: white;
`;

export const BigLight = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: solid black;

  ${(props) => {
    if (props.color === "blue") {
      return css`
        background-color: #3298cb;
      `;
    }
  }}
`;

export const BigDot = styled.div`
  height: 15px;
  width: 15px;
  position: relative;
  top: 7px;
  left: 10px;
  border-radius: 50%;

  ${(props) => {
    if (props.color === "light-blue") {
      return css`
        background-color: #85bdfe;
      `;
    } else if (props.color === "light-yellow") {
      return css`
        background-color: #fefecb;
      `;
    }
  }}
`;

export const SmallLightsContainer = styled.div`
  margin-left: 15px;
  margin-top: 10px;
  width: 70px;
  height: 100%;
  display: flex;
  align-self: start;
  justify-content: space-around;
`;

export const SmallLight = styled.div`
  border: solid black;
  width: 16px;
  height: 16px;
  border-radius: 50%;

  ${(props) => {
    if (props.color === "red") {
      return css`
        background-color: #ff0000;
      `;
    } else if (props.color === "yellow") {
      return css`
        background-color: #fecb65;
      `;
    } else if (props.color === "green") {
      return css`
        background-color: #32cb65;
      `;
    }
  }}
`;

export const Dot = styled.div`
  height: 5px;
  width: 5px;
  position: relative;
  top: 2px;
  left: 2px;
  border-radius: 50%;

  ${(props) => {
    if (props.color === "light-red") {
      return css`
        background-color: #fe98cb;
      `;
    } else if (props.color === "light-yellow") {
      return css`
        background-color: #fefecb;
      `;
    } else if (props.color === "light-green") {
      return css`
        background-color: #98fe00;
      `;
    }
  }}
`;

export const ScreenContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Screen = styled.div`
  width: 150px;
  height: 150px;
  border: solid black;
  border-radius: 0 0 0 17%;
  display: grid;
  grid-template-rows: 10% 72% 18%;
  background-color: white;
`;

export const TopScreenLights = styled.div`
  width: 50%;
  margin-top: 2px;
  display: flex;
  justify-self: center;
  justify-content: center;
  align-items: center;
`;

export const MiniLight = styled.div`
  border: solid black 1px;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  margin-right: 7px;

  ${(props) => {
    if (props.color === "red") {
      return css`
        background-color: #ff0000;
      `;
    } else if (props.color === "yellow") {
      return css`
        background-color: #fecb65;
      `;
    } else if (props.color === "green") {
      return css`
        background-color: #32cb65;
      `;
    }
  }}
`;

export const MainScreen = styled.div`
  height: 100%;
  width: 80%;
  justify-self: center;
  background-color: #98cb98;
  border: solid black 2px;
  border-radius: 5%;
  background-image: url(${(props) => props.imgSrc});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

export const BottomScreenLights = styled.div`
  display: flex;
  margin-top: 5px;
  width: 75%;
  justify-self: center;
  justify-content: space-between;
  align-items: center;

  & ${SmallLight} {
    border: solid black 2px;
    width: 12px;
    height: 12px;
  }

  & ${Dot} {
    height: 4px;
    width: 4px;
    top: 0.5px;
    left: 0.5px;
  }
`;

export const Line = styled.div`
  width: 18px;
  height: 2px;
  background-color: black;
  margin-top: 2px;
`;

export const ButtonsContainer = styled.div`
  display: grid;
  grid-template-rows: 40% 60%;
`;

export const BigButton = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: solid 2px black;
  background-color: #585858;
  margin-left: 7px;
`;

export const LongButton = styled.div`
  width: 35px;
  height: 6px;
  border-radius: 50px;
  border: 2px solid black;

  ${(props) => {
    if (props.color === "red") {
      return css`
        background-color: #ff0000;
      `;
    } else if (props.color === "yellow") {
      return css`
        background-color: #fecb65;
      `;
    } else if (props.color === "green") {
      return css`
        background-color: #32cb65;
      `;
    } else if (props.color === "light-blue") {
      return css`
        background-color: #85bdfe;
      `;
    }
  }}
`;

export const GreenScreen = styled.div`
  width: 80px;
  height: 30px;
  border-radius: 5px;
  border: solid black 2px;
  background-color: #3ab47d;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NameScreen = styled.span`
  width: 100%;
  font-family: "Press Start 2P", cursive;
  text-align: center;
  font-size: 8px;
  overflow-wrap: break-word;
`;

export const Circle = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  border: 1px solid black;
`;

export const UpperButtonsContainer = styled.div`
  display: flex;
  align-items: top;
  justify-content: start;
`;

export const LongButtonsContainer = styled.div`
  display: flex;
  width: 100px;
  justify-content: space-around;
  margin-left: 7px;
`;

export const NavButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: 27% 35% 38%;
`;

export const DotsContainer = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-self: center;
  justify-content: space-between;
  font-size: x-large;
  margin-bottom: 3px;
`;

export const RightNavContainer = styled.div`
  position: relative;
  top: -30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NavButton = styled.div`
  height: 52px;
  width: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavButtonVertical = styled.div`
  position: absolute;
  transform: rotate(90deg);
  background-color: #585858;
  border-radius: 5px;
  height: 12px;
  width: 52px;
  border: 2px solid black;
`;

export const NavButtonHorizontal = styled.div`
  position: absolute;
  background-color: #585858;
  border-radius: 5px;
  height: 12px;
  width: 52px;
  border: 2px solid black;
`;

export const NavCenterCircle = styled.div`
  height: 5px;
  width: 5px;
  border-radius: 50%;
  border: solid black 2px;
  z-index: +2;
`;

export const BorderTop = styled.div`
  border-top: 3.5px solid #585858;
  position: absolute;
  top: -3px;
  left: 20px;
  right: 19.5px;
`;

export const BorderBottom = styled.div`
  border-top: 3.5px solid #585858;
  position: absolute;
  top: 8px;
  left: 20px;
  right: 19.5px;
`;

export const BottomRightNavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  & ${DotsContainer} {
    align-items: center;
    justify-content: center;
  }

  & ${SmallLight} {
    border: solid black 2px;
    width: 8.5px;
    height: 8.5px;
    margin-right: 3px;
    margin-top: 10px;
  }

  & ${Dot} {
    height: 2.5px;
    width: 2.5px;
    top: 0.25px;
    left: 0.25px;
  }
`;

export const RightPanel = styled.div`
  background-color: #fe0065;
  box-sizing: border-box;
  position: relative;
  height: 100%;
  width: 50%;
  display: grid;
  grid-template-rows: 24% repeat(4, 19%);
  border-bottom: solid black 3px;
  border-bottom-right-radius: 10px;

  &::before {
    content: "";
    position: absolute;
    left: -3px;
    bottom: 0;
    width: 100%;
    height: 265px;
    border-right: solid black 3px;
    border-bottom-right-radius: 7px;
  }
`;

export const TopScreenContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RightPanelScreen = styled.div`
  font-family: "Press Start 2P", cursive;
  width: 146px;
  height: 64px;
  background-color: #9e9d9d;
  border: solid black 2px;
  border-radius: 4px;
  font-size: xx-small;
  padding-left: 2px;
  padding-right: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
  padding-left: 8px;
  line-height: 2;
`;

export const SquareButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BlueSquaresContainer = styled.div`
  width: 146px;
  height: 60px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
`;

export const BlueSquare = styled.div`
  border-radius: 2px;
  border: black 1.5px solid;
  background-color: #7ca9f7;
  box-shadow: inset -2px -2px #3298cb;
`;

export const CenterButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const CenterLeftContainer = styled.div`
  display: grid;
`;

export const SmallRedsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;

  & ${SmallLight} {
    border: solid black 2px;
    width: 7px;
    height: 7px;
    margin-right: 10px;
    margin-top: 10px;
  }

  & ${Dot} {
    height: 2.5px;
    width: 2.5px;
    top: -1px;
    left: -0.5px;
  }
`;

export const WhiteSquaresContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WhiteSquare = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 5px;
  border: black 2px solid;
  background-color: #ffffff;
  box-shadow: inset -2px -2px gray;
`;

export const CenterRightContainer = styled.div`
  display: grid;
`;

export const ThinButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ThinButton = styled.div`
  width: 35px;
  height: 5px;
  border: 2px solid black;
  background-color: #585858;
  margin-left: 10px;
  margin-top: 5px;
`;

export const YellowButton = styled.div`
  justify-self: end;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: solid 2px black;
  margin-left: 7px;

  ${(props) => {
    if (props.color === "yellow") {
      return css`
        background-color: #fecb65;
      `;
    }
  }}

  & ${BigDot} {
    height: 7px;
    width: 7px;
    position: relative;
    top: 3px;
    left: 3px;
    border-radius: 50%;
  }
`;

export const BottomScreensContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  & ${RightPanelScreen} {
    width: 64px;
    height: 25px;
  }
`;

export const Mention = styled.div`
  margin-top: 10px;
  width: 150px;
  display: grid;
  text-align: center;
  font-size: x-large;
`;

export const LinkLogo = styled.div`
  width: 25px;
  height: 25px;
  background-position: CenterBallContainer;
  background-repeat: no-repeat;
  background-size: contain;
`;
