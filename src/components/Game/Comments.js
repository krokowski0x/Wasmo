import React, { Component } from "react";
import { Card, Button, Input, Icon, Message } from "semantic-ui-react";

export default class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      newComment: "",
      loading: false,
      errorMessage: ""
    };
  }

  componentDidMount() {
    fetch('/comments/1')
    .then(res => res.json())
    .then(comments => this.setState({ comments, loading: false }))
    .catch(e => console.log(e));
  }

  render() {
    const { comments, newComment, loading, errorMessage } = this.state;

    return (
      <div
        style={{
          textAlign: "left",
          padding: "3rem"
        }}
      >
        <h2>Comments:</h2>
        <br />
        <Input
          placeholder="Add..."
          value={newComment}
          onChange={e => this.setState({ newComment: e.target.value })}
          style={{ paddingBottom: "3rem", width: "80vw" }}
        />
        <Button positive onClick={this.onCommentAdd} loading={loading}>Add New</Button>
        {errorMessage ? <Message negative>{errorMessage}</Message> : <div />}

        {comments.length !== 0 ? (
          <Card.Group centered>
            {comments.map(entry => (
              <Card fluid key={entry.id}>
                <Card.Content textAlign="left" style={{ fontWeight: "bold", fontSize: "1.2rem", padding: ".5rem" }}>
                  {entry.username}
                  <Button
                    floated="right"
                    animated="vertical"
                  >
                    <Button.Content hidden>Delete</Button.Content>
                    <Button.Content visible>
                      <Icon name="x" />
                    </Button.Content>
                  </Button>
                </Card.Content>
                <Card.Content style={{ padding: "1rem" }}>{entry.comment}</Card.Content>
              </Card>
            ))}
          </Card.Group>
        ) : (
          <h3>No comments yet. Add the first one!</h3>
        )}
      </div>
    );
  }
}