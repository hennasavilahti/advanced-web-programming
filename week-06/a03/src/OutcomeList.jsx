import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/DeleteForever';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const OutcomeList = ({ outcomeList, removeOutcome }) => {
  const outcomesElement = () => {
    return (
      <div className="todo-list">
        {outcomeList.map((entry) => (
          <Box
            sx={{ display: 'flex', marginTop: '10px' }}
            className="todo"
            key={entry.id}
          >
            <ListItemText> {entry.text} </ListItemText>
            <IconButton
              aria-label="delete"
              className="delete-button"
              onClick={() => {
                removeOutcome(entry);
              }}
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        ))}
      </div>
    );
  };

  return (
    <>
      {}
      {outcomeList?.length > 0 ? (
        outcomesElement()
      ) : (
        <div className="empty">
          <Typography>No outcomes found</Typography>
        </div>
      )}
    </>
  );
};

export default OutcomeList;
