import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Card, Image, Grid, Segment, Loader } from 'semantic-ui-react'

import GameRating from '../Dashboard/GameRating'

export default class UserDashboard extends Component {
constructor() {
  super();

  this.state = {
    favoriteGame: {},
    gameList: [],
    arraysReady: false,
  };
}

async componentDidMount() {
  const query = [];
  for (const game in localStorage) query.push(game);

  await fetch(`/games/${query[0]}`)
  .then(res => res.json())
  .then(game => this.setState({ favoriteGame: game, arraysReady: true }))
  .catch(e => console.log(e));
  await fetch('/games')
    .then(res => res.json())
    .then(games => this.setState({ gameList: games, arraysReady: true }))
    .catch(e => console.log(e));
}

render()  {
  const { gameList, arraysReady, favoriteGame } = this.state;

  return (
    <Grid columns={2}>
      <Grid.Column width={3}>
        <Card style={{ marginLeft: "3rem", height: "80vh" }}>
          <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
          <Card.Content>
            <Card.Header>krokowski0x</Card.Header>
            <Card.Meta>
              <b>You're a developer!</b>
            </Card.Meta>
          </Card.Content>
        </Card>
      </Grid.Column>
      <Grid.Column width={10}>
        <h2>Your favorite games:</h2>
        <div
          style={{
              height: "3px",
              width: "100%",
              background: "linear-gradient(45deg, #00d664, cyan)",
              marginBottom: "5%"
            }}
        />
        {favoriteGame ? (
          <Card
            style={{
                      width: "100%",
                      padding: "1%",
                      boxShadow: "4px 4px 2px 0px rgba(0,0,0,0.3)",
                      borderRadius: "20px"
                    }}
            key={favoriteGame.id}
          >
            <Card.Content extra textAlign="right">
              <GameRating id={favoriteGame.id} />
            </Card.Content>
            <Link to={`/game/${favoriteGame.title}`} key={favoriteGame.id}>
                      <Image
                        src={favoriteGame.thumbnail}
                        style={{ height: "4rem" }}
                        centered
                      />
                      <Card.Content textAlign="center">
                        <Card.Header>{favoriteGame.title}</Card.Header>
                        <Card.Meta>{favoriteGame.description}</Card.Meta>
                      </Card.Content>
            </Link>
          </Card>
        ) : (
          <Segment loading>
            <Loader active inline="centered" />
          </Segment>
        )}
        <h2>Games you played:</h2>
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