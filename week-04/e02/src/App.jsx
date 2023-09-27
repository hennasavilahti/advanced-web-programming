import { useState } from 'react';
import NewSongForm from './NewSongForm';
import './App.css';

function App() {
  const [feedback, setFeedback] = useState('Player is ready!');
  const [title, setTitle] = useState('');

  const playHandler = () => {
    console.log('Play button clicked!');
    setTitle('Deep Purple - Smoke on the water');
    setFeedback('Now playing...');
  };

  const stopHandler = () => {
    console.log('Stop button clicked!');
    setTitle('');
    setFeedback('Stopped!');
  };

  const onSongAddedHandler = (song) => {
    console.log('New song added');
    console.log(song);
    setTitle(song);
  };

  return (
    <>
      <h1>React State & Working with Events</h1>
      <h4> {title} </h4>
      <button onClick={playHandler}>⏯️ Play</button>
      <button onClick={stopHandler}>⏹️ Stop</button>
      <h4>{feedback}</h4>
      <NewSongForm onSongAdded={onSongAddedHandler} />
    </>
  );
}

export default App;
