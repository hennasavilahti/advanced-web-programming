import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light'); // Default theme is 'light'

  // Load theme preference from local storage when component renders the first time
  useEffect(() => {
    const storedTheme = localStorage.getItem('user-theme');
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  // Save theme preference to local storage whenever the theme changes
  useEffect(() => {
    console.log('Storage useEffect called');
    localStorage.setItem('user-theme', theme);
  }, [theme]);

  // Fix the buttons onClick handlers
  return (
    <>
      <h1>Enhancing React with Hooks</h1>
      <div className="card">
        <p>Selected Theme: {theme}</p>
        <button onClick={() => setTheme('light')}>Light Theme</button>
        <button onClick={() => setTheme('dark')}>Dark Theme</button>
      </div>
    </>
  );
}

export default App;
