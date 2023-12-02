import { useState } from 'react';

import './LearningOutcomeForm.css';

const LearningOutcomeForm = (props) => {
  // State hook for following the added outcome
  const [enteredOutcome, setEnteredOutcome] = useState('');

  // Eventhandler for the text input onChange event
  const outcomeAddedHandler = (event) => {
    setEnteredOutcome(event.target.value);
  };

  // Eventhandler when the submit button is pressed
  const submitHandler = (event) => {
    event.preventDefault();
    props.onOutcomeAdded(enteredOutcome);
  };

  return (
    <form onSubmit={submitHandler} className="learning-outcome-form">
      <input
        type="text"
        onChange={outcomeAddedHandler}
        value={enteredOutcome}
        className="learning-outcome-form__input"
      />
      <button type="submit" className="learning-outcome-form__button">
        ➕
      </button>
    </form>
  );
};

export default LearningOutcomeForm;
