import Team from './Team.jsx';
import './App.css';

function App() {
  const numbers = [1, 2, 3, 4, 5];
  const squaredArray = numbers.map((number) => number * number);
  console.log(squaredArray);

  const teams = ['Saipa', 'HIFK', 'Tappara', 'Ilves', 'JYP'];
  const ordered = teams.map((team, index) => `${index} - ${team}`);
  console.log(ordered);

  const teamList = teams.map((text) => {
    return <li>{text}</li>;
  });
  console.log(teamList);

  return (
    <>
      <h1>Learning to render lists and show conditional content in React</h1>
      {teams.map((team) => (
        <Team text={team} />
      ))}
    </>
  );
}

export default App;
