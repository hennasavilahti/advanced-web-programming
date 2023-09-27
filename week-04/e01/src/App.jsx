import { useState } from 'react';
import NewSongForm from './NewSongForm';

import './App.css';

function App() {
  const [feedback, setFeedback] = useState('Player ready!');
  const [title, setTitle] = useState('');

  const playButtonHandler = () => {
    console.log('Now playing...');
    setFeedback('Now playing...');
    setTitle('Deep Purple - Smoke on the Water');
  };
  const stopButtonHandler = () => {
    console.log('Stopped!');
    setFeedback('Stopped!');
    setTitle(' ');
  };

  return (
    <>
      <h1>React State & Working with Events</h1>
      <h4>{title}</h4>
      <button onClick={playButtonHandler}>⏯️ Play</button>
      <button onClick={stopButtonHandler}>⏹️ Stop</button>
      <h4>{feedback}</h4>
      <NewSongForm />
    </>
  );
}

export default App;
