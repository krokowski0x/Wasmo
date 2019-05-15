import React from 'react'
import { Button, Header, Icon, Segment, Divider, Grid, Input } from 'semantic-ui-react'

const Upload = () => (
  <Segment placeholder style={{ margin: "3rem auto", width: "60vw", height: "60vh" }}>
    <Grid columns={2} stackable textAlign='center'>
      <Divider vertical>And</Divider>

      <Grid.Row verticalAlign='middle'>
        <Grid.Column>
          <Header icon>
            <Icon name='file code outline' />Upload source code
          </Header>
          <Button primary>Upload</Button>
        </Grid.Column>

        <Grid.Column>
          <h3>Title</h3>
          <Input placeholder='Add title...' />
          <h3>Description</h3>
          <Input placeholder='Add description...' />
          <h3>Thumbnail</h3>
          <Input placeholder='Pick a thumbnail...' action='Search' />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
)

export default Upload