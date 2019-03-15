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
    if ((!this.state.playerOne) && (!this.state.playerTwo)) {
      return <Result 
                pOne={this.state.pOneChoice}
                pTwo={this.state.pTwoChoice}
              />
    } 
      return (
        this.state.playerOne ? <PlayerOne choice={this.state.pOneChoice} /> : <PlayerTwo choice={this.state.pTwoChoice} />
      )

  }
}

export default GameArea;
