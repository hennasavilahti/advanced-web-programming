import { useState } from 'react';
import LearningOutcome from './LearningOutcome';
import NewLearningOutcomeForm from './NewLearningOutcomeForm';
import './App.css';

function App() {
  const [fifthOutcome, setFifthOutcome] = useState('');
  const outcomes = [
    {
      id: 1,
      text: 'Can listen and handle events in React',
    },
    {
      id: 2,
      text: 'Can work with state and use the useState hook',
    },
    {
      id: 3,
      text: 'Can listen to forms inputs in React',
    },
    {
      id: 4,
      text: 'Can use forms inputs and state React',
    },
  ];

  const onOutcomeAddedHandler = (outcome) => {
    setFifthOutcome(outcome);
  };

  return (
    <div className="my_div">
      <h1>Learning React Events</h1>
      <p>Learning outcomes for this week:</p>
      <ul>
        <LearningOutcome id={outcomes[0].id} text={outcomes[0].text} />
        <LearningOutcome id={outcomes[1].id} text={outcomes[1].text} />
        <LearningOutcome id={outcomes[2].id} text={outcomes[2].text} />
        <LearningOutcome id={outcomes[3].id} text={outcomes[3].text} />
        <h1>{fifthOutcome}</h1>
      </ul>
      <NewLearningOutcomeForm onOutcomeAdded={onOutcomeAddedHandler} />
    </div>
  );
}
export default App;
