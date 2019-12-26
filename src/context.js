import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { uuid } from 'uuidv4';

export const Context = React.createContext();

export function ContextController({ children }) {
  let intialState = {
    track_list: [],
    filtered_list: [],
    playList: [
      {
        id: uuid(),
        name: 'Mr.Lonely',
        length: '4.4',
        artist: 'akon',
        url:
          'http://nilepromotion.com/abanob/wp-content/uploads/2019/07/Akon-Lonely.mp3'
      }
    ],
    heading: ''
  };

  const [state, setState] = useState(intialState);
  useEffect(async () => {
    try {
      const res = await axios.get(`https://api.myjson.com/bins/hw8lz`);
      const track_list = res.data.tracks;
      const baseList = track_list.map(item => ({ id: uuid(), ...item }));

      setState({
        track_list: baseList,
        heading: 'Top popular tracks '
      });
    } catch (err) {
      console.log(err);
    }
  }, []);
  const { track_list, heading, filtered_list, playList } = state;
  const removeTrack = romvedTrackID => {
    let filterdData = track_list.filter(item => item.id !== romvedTrackID);

    setState({ track_list: [...filterdData] });
  };
  return (
    <Context.Provider value={[state, setState, removeTrack]}>
      {children}
    </Context.Provider>
  );
}
