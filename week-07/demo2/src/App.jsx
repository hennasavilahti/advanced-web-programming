import { useState } from 'react';
import MyComponent from './MyComponent';

import './App.css';
import ThemeContext from './ThemeContext';

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <>
      <ThemeContext.Provider value={theme}>
        <h1>Enhancing React with Hooks</h1>
        <div className="card">
          <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            Toggle Theme
          </button>
          <MyComponent />
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
