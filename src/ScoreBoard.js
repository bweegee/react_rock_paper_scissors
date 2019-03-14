import React from 'react';
import { Segment, Grid, Header, Container, } from "semantic-ui-react";
import logo from "./rps.png"

class ScoreBoard extends React.Component {
  state = {}

  render() {
    return (
      <Container textAlign="center">
        <img src={logo} alt="logo" />;

        <Segment inverted raised >
          <Grid columns={3}>
            <Grid.Row>
              <Grid.Column>
                <Header as="h1" color="yellow">Player 1</Header>
              </Grid.Column>
              <Grid.Column>
                <Header as="h1" color="yellow">Ties</Header>
              </Grid.Column>
              <Grid.Column>
                <Header as="h1" color="yellow">Player 2</Header>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column>
                <Header as="h1" color="yellow" size="massive">0</Header>
              </Grid.Column>
              <Grid.Column>
                <Header as="h1" color="yellow" size="massive">0</Header>
              </Grid.Column>
              <Grid.Column>
                <Header as="h1" color="yellow" size="massive">0</Header>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Container>
    )
  }
}

export default ScoreBoard;
