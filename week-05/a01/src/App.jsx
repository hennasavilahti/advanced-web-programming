import LearningOutcome from './LearningOutcome';
import LearningOutcomeForm from './LearningOutcomeForm';
import AlertMessage from './AlertMessage';

import './App.css';
import { useState } from 'react';

const OUTCOME_DATA = [
  {
    id: 1,
    text: 'Can use the JS array map method',
    strikethrough: false,
  },
  {
    id: 2,
    text: 'Can render lists in React dynamically',
    strikethrough: false,
  },
  {
    id: 3,
    text: 'Can use stateful list',
    strikethrough: false,
  },
  {
    id: 4,
    text: 'Understand and can use keys when rendering lists',
    strikethrough: false,
  },
  {
    id: 5,
    text: 'Can use the ternary operator',
    strikethrough: false,
  },
  {
    id: 6,
    text: 'Can show content conditionally',
    strikethrough: false,
  },
];

function App() {
  const [outcomes, setOutcomes] = useState(OUTCOME_DATA);

  const onOutcomeAddedHandler = (outcome) => {
    if (outcome.length === 0) {
      console.log('Empty text!');
      return;
    }

    setOutcomes((prevOutcomes) => {
      return [
        ...prevOutcomes,
        { id: prevOutcomes.length + 1, text: outcome, strikethrough: false },
      ];
    });
  };

  const removeOutcome = (outcomeToRemove) => {
    setOutcomes((prevOutcomes) =>
      prevOutcomes.filter((outcome) => outcome !== outcomeToRemove)
    );
  };

  const toggleStrikethrough = (itemToToggle) => {
    setOutcomes(
      outcomes.map((outcome) => {
        if (outcome.id === itemToToggle.id) {
          return { ...outcome, strikethrough: !outcome.strikethrough };
        } else {
          return outcome;
        }
      })
    );
  };

  return (
    <>
      <div className="my_div">
        <h1>Learning to render lists and show conditional content in React</h1>
        <p>Learning outcomes for this week:</p>
        <AlertMessage isListEmpty={!outcomes.length} />
        <ul>
          {outcomes.map((item) => (
            <LearningOutcome
              key={item.id}
              text={item.text}
              id={item.id}
              item={item}
              removeOutcome={removeOutcome}
              toggleStrikethrough={toggleStrikethrough}
            />
          ))}
        </ul>
        <ul>
          <LearningOutcomeForm onOutcomeAdded={onOutcomeAddedHandler} />
        </ul>
      </div>
    </>
  );
}

export default App;
