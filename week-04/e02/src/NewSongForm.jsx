import { useState } from 'react';

import './NewSongForm.css';

const NewSongForm = (props) => {
  const [enteredSong, setEnteredSong] = useState('');
  const [enteredArtist, setEnteredArtist] = useState('');

  const songChangeHandler = (event) => {
    // console.log('Text changed!');
    setEnteredSong(event.target.value);
  };

  const artistChangeHandler = (event) => {
    setEnteredArtist(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const song = enteredArtist + ' - ' + enteredSong;
    props.onSongAdded(song);
    setEnteredSong('');
    setEnteredArtist('');
  };

  return (
    <form onSubmit={submitHandler} className="new-song__form">
      <label className="new-song__label">Name:</label>
      <input
        className="new-song__name"
        onChange={songChangeHandler}
        type="text"
        value={enteredSong}
      />
      <label className="new-artist__label">Artist:</label>
      <input
        className="new-artist__name"
        onChange={artistChangeHandler}
        type="text"
        value={enteredArtist}
      />
      <button className="new-song__button" type="submit">
        ➕ Add
      </button>
    </form>
  );
};

export default NewSongForm;
