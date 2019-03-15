import React from "react";
import {Container, } from "semantic-ui-react";
import PlayerOne from "./PlayerOne.js";
import PlayerTwo from "./PlayerTwo.js";
import Result from "./Result.js";

class GameArea extends React.Component {
  state = {
    playerOne: true,
    playerTwo: false,
    result: false,
    pOneChoice: "",
    pTwoChoice: "",
  };
  render() {
    return (
      <Container>
        playerOne ? <PlayerOne choice={this.state.pOneChoice} /> : null;
        playerTwo ? <PlayerTwo choice={this.state.pTwoChoice} /> : null;
      </Container>
    )
  }
}

export default GameArea;
