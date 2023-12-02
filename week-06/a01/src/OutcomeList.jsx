import Button from './Button.jsx';
import ListItem from './ListItem.jsx';
import styled from 'styled-components';

const ListItemContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  gap: 5px;
`;

const OutcomeList = ({ outcomeList, removeOutcome }) => {
  const outcomesElement = () => {
    return (
      <ul className="todo-list">
        {outcomeList.map((entry) => (
          <ListItemContainer className="todo" key={entry.id}>
            <ListItem> {entry.text} </ListItem>
            <Button
              className="delete-button"
              onClick={() => {
                removeOutcome(entry);
              }}
            >
              🗑️
            </Button>
          </ListItemContainer>
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
