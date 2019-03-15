import React from "react";
import {Grid, Image, Container, Header, Segment, } from "semantic-ui-react";
import mario from "./images/Mario.png";
import paper from "./images/paper.png";
import rock from "./images/rock.png";
import scissors from "./images/scissors.png";

const imageArray = [
  <Image src={rock} alt="rock" size="small" />,
  <Image src={paper} alt="paper" size="small" />,
  <Image src={scissors} alt="scissors" size="small" />,
  ]

const renderImages = () => {
  return imageArray.map ((image, i) => (
    <Grid.Row key={i}>
      {image}
    </Grid.Row>
    )
  )
}


const PlayerOne = ({ playerOne }) => (
  <Container>
  <Segment inverted raised color="red">
    <Header as="h1">
      Player 1 Turn
    </Header>
  </Segment>
  <Grid columns={3} textAlign="center">
    <Grid.Row>
      <Grid.Column>
        <Image src={mario} alt="Player One" />
      </Grid.Column>

      <Grid.Column>
        <Grid columns={1}>
        { renderImages() }
        </Grid>
      </Grid.Column>
      
      <Grid.Column>
        <p></p>
      </Grid.Column>

    </Grid.Row>
  </Grid>
  </Container>
);

export default PlayerOne;
