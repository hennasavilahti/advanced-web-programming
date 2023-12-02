import { useState } from 'react';
import { v4 as uuid} from 'uuid';

import OutcomeInput from "./OutcomeInput";
import OutcomeList from "./OutcomeList";

import './App.css'

const INITIAL_OUTCOMES = [{
    id: uuid(),
    text: "Can apply inline styles dynamically"
  }, {
    id: uuid(),
    text: "Can apply CSS classes dynamically"
  }, {
    id: uuid(),
    text: "Can use CSS modules to style a React application"
  }, {
    id: uuid(),
    text: "Can create and use styled components in a React application"
  }, {
    id: uuid(),
    text: "Can add and use TailwindCSS in a React application"
  }, {
    id: uuid(),
    text: "Can add and use MaterialUI in a React application"
  }
];

function App() {
  const [lessonOutcomes, setLessonOutcomes] = useState(INITIAL_OUTCOMES);
  const [outcome, setOutcome] = useState("");

  const addOutcome = () => {
    if (outcome.trim() !== "") {
      const newOutcome = {
        id: uuid(),
        text: outcome
      };

      setLessonOutcomes((prevLessonOutcomes) => [...prevLessonOutcomes, newOutcome]);
      setOutcome("");
    }
  };

  const deleteOutcome = (outcome) => {
    setLessonOutcomes((prevLessonOutcomes) => {
      const newLessonOutcomes = prevLessonOutcomes.filter((item) => {
        return item.id !== outcome.id;
      });
      return newLessonOutcomes;
    });
  };

  return (
    <>
      <div>
      </div>
      <h1>Styling React Applications</h1>
      <div>
        <OutcomeInput outcome={outcome} setOutcome={setOutcome} addOutcome={addOutcome} />
        <OutcomeList outcomeList={lessonOutcomes} removeOutcome={deleteOutcome} />
      </div>
    </>
  )
}

export default App
