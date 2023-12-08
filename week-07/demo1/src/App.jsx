import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  // useEffect(() => {
  //   console.log('UseEffect Called');

  //   setTimeout(() => {
  //     setCount((prevCount) => prevCount + 1);
  //   }, 1000);
  // }, []);

  useEffect(() => {
    console.log('UseEffect Called');
    setCalculation(() => count * 2);

    return () => {
      console.log('Clean up called');
    };
  }, [count]);

  return (
    <>
      <h1>Enhancing React with Hooks</h1>
      <div className="card">
        <p>View rendered {count} times!</p>
        <button
          onClick={() => {
            setCount((prevCount) => prevCount + 1);
          }}
        >
          Add
        </button>
        <p>Calculation: {calculation}</p>
      </div>
    </>
  );
}

export default App;
