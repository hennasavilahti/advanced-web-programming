import './App.css';

function App() {
  const name = 'Henna';

  const greet = (name) => {
    return `Hello ${name}!!`;
  };

  return (
    <>
      <h1>Hello {name}</h1>
      <h1>{greet(name)}</h1>
      <p>This is a paragraph</p>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
      </ul>
    </>
  );
}

export default App;
