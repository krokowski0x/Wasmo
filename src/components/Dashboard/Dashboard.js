import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Loader, Segment, Card, Image } from "semantic-ui-react";

export default class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      gameList: [],
      arraysReady: false,
    };
  }

	componentDidMount() {
    const games = [
      {
        "id": 1,
        "title": "Tankhtml",
        "description": "Just a placeholder for a real game description.",
        "thumbnail": "https://image.flaticon.com/icons/svg/141/141070.svg",
      },
      {
        "id": 2,
        "title": "Diggerhtml",
        "description": "Just a placeholder for a real game description.",
        "thumbnail": "https://image.flaticon.com/icons/svg/141/141070.svg",
      },
      {
        "id": 3,
        "title": "ProMeteuszhtml",
        "description": "Just a placeholder for a real game description.",
        "thumbnail": "https://image.flaticon.com/icons/svg/141/141070.svg",
      },
      {
        "id": 4,
        "title": "Tankhtml",
        "description": "Just a placeholder for a real game description.",
        "thumbnail": "https://image.flaticon.com/icons/svg/141/141070.svg",
      },
      {
        "id": 5,
        "title": "Diggerhtml",
        "description": "Just a placeholder for a real game description.",
        "thumbnail": "https://image.flaticon.com/icons/svg/141/141070.svg",
      },
      {
        "id": 6,
        "title": "ProMeteuszhtml",
        "description": "Just a placeholder for a real game description.",
        "thumbnail": "https://image.flaticon.com/icons/svg/141/141070.svg",
      },
      {
        "id": 7,
        "title": "Tankhtml",
        "description": "Just a placeholder for a real game description.",
        "thumbnail": "https://image.flaticon.com/icons/svg/141/141070.svg",
      },
      {
        "id": 8,
        "title": "Diggerhtml",
        "description": "Just a placeholder for a real game description.",
        "thumbnail": "https://image.flaticon.com/icons/svg/141/141070.svg",
      },
      {
        "id": 9,
        "title": "ProMeteuszhtml",
        "description": "Just a placeholder for a real game description.",
        "thumbnail": "https://image.flaticon.com/icons/svg/141/141070.svg",
      },
      {
        "id": 10,
        "title": "Tankhtml",
        "description": "Just a placeholder for a real game description.",
        "thumbnail": "https://image.flaticon.com/icons/svg/141/141070.svg",
      },
      {
        "id": 11,
        "title": "Diggerhtml",
        "description": "Just a placeholder for a real game description.",
        "thumbnail": "https://image.flaticon.com/icons/svg/141/141070.svg",
      },
      {
        "id": 12,
        "title": "ProMeteuszhtml",
        "description": "Just a placeholder for a real game description.",
        "thumbnail": "https://image.flaticon.com/icons/svg/141/141070.svg",
      },
      {
        "id": 13,
        "title": "Tankhtml",
        "description": "Just a placeholder for a real game description.",
        "thumbnail": "https://image.flaticon.com/icons/svg/141/141070.svg",
      },
      {
        "id": 14,
        "title": "Diggerhtml",
        "description": "Just a placeholder for a real game description.",
        "thumbnail": "https://image.flaticon.com/icons/svg/141/141070.svg",
      },
      {
        "id": 15,
        "title": "ProMeteuszhtml",
        "description": "Just a placeholder for a real game description.",
        "thumbnail": "https://image.flaticon.com/icons/svg/141/141070.svg",
      }
      
    ];

    // This is just a fetch() mock, to show loading functionality
    new Promise(resolve => setTimeout(resolve, 2000))
      .then(() => this.setState({ gameList: games, arraysReady: true }))
      .catch(e => console.log(e));
	}

  render() {
    const { gameList, arraysReady } = this.state;

    return (
      <div>
        <Container style={{ padding: "1%", margin: "5% 0" }}>
          <h2>Our games:</h2>
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