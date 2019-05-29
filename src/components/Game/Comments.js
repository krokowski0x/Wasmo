/* eslint-disable react/destructuring-assignment */
import React, { Component } from "react";
import { Card, Button, Input, Icon, Message } from "semantic-ui-react";

export default class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/prop-types
      id: this.props.id,
      comments: [],
      newComment: "",
      loading: false,
      errorMessage: ""
    };

    this.handleCommentChange = this.handleCommentChange.bind(this);
  }

  componentDidMount() {
    this.getCommentList();
  }

  getCommentList = () => {
    fetch(`/comments/${this.state.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(comments => this.setState({ comments, loading: false }))
      .catch(err => console.error(err));
  };

  onCommentAdd = () => {
    this.setState({ loading: true });
      fetch(`/comments/${this.state.id}`, {
        method: "POST",
        body: JSON.stringify({
          comment: this.state.newComment
        }),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(() => this.getCommentList()).catch(err =>console.error(err));
  };

  onCommentRemove = async id => {
    try {
      await fetch(`/comments/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      });
      this.setState({ newComment: "" });
      await this.getCommentList();
    } catch (err) {
      this.setState({
        errorMessage: "Hey, don't even try that! It's not Your comment!"
      });
    }
  };

  handleCommentChange(event) {
    this.setState({ newComment: event.target.value });
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
          onChange={this.handleCommentChange}
          style={{ paddingBottom: "3rem", width: "70vw" }}
        />
        <Button positive onClick={this.onCommentAdd} loading={loading}>Add New</Button>
        {errorMessage ? <Message negative>{errorMessage}</Message> : <div />}

        {comments.length !== 0 ? (
          <Card.Group centered>
            {comments.map(entry => (
              <Card fluid key={entry.id}>
                <Card.Content textAlign="left">
                  <b>{entry.username}</b>
                  <Button
                    floated="right"
                    animated="vertical"
                    onClick={() => this.onCommentRemove(entry.id)}
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
