import buttonStyles from './Button.module.css';
import inputBoxStyles from './InputBox.module.css';

const OutcomeInput = ({ outcome, setOutcome, addOutcome }) => {
  return (
    <div className="input-wrapper">
      <input
        className={inputBoxStyles.inputBox}
        type="text"
        name="todo"
        value={outcome}
        placeholder="Add a new outcome"
        onChange={(e) => {
          setOutcome(e.target.value);
        }}
      />
      <button className={buttonStyles.button} onClick={addOutcome}>
        Add
      </button>
    </div>
  );
};

export default OutcomeInput;
