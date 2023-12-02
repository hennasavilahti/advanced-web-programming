import './LearningOutcome.css';

const LearningOutcome = ({
  item,
  id,
  text,
  removeOutcome,
  toggleStrikethrough,
}) => {
  return (
    <li className="learning-outcome-item">
      <p className="learning-outcome-item__id">{id}</p>
      <p
        className=".learning-outcome-item__text"
        onClick={() => {
          toggleStrikethrough(item);
        }}
      >
        {' '}
        {item.strikethrough ? <s>{text}</s> : text}
      </p>
      <button onClick={() => removeOutcome(item)}>❌</button>
    </li>
  );
};

export default LearningOutcome;
