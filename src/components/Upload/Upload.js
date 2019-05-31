import React, { Component } from 'react'
import { Button, Header, Icon, Segment, Divider, Grid, Input } from 'semantic-ui-react'

import history from '../../history';

import Basic from './Basic'

export default class Upload extends Component {
  constructor() {
    super();

    this.state = {
      title: "",
      description: "",
      thumbnail: ""
    }

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleThumbnailChange = this.handleThumbnailChange.bind(this);
  }

  onGameAdd = () => {
      fetch('/games', {
        method: "POST",
        body: JSON.stringify({
          title: this.state.title,
          description: this.state.description,
          thumbnail: this.state.thumbnail
        }),
        headers: {
          "Content-Type": "application/json"
        }
      }).catch(err =>console.error(err));
      history.push("/")
  };

  handleTitleChange(event) {
    this.setState({ title: event.target.value });
  }
  
  handleDescriptionChange(event) {
    this.setState({ description: event.target.value });
  }
  
  handleThumbnailChange(event) {
    this.setState({ thumbnail: event.target.value });
  }

  render() {
    const { title, description, thumbnail } = this.state;
    return (
      <Segment placeholder style={{ margin: "3rem auto", width: "60vw", height: "60vh" }}>
        <Grid columns={2} stackable textAlign='center'>
          <Divider vertical>And</Divider>
    
          <Grid.Row verticalAlign='middle'>
            <Grid.Column>
              <Header icon>
                <Icon name='file code outline' />
                Upload source code
              </Header>
              <Basic />
            </Grid.Column>
    
            <Grid.Column>
              <h3>Title</h3>
              <Input value={title} onChange={this.handleTitleChange} placeholder='Add title...' />
              <h3>Description</h3>
              <Input value={description} onChange={this.handleDescriptionChange} placeholder='Add description...' />
              <h3>Thumbnail</h3>
              <Input value={thumbnail} onChange={this.handleThumbnailChange} placeholder='Pick a thumbnail...' />
              <Button primary onClick={this.onGameAdd} style={{ margin: "1rem auto" }}>Upload</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
  }
} 