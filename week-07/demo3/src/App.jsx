import { useReducer } from 'react';
import './App.css';

function App() {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'increase':
        return { count: state.count + 1 };
      case 'decrease':
        return { count: state.count - 1 };
      default:
        throw new Error('Unsupported action type');
    }
  };

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
      <h1>Enhancing React with Hooks</h1>
      <div className="card">
        <h4>Count: {state.count}</h4>
        <button
          onClick={() => {
            dispatch({ type: 'increase' });
          }}
        >
          ➕
        </button>
        <button
          onClick={() => {
            dispatch({ type: 'decrease' });
          }}
        >
          ➖
        </button>
      </div>
    </>
  );
}

export default App;
