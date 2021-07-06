import React, { Component } from "react";
import { StyledRuleRow, RuleRowName, RuleRowScore } from "./ruleRow.styles";

class RuleRow extends Component {
  render() {
    return (
      <StyledRuleRow active={true} onClick={this.props.doScore}>
        <RuleRowName>{this.props.name}</RuleRowName>
        <RuleRowScore>{this.props.score}</RuleRowScore>
      </StyledRuleRow>
    );
  }
}

export default RuleRow;
