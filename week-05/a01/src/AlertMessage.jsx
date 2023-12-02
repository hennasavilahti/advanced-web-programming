const AlertMessage = ({ isListEmpty }) => {
  return <div>{isListEmpty && <h2>Add an outcome!</h2>}</div>;
};

export default AlertMessage;
