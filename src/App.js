import React, { Component } from 'react';
import './App.css';
import { Container, } from "semantic-ui-react";
import ScoreBoard from "./ScoreBoard.js";
import GameArea from "./GameArea.js";

class App extends Component {
  state = {
    playerOneWin: 0,
    playerOneLoss: 0,
    playerTwoWin: 0,
    playerTwoLoss: 0,
    tie: 0,
  }

  render() {
    return (
      <Container>
        <ScoreBoard
          pOneWin={this.state.playerOneWin}
          pTwoWin={this.state.playerTwoWin}
          pOneLoss={this.state.playerOneLoss}
          pTwoLoss={this.state.playerTwoLoss}
          tie={this.state.tie}
        />
        <GameArea />
      </Container>
    )
  }
}

export default App;
