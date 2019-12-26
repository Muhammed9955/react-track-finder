import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Context } from '../../context';
import { uuid } from 'uuidv4';

const Search = () => {
  const [state, setState] = useContext(Context);
  const [userInput, setUserInput] = useState('');
  const [trackTitle, setTrackTitle] = useState('');
  const { track_list } = state;

  const findTrack = e => {
    e.preventDefault();
    setTrackTitle(userInput);
    axios
      .get(`https://api.myjson.com/bins/hw8lz`)

      .then(res => {
        let tracks_list = res.data.tracks;

        let filterData = tracks_list.filter(
          track =>
            track.name.toLowerCase().includes(userInput.toLowerCase()) ||
            track.artist.toLowerCase().includes(userInput.toLowerCase()) ||
            track.length.toString() == userInput.toString() ||
            track.url.toLowerCase().includes(userInput.toLowerCase())
        );
        const { track_list, heading, playList, filtered_list } = state;

        let NewTrack = {
          id: uuid(),
          name: filterData[0].name,
          length: filterData[0].length,
          artist: filterData[0].artist,
          url: filterData[0].url
        };
        setState({
          track_list: [NewTrack, ...state.track_list],
          heading: 'Search Results'
        });
        setUserInput('');
      })
      .catch(err => console.log(err));
  };

  const onChange = e => {
    setUserInput(e.target.value);
  };

  console.log('PlayList', state.playList);

  return (
    <div className="card card-body mb-4 p-4">
      <h1 className="display-4 text-center">
        <i className="fas fa-music" /> Search for tracks
      </h1>
      <form onSubmit={findTrack}>
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="get track by name, artist, length or url..."
            name="userInput"
            value={userInput}
            onChange={onChange}
          />
        </div>

        <button
          className="btn btn-outline-dark btn-lg btn-block mb-5"
          type="submit"
        >
          Add Track
        </button>
      </form>
    </div>
  );
};

export default Search;
