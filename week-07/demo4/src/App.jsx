import { useCallback, useState } from 'react';
import Items from './Items';

import './App.css';

function App() {
  console.log('The App component called');
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };
  /*
  const addItem = () => {
    setItems((prevItems) => [...prevItems, "New Item"]);
  };*/

  const addItem = useCallback(() => {
    setItems((prevItems) => [...prevItems, 'New Item']);
  }, [items]);

  return (
    <>
      <h1>Enhancing React with Hooks</h1>
      <div className="card">
        <Items items={items} addItem={addItem} />
        <hr />
        <div>
          Count: {count}
          <button onClick={increment}>➕</button>
        </div>
      </div>
    </>
  );
}

export default App;
