import './LearningOutcome.css';

const LearningOutcome = (props) => {
  return (
    <li className='learning-outcome-item'>
      <p className='learning-outcome-item__id'>{props.id}</p>
      <p className='.learning-outcome-item__text '> {props.text}</p>
    </li>
  )
};

export default LearningOutcome;