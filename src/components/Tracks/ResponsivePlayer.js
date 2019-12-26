import React from 'react';
import ReactPlayer, { forceAudio } from 'react-player';
import './TrackItem.css';
export default function ResponsivePlayer() {
  return (
    <div>
      <div className="player-wrapper">
        <ReactPlayer
          config={{ file: { forceAudio } }}
          className="react-player"
          url="http://nilepromotion.com/abanob/wp-content/uploads/2019/07/Akon-Lonely.mp3"
          width="100%"
          height="100%"
          controls={true}
        />
      </div>
    </div>
  );
}
