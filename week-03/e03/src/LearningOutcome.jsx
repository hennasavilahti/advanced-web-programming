import './LearningOutcome.css';

const LearningOutcome = (props) => {
  return (
    <li>
      {props.id} - {props.text}
    </li>
  );
};

export default LearningOutcome;
