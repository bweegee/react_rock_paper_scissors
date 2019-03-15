import React from "react";
import {Grid, Image, Container, Segment, } from "semantic-ui-react";
import luigi from "./images/Weegee.png";
import paper from "./images/paper.png";
import rock from "./images/rock.png";
import scissors from "./images/scissors.png";

const PlayerTwo = ({ playerTwo }) => (
      <Container textAlign="center">
        <Segment inverted raised >
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
</Segment>
  </Container>
);

export default PlayerTwo;
