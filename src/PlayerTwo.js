import React from "react";
import {Grid, Image, Container, Segment, Header } from "semantic-ui-react";
import luigi from "./images/Weegee.png";
import paper from "./images/paper.png";
import rock from "./images/rock.png";
import scissors from "./images/scissors.png";

const PlayerTwo = ({ playerTwo }) => (
  <Container>
  <Segment inverted raised color="green">
    <Header as="h1" color="white">
      Player 2 Turn
    </Header>
  </Segment>
  <Grid container columns={3} >
    <Grid.Column>
      <p></p>
    </Grid.Column>

    <Grid.Column>
      <Image src={rock} alt="" bordered size="small" />
      <Image src={paper} alt="" bordered size="small" />
      <Image src={scissors} alt="" bordered size="small" />
    </Grid.Column>
    
    <Grid.Column>
      <Image src={luigi} alt="Player Two" />
    </Grid.Column>
  </Grid>
  </Container>
);

export default PlayerTwo;
