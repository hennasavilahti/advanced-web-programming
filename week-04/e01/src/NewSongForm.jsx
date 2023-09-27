import { useState } from 'react';
import './NewSongForm.css';

const NewSongForm = () => {
  const [enteredSong, setEnteredSong] = useState('');

  const songChangeHandler = (event) => {
    console.log(event.target.value);
    console.log('Text Changed');
    setEnteredSong(event.target.value);
  };

  return (
    <form className="new-song__form">
      <label className="new-song__label">Name:</label>
      <input
        className="new-song__name"
        type="text"
        onChange={songChangeHandler}
      />
      <button>ADD</button>
    </form>
  );
};

export default NewSongForm;
