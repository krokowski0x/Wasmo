import React, { Component } from "react";
import Unity, { UnityContent } from "react-unity-webgl";
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
    }

    this.handleFullscreen = this.handleFullscreen.bind(this);
  }

  handleFullscreen() {
    const { unityContent } = this.state;
    unityContent.setFullscreen(true);
  }

  render() {
    const { unityContent, title } = this.state;

    return (
      <div className="webgl-content">
        <h1>{title}</h1>
        <Unity unityContent={unityContent} height="100%" />
        <div className="footer">
          <button type="button" className="fullscreen" onClick={this.handleFullscreen} onKeyDown={this.handleFullscreen} />
          <div className="title">{title}</div>
        </div>
        <Comments />
      </div>
    );
  }
}