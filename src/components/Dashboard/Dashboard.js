import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Loader, Segment, Card, Image } from "semantic-ui-react";

import GameRating from './GameRating'

export default class Dashboard extends Component {
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
  
  render() {
    const { gameList, arraysReady } = this.state;

    return (
      <div>
        <Container style={{ padding: "1%", margin: "2% 0" }}>
          <h2>Most popular games:</h2>
          <div
            style={{
              height: "3px",
              width: "100%",
              background: "linear-gradient(45deg, #00d664, cyan)",
              marginBottom: "5%"
            }}
          />
          {arraysReady ? (
            <Card.Group itemsPerRow={3} stackable>
              {gameList.map(game => {
                return (
                  <Card
                    style={{
                      padding: "1%",
                      boxShadow: "4px 4px 2px 0px rgba(0,0,0,0.3)",
                      borderRadius: "20px"
                    }}
                    key={game.id}
                  >
                    <Card.Content extra textAlign="right">
                      <GameRating id={game.id} />
                    </Card.Content>
                    <Link to={`/game/${game.title}`} key={game.id}>
                      <Image
                        src={game.thumbnail}
                        style={{ height: "10rem" }}
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
        </Container>
      </div>
    );
  }
}