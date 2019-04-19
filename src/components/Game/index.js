import React from "react";
import Unity, { UnityContent } from "react-unity-webgl";

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    // eslint-disable-next-line react/prop-types
    const { match: { params: { title } } } = this.props;

    this.state = {
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
    const { unityContent } = this.state;

    return (
      <div className="webgl-content">
        <Unity unityContent={unityContent} height="100%" width="950px" />
        <div className="footer">
          <div className="webgl-logo" />
          <button type="button" className="fullscreen" onClick={this.handleFullscreen} onKeyDown={this.handleFullscreen} />
          <div className="title">TapMeter</div>
        </div>
      </div>
    );
  }
}