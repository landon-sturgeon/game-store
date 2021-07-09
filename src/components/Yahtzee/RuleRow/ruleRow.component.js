import React, { Component } from "react";
import { StyledRuleRow, RuleRowName, RuleRowScore } from "./ruleRow.styles";

class RuleRow extends Component {
  render() {
    const { score, name, doScore, description } = this.props;
    const disabled = score !== undefined;
    return (
      <StyledRuleRow
        active={disabled ? false : true}
        onClick={disabled ? null : doScore}
      >
        <RuleRowName>{name}</RuleRowName>
        <RuleRowScore>{disabled ? score : description}</RuleRowScore>
      </StyledRuleRow>
    );
  }
}

export default RuleRow;
