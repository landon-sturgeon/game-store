import React, { Component } from "react";
import {
  StyledScoreTable,
  ScoreTableSection,
  ScoreTableSectionLower,
} from "./scoretable.styles";
import RuleRow from "../RuleRow/ruleRow.component";
import {
  ones,
  twos,
  threes,
  fours,
  fives,
  sixes,
  threeOfKind,
  fourOfKind,
  fullHouse,
  smallStraight,
  largeStraight,
  yahtzee,
  chance,
} from "../rules.utils";

class ScoreTable extends Component {
  render() {
    const { scores, doScore } = this.props;

    return (
      <StyledScoreTable>
        <ScoreTableSection>
          <h2>Upper</h2>
          <table>
            <tbody>
              <RuleRow
                name="Ones"
                score={scores.ones}
                doScore={(evt) => doScore("ones", ones.evalRoll)}
              />
              <RuleRow
                name="Twos"
                score={scores.twos}
                doScore={(evt) => doScore("twos", twos.evalRoll)}
              />
              <RuleRow
                name="Threes"
                score={scores.threes}
                doScore={(evt) => doScore("thress", threes.evalRoll)}
              />
              <RuleRow
                name="Fours"
                score={scores.fours}
                doScore={(evt) => doScore("fours", fours.evalRoll)}
              />
              <RuleRow
                name="Fives"
                score={scores.fives}
                doScore={(evt) => doScore("fives", fives.evalRoll)}
              />
              <RuleRow
                name="Sixes"
                score={scores.sixes}
                doScore={(evt) => doScore("sixes", sixes.evalRoll)}
              />
            </tbody>
          </table>
        </ScoreTableSection>
        <ScoreTableSectionLower>
          <h2>Lower</h2>
          <table cellSpacing="0">
            <tbody>
              <RuleRow
                name="Three of Kind"
                score={scores.threeOfKind}
                doScore={(evt) => doScore("threeOfKind", threeOfKind.evalRoll)}
              />
              <RuleRow
                name="Four of Kind"
                score={scores.fourOfKind}
                doScore={(evt) => doScore("fourOfKind", fourOfKind.evalRoll)}
              />
              <RuleRow
                name="Full House"
                score={scores.fullHouse}
                doScore={(evt) => doScore("fullHouse", fullHouse.evalRoll)}
              />
              <RuleRow
                name="Small Straight"
                score={scores.smallStraight}
                doScore={(evt) =>
                  doScore("smallStraight", smallStraight.evalRoll)
                }
              />
              <RuleRow
                name="Large Straight"
                score={scores.largeStraight}
                doScore={(evt) =>
                  doScore("largeStraight", largeStraight.evalRoll)
                }
              />
              <RuleRow
                name="Yahtzee"
                score={scores.yahtzee}
                doScore={(evt) => doScore("yahtzee", yahtzee.evalRoll)}
              />
              <RuleRow
                name="Chance"
                score={scores.chance}
                doScore={(evt) => doScore("chance", chance.evalRoll)}
              />
            </tbody>
          </table>
        </ScoreTableSectionLower>
      </StyledScoreTable>
    );
  }
}

export default ScoreTable;
