// Add the correct import
import { useRef } from 'react';

const AlertUser = () => {
  const inputRef = useRef();

  const showAlert = () => {
    // call browser alert method with the correct value
    alert('Entered Text: ' + inputRef.current.value);
  };

  //Fix the input to use the hook
  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={showAlert}>Show Alert</button>
    </div>
  );
};

export default AlertUser;
