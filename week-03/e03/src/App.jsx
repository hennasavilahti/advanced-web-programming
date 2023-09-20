import LearningOutcome from './LearningOutcome';
import './App.css';

function App() {
  const outcomes = [
    {
      id: 1,
      text: 'Can create a React project with Vite',
    },
    {
      id: 2,
      text: 'Can create a simple React component',
    },
    {
      id: 3,
      text: 'Can use basic CSS styling',
    },
  ];
  return (
    <div className="my_div">
      <h1>Learning Basic React</h1>
      <p>Learning outcomes for this week:</p>
      <ul>
        <LearningOutcome id={outcomes[0].id} text={outcomes[0].text} />
        <LearningOutcome id={outcomes[1].id} text={outcomes[1].text} />
        <LearningOutcome id={outcomes[2].id} text={outcomes[2].text} />
      </ul>
    </div>
  );
}
export default App;
