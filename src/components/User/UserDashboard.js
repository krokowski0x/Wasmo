import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Card, Icon, Image, Grid, Segment, Loader } from 'semantic-ui-react'

export default class UserDashboard extends Component {
constructor() {
  super();

  this.state = {
    gameList: [],
    arraysReady: false,
  };
}

componentDidMount() {
  fetch('/games')
    .then(res => res.json())
    .then(games => this.setState({ gameList: games, arraysReady: true }))
    .catch(e => console.log(e));
}

render()  {
  const { gameList, arraysReady } = this.state;

  return (
    <Grid columns={2}>
      <Grid.Column width={3}>
        <Card style={{ marginLeft: "3rem", height: "80vh" }}>
          <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
          <Card.Content>
            <Card.Header>Matthew</Card.Header>
            <Card.Meta>
              <span className='date'>Joined in 2015</span>
            </Card.Meta>
            <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Icon name='user'>22 Friends</Icon>
          </Card.Content>
        </Card>
      </Grid.Column>
      <Grid.Column width={10}>
      <h2>Your favourite games:</h2>
      <div
            style={{
              height: "3px",
              width: "100%",
              background: "linear-gradient(45deg, #00d664, cyan)",
              marginBottom: "5%"
            }}
          />
        {arraysReady ? (
          <Card.Group>
            {gameList.map(game => {
                return (
                  <Card
                    style={{
                      width: "100%",
                      padding: "1%",
                      boxShadow: "4px 4px 2px 0px rgba(0,0,0,0.3)",
                      borderRadius: "20px"
                    }}
                    key={game.id}
                  >
                    <Link to={`/game/${game.title}`} key={game.id}>
                      <Image
                        src={game.thumbnail}
                        style={{ height: "4rem" }}
                        centered
                      />
                      <Card.Content textAlign="center">
                        <Card.Header>{game.title}</Card.Header>
                        <Card.Meta>{game.description}</Card.Meta>
                      </Card.Content>
                    </Link>
                  </Card>
                );
              })}
          </Card.Group>
          ) : (
            <Segment loading>
              <Loader active inline="centered" />
            </Segment>
          )}
      </Grid.Column>
    </Grid>
);
    }
  }