const AlertMessage = ({ showAlert }) => {
  return <div>{showAlert && <span>The shopping list is empty!</span>}</div>;
};

export default AlertMessage;
