import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer, { forceAudio } from 'react-player';
import './TrackItem.css';
import Spinner from '../layout/Spinner';
import { Context } from '../../context';

const Track = props => {
  const [state, setState, removeTrack] = useContext(Context);
  const { track } = props;
  const style = {
    display: 'flex',
    justifyContent: 'space-between  '
  };

  const styleCard = { marginBottom: '10px' };
  const styleBtn = { color: 'red' };
  if (
    track === undefined ||
    track.length === 0 ||
    track.name === undefined ||
    track.url === undefined ||
    track.artist === undefined
  ) {
    return (
      <div>
        <Spinner />
        <h1> no track found </h1>
      </div>
    );
  } else {
    return (
      <div className="container card" style={styleCard}>
        <ul className="list-group list-group-flush ">
          <li className="list-group-item" style={style}>
            {track.name}
            <button
              style={styleBtn}
              onClick={() => removeTrack(track.id)}
              className="fa fa-times fa-lg"
              type="button"
            ></button>{' '}
          </li>
          <div className="player-wrapper ist-group-item " style={styleCard}>
            <ReactPlayer
              config={{ file: { forceAudio } }}
              className="react-player"
              url={track.url}
              width="100%"
              height="100%"
              controls={true}
            />
          </div>
        </ul>
        {console.log(state.filtered_list)}
      </div>
    );
  }
};

export default Track;
