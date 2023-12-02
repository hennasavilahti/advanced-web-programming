import Team from './Team';

import './App.css';
import { useState } from 'react';

const INITIAL_LIST = ['Tappara', 'Saipa', 'Jyp', 'HIFK', 'Ilves'];

function App() {
  const [team, setTeam] = useState('');
  const [teams, setTeams] = useState(INITIAL_LIST);

  // Handler for when the text change in the input
  const handleInputChange = (event) => {
    console.log(event.target.value);
    setTeam(event.target.value);
  };
  // Handler to add the team to the Teams array
  const handleAddTeam = () => {
    setTeams((prevTeams) => {
      return [...prevTeams, team];
    });
  };

  return (
    <>
      <h1>Learning to render lists and show conditional content in React</h1>
      <ul>
        {teams.map((item, index) => (
          <Team key={index} text={item} id={index} />
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={team}
          onChange={handleInputChange}
          placeholder="Enter a team..."
        />
        <button onClick={handleAddTeam}>Add</button>
      </div>
    </>
  );
}

export default App;
