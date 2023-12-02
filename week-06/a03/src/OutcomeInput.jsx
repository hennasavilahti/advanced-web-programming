import Button from '@mui/material/Button';
import Input from '@mui/material/Input';

const OutcomeInput = ({ outcome, setOutcome, addOutcome }) => {
  return (
    <div className="input-wrapper">
      <Input
        placeholder="Add a new outcome"
        value={outcome}
        onChange={(e) => {
          setOutcome(e.target.value);
        }}
      />
      <Button
        variant="text"
        size="large"
        className="add-button"
        onClick={addOutcome}
      >
        Add
      </Button>
    </div>
  );
};

export default OutcomeInput;
