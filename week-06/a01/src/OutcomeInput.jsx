import Button from './Button.jsx';
import Input from './Input.jsx';

const OutcomeInput = ({ outcome, setOutcome, addOutcome }) => {
  return (
    <div className="input-wrapper">
      <Input
        type="text"
        name="todo"
        value={outcome}
        placeholder="Add a new outcome"
        onChange={(e) => {
          setOutcome(e.target.value);
        }}
      />
      <Button className="add-button" onClick={addOutcome}>
        Add
      </Button>
    </div>
  );
};

export default OutcomeInput;
