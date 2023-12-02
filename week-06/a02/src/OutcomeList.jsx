import listItemStyles from './ListItem.module.css';
import outcomeElementStyles from './OutcomeElement.module.css';

const OutcomeList = ({ outcomeList, removeOutcome }) => {
  const outcomesElement = () => {
    return (
      <ul className="todo-list">
        {outcomeList.map((entry) => (
          <div className={outcomeElementStyles.wrapper} key={entry.id}>
            <li className={listItemStyles.listItem}> {entry.text} </li>
            <button
              className="delete-button"
              onClick={() => {
                removeOutcome(entry);
              }}
            >
              🗑️
            </button>
          </div>
        ))}
      </ul>
    );
  };

  return (
    <>
      {}
      {outcomeList?.length > 0 ? (
        outcomesElement()
      ) : (
        <div className="empty">
          <p>No outcomes found</p>
        </div>
      )}
    </>
  );
};

export default OutcomeList;
