import ListItem from './ListItem';

import './App.css';

function App() {
  return (
    <>
      <div className="my_div">
        <h1>Learning Basic React</h1>
        <p>Things to learn this week:</p>
        <ul>
          <ListItem></ListItem>
        </ul>
      </div>
    </>
  );
}

export default App;
