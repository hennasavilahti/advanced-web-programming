import { useState } from 'react';
import './NewLearningOutcomeForm.css';

const NewLearningOutcomeForm = (props) => {
  const [enteredSubject, setEnteredSubject] = useState('');

  const subjectChangeHandler = (event) => {
    setEnteredSubject(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const outcome = enteredSubject;
    props.onOutcomeAdded(outcome);
    setEnteredSubject('');
  };

  return (
    <form onSubmit={submitHandler} className="new-outcome__form">
      <label className="new-outcome__label">New Outcome:</label>
      <input
        className="new-outcome__subject"
        onChange={subjectChangeHandler}
        type="text"
        value={enteredSubject}
      />
      <button className="new-outcome__button" type="submit">
        ➕ Add
      </button>
    </form>
  );
};

export default NewLearningOutcomeForm;
