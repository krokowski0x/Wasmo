import React, { Component } from "react";
import { Card, Button, Input, Icon, Message } from "semantic-ui-react";

import comments from './seed_comments';

export default class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments,
      newComment: "",
      loading: false,
      errorMessage: ""
    };
  }

  componentDidMount() {
    this.setState({ comments, loading: false });
  }

  render() {
    const { comments, newComment, loading, errorMessage } = this.state;

    return (
      <div
        style={{
          textAlign: "center",
          padding: "3rem"
        }}
      >
        <h2>Comments:</h2>
        <br />
        <Input
          placeholder="Add..."
          value={newComment}
          onChange={e => this.setState({ newComment: e.target.value })}
          style={{ paddingBottom: "3rem", width: "40vw" }}
        />
        <Button positive onClick={this.onCommentAdd} loading={loading}>Add New</Button>
        {errorMessage ? <Message negative>{errorMessage}</Message> : <div />}

        {comments.length !== 0 ? (
          <Card.Group centered>
            {comments.map(entry => (
              <Card fluid key={entry.id}>
                <Card.Content extra textAlign="left">
                  {entry.createdAt}
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
                <Card.Content>{entry.comment}</Card.Content>
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