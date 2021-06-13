import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div class="card">
        <img src={this.props.img} />
        <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default Card;
