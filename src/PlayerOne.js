import React from "react";
import {Grid, Image, } from "semantic-ui-react";
import mario from "./images/Mario.png";
import paper from "./images/paper.png";
import rock from "./images/rock.png";
import scissors from "./images/scissors.png";

const PlayerOne = ({ playerOne }) => (
  <Grid columns={3} textAlign="center">
    <Grid.Row>
      <Grid.Column>
        <Image src={mario} alt="Player One" />
      </Grid.Column>

      <Grid.Column>
        <Image src={rock} alt="" size="small" />
        <Image src={paper} alt="" size="small" />
        <Image src={scissors} alt="" size="small" />
      </Grid.Column>
      
      <Grid.Column>
        <p></p>
      </Grid.Column>

    </Grid.Row>
  </Grid>
);

export default PlayerOne;
