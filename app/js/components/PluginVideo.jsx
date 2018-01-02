import React from 'react';
import { Player } from 'video-react';
import './../../../node_modules/video-react/dist/video-react.css';
import Stars from './../../img/stars.png';

export default class PluginVideo extends React.Component {
  render() {
    return (
      <div>
        {/* Video player */}
        <div className="video-demo">
          <Player
            playsInline
            muted
            fluid
            poster={Stars}
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          />
        </div>

        {/* Video Background */}
        <video
          autoPlay
          loop
          className="video-background"
          muted
          plays-inline
        >
          <source
            src="https://player.vimeo.com/external/158148793.hd.mp4?s=8e8741dbee251d5c35a759718d4b0976fbf38b6f&profile_id=119&oauth2_token_id=57447761"
            type="video/mp4"
          />
        </video>
      </div>
    );
  }
}
