import React, { useContext, useEffect } from 'react';
import { Context } from '../../context';
import Spinner from '../layout/Spinner';
import Track from './Track';

const Tracks = () => {
  const [state, removeTrack] = useContext(Context);
  const { track_list, heading, playList, filtered_list } = state;

  if (track_list === undefined || track_list.length === 0) {
    return <Spinner />;
  } else {
    return (
      <div>
        <h3 className="text-center mb-4">{heading}</h3>
        <div className="row">
          {track_list.map(item => (
            <Track key={item.id} track={item} />
          ))}
        </div>
        {console.log('track_list', track_list)}
      </div>
    );
  }
};

export default Tracks;
