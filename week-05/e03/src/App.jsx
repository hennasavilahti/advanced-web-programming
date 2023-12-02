import { useState } from 'react';
import AlertMessage from './AlertMessage';

import './App.css';

function App() {
  const [item, setItem] = useState('');
  const [items, setItems] = useState(['Apple', 'Banana', 'Cherry']);

  // Handler for when the text change in the input
  const handleInputChange = (event) => {
    console.log(event.target.value);
    setItem(event.target.value);
  };

  // Handler to add the team to the Teams array
  const handleAddItem = () => {
    console.log('Button clicked');

    if (item.length == 0) {
      console.log('Empty text');
      return;
    }

    setItems((prevItems) => {
      return [...prevItems, item];
    });
  };

  // Handler to remove an item
  const removeItem = (itemToRemove) => {
    console.log('Remove item called');
    setItems((prevItems) => prevItems.filter((item) => item !== itemToRemove));
  };

  const isListEmpty = () => {
    if (items.length === 0) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      <h1>Learning to render lists and show conditional content in React</h1>
      <AlertMessage showAlert={isListEmpty()} />
      {items.map((item) => (
        <li key={item} onClick={() => removeItem(item)}>
          {item}
        </li>
      ))}
      <div>
        <input
          type="text"
          value={item}
          onChange={handleInputChange}
          placeholder="Enter a item..."
        />
        <button onClick={handleAddItem}>Add</button>
      </div>
    </>
  );
}

export default App;
