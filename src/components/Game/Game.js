import React, { Component } from "react";
import Unity, { UnityContent } from "react-unity-webgl";
import { Card, Button, Input, Icon, Message } from "semantic-ui-react";
import Comments from './Comments';

export default class Game extends Component {
  constructor(props) {
    super(props);
    // eslint-disable-next-line react/prop-types
    const { match: { params: { title } } } = this.props;

    this.state = {
      title,
      unityContent: new UnityContent(
        `../seed_data/${title}/${title}.json`,
        `../seed_data/${title}/UnityLoader.js`
      ),
      paused: true
    }

    this.handleFullscreen = this.handleFullscreen.bind(this);
    this.handlePause = this.handlePause.bind(this);
  }

  handleFullscreen() {
    const { unityContent } = this.state;
    unityContent.setFullscreen(true);
  }

  handlePause() {
    // window.location.reload();
    this.setState({ paused: false });
  }

  render() {
    const { unityContent, title, paused } = this.state;

    return (
      <div className="webgl-content">
        <h1 style={{ fontWeight: "bold", margin: "1rem" }}>{title}</h1>
        {paused ? (
          <div style={{ height: "60vh", backgroundColor: "grey", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Icon name="play" circular size="huge" onClick={this.handlePause} style={{ margin: "0 auto" }} />
          </div>
        ) : (
          <Unity unityContent={unityContent} height="80%" style={{ margin: "1rem", padding: "1rem" }} />
        )}
        <div className="footer">
          <button type="button" className="fullscreen" onClick={this.handleFullscreen} onKeyDown={this.handleFullscreen} />
        </div>
        <Comments id={title === "Tankhtml" ? "1" : "2"} />
      </div>
    );
  }
}