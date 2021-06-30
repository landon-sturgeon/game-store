import React, { Component } from "react";
import axios from "axios";
import * as PokedexStyles from "./PokemonSearch.styles";

class PokemonSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
      height: 70,
      weight: 6.9,
      type: "grass",
      id: 1,
      name: "bulbasaur",
    };
    this.findPokemon = this.findPokemon.bind(this);
  }

  async findPokemon(el) {
    if (el.key === "Enter") {
      await axios
        .get(`https://pokeapi.co/api/v2/pokemon/${el.target.value}`)
        .then((res) => {
          let id = ("00" + res.data.id).slice(-3);
          this.setState({
            imgSrc: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`,
            height: res.data.height * 10,
            weight: res.data.weight / 10,
            type: res.data.types[0].type.name,
            id: res.data.id,
            name: res.data.name,
          });
        });
    }
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <PokedexStyles.Logo>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/269px-International_Pok%C3%A9mon_logo.svg.png"
            height={"100%"}
            alt="logo"
          />
        </PokedexStyles.Logo>
        <PokedexStyles.SearchContainer>
          <input
            style={{ margin: "10px", height: "30px", textAlign: "center" }}
            id="name-input"
            type="text"
            placeholder="Name / id"
            onKeyDown={this.findPokemon}
          />
          <PokedexStyles.BallContainer id="search-btn">
            <PokedexStyles.UpperHalfBallContainer />
            <PokedexStyles.BottomHalfBallContainer />
            <PokedexStyles.CenterBallContainer />
            <PokedexStyles.CenterBallLineContainer />
          </PokedexStyles.BallContainer>
        </PokedexStyles.SearchContainer>
        <PokedexStyles.PokedexContainer>
          <PokedexStyles.LeftPanelContainer>
            <div className="left-top-container">
              <PokedexStyles.LeftSvg height={"100px"} width={"255px"}>
                <polyline
                  points={"0,75 70,75 90,38 224,38"}
                  style={{ fill: "none", stroke: "black", strokeWidth: 3 }}
                />
              </PokedexStyles.LeftSvg>
              <PokedexStyles.LightsContainer>
                <PokedexStyles.BigLightBorderContainer>
                  <PokedexStyles.BigLight color={"blue"}>
                    <PokedexStyles.BigDot color={"light-blue"} />
                  </PokedexStyles.BigLight>
                </PokedexStyles.BigLightBorderContainer>
                <PokedexStyles.SmallLightsContainer>
                  <PokedexStyles.SmallLight color={"red"}>
                    <PokedexStyles.Dot color={"light-red"} />
                  </PokedexStyles.SmallLight>
                  <PokedexStyles.SmallLight color={"yellow"}>
                    <PokedexStyles.Dot color={"light-yellow"} />
                  </PokedexStyles.SmallLight>
                  <PokedexStyles.SmallLight color={"green"}>
                    <PokedexStyles.Dot color={"light-green"} />
                  </PokedexStyles.SmallLight>
                </PokedexStyles.SmallLightsContainer>
              </PokedexStyles.LightsContainer>
            </div>
            <PokedexStyles.ScreenContainer>
              <PokedexStyles.Screen>
                <PokedexStyles.TopScreenLights>
                  <PokedexStyles.MiniLight color={"red"} />
                  <PokedexStyles.MiniLight color={"red"} />
                </PokedexStyles.TopScreenLights>
                <PokedexStyles.MainScreen imgSrc={this.state.imgSrc} />
                <PokedexStyles.BottomScreenLights>
                  <PokedexStyles.SmallLight color={"red"}>
                    <PokedexStyles.Dot color={"light-red"} />
                  </PokedexStyles.SmallLight>
                  <div className="burger">
                    <PokedexStyles.Line />
                    <PokedexStyles.Line />
                    <PokedexStyles.Line />
                    <PokedexStyles.Line />
                  </div>
                </PokedexStyles.BottomScreenLights>
              </PokedexStyles.Screen>
            </PokedexStyles.ScreenContainer>
            <PokedexStyles.ButtonsContainer>
              <PokedexStyles.UpperButtonsContainer>
                <PokedexStyles.BigButton />
                <PokedexStyles.LongButtonsContainer>
                  <PokedexStyles.LongButton color={"red"} />
                  <PokedexStyles.LongButton color={"light-blue"} />
                </PokedexStyles.LongButtonsContainer>
              </PokedexStyles.UpperButtonsContainer>
              <PokedexStyles.NavButtonsContainer>
                <PokedexStyles.DotsContainer>
                  <div>.</div>
                  <div>.</div>
                </PokedexStyles.DotsContainer>
                <PokedexStyles.GreenScreen>
                  <PokedexStyles.NameScreen id="name-screen">
                    {this.state.name}
                  </PokedexStyles.NameScreen>
                </PokedexStyles.GreenScreen>
                <PokedexStyles.RightNavContainer>
                  <PokedexStyles.NavButton>
                    <PokedexStyles.NavCenterCircle />
                    <PokedexStyles.NavButtonVertical />
                    <PokedexStyles.NavButtonHorizontal>
                      <PokedexStyles.BorderTop />
                      <PokedexStyles.BorderBottom />
                    </PokedexStyles.NavButtonHorizontal>
                  </PokedexStyles.NavButton>
                  <PokedexStyles.BottomRightNavContainer>
                    <PokedexStyles.SmallLight color={"red"}>
                      <PokedexStyles.Dot color={"light-red"} />
                    </PokedexStyles.SmallLight>
                    <PokedexStyles.DotsContainer>
                      <div className="black-dot">.</div>
                      <div className="black-dot">.</div>
                      <div className="black-dot">.</div>
                    </PokedexStyles.DotsContainer>
                  </PokedexStyles.BottomRightNavContainer>
                </PokedexStyles.RightNavContainer>
              </PokedexStyles.NavButtonsContainer>
            </PokedexStyles.ButtonsContainer>
          </PokedexStyles.LeftPanelContainer>

          <PokedexStyles.RightPanel id="right-panel">
            <div className="empty-container">
              <svg height={"100%"} width={"100%"}>
                <polyline
                  points={"0,0 0,40 138,40 158,75 250,75 250,0 0,0"}
                  style={{ fill: "#111", stroke: "none", strokeWidth: 3 }}
                />
                <polyline
                  points={"0,40 138,40 158,75 250,75"}
                  style={{ fill: "none", stroke: "black", strokeWidth: 3 }}
                />
              </svg>
            </div>
            <PokedexStyles.TopScreenContainer>
              <PokedexStyles.RightPanelScreen id="about-screen">
                {`Height: ${this.state.height}cm Weight: ${this.state.weight}kg`}
              </PokedexStyles.RightPanelScreen>
            </PokedexStyles.TopScreenContainer>
            <PokedexStyles.SquareButtonsContainer>
              <PokedexStyles.BlueSquaresContainer>
                <PokedexStyles.BlueSquare />
                <PokedexStyles.BlueSquare />
                <PokedexStyles.BlueSquare />
                <PokedexStyles.BlueSquare />
                <PokedexStyles.BlueSquare />
                <PokedexStyles.BlueSquare />
                <PokedexStyles.BlueSquare />
                <PokedexStyles.BlueSquare />
                <PokedexStyles.BlueSquare />
                <PokedexStyles.BlueSquare />
              </PokedexStyles.BlueSquaresContainer>
            </PokedexStyles.SquareButtonsContainer>
            <PokedexStyles.CenterButtonsContainer>
              <PokedexStyles.CenterLeftContainer>
                <PokedexStyles.SmallRedsContainer>
                  <PokedexStyles.SmallLight color={"red"}>
                    <PokedexStyles.Dot color={"light-red"} />
                  </PokedexStyles.SmallLight>
                  <PokedexStyles.SmallLight color={"red"}>
                    <PokedexStyles.Dot color={"light-red"} />
                  </PokedexStyles.SmallLight>
                </PokedexStyles.SmallRedsContainer>
                <PokedexStyles.WhiteSquaresContainer>
                  <PokedexStyles.WhiteSquare />
                  <PokedexStyles.WhiteSquare />
                </PokedexStyles.WhiteSquaresContainer>
              </PokedexStyles.CenterLeftContainer>
              <PokedexStyles.CenterRightContainer>
                <PokedexStyles.ThinButtonsContainer>
                  <PokedexStyles.ThinButton />
                  <PokedexStyles.ThinButton />
                </PokedexStyles.ThinButtonsContainer>
                <PokedexStyles.YellowButton color={"yellow"}>
                  <PokedexStyles.BigDot color={"light-yellow"} />
                </PokedexStyles.YellowButton>
              </PokedexStyles.CenterRightContainer>
            </PokedexStyles.CenterButtonsContainer>
            <PokedexStyles.BottomScreensContainer>
              <PokedexStyles.RightPanelScreen id="type-screen">
                {this.state.type}
              </PokedexStyles.RightPanelScreen>
              <PokedexStyles.RightPanelScreen id="id-screen">
                {`#${this.state.id}`}
              </PokedexStyles.RightPanelScreen>
            </PokedexStyles.BottomScreensContainer>
          </PokedexStyles.RightPanel>
        </PokedexStyles.PokedexContainer>
      </div>
    );
  }
}

export default PokemonSearch;
