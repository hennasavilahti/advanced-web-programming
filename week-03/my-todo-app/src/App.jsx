import './App.css';
import ListItem from './ListItem';

function App() {
  const todoItems = [
    {
      id: 1,
      text: 'Learn essential JS for React',
    },
    {
      id: 2,
      text: 'Learn React Basics & Working with Components',
    },
    {
      id: 3,
      text: 'Learn about React State & Working with Events',
    },
    {
      id: 4,
      text: 'Learn to Render Lists & Conditional Content',
    },
  ];
  return (
    <div className="my_div">
      <h1>My ToDo List</h1>
      <p>Keeping track of things since 2023!</p>
      <ul>
        <ListItem id={todoItems[0].id} text={todoItems[0].text} />
        <ListItem id={todoItems[1].id} text={todoItems[1].text} />
        <ListItem id={todoItems[2].id} text={todoItems[2].text} />
        <ListItem id={todoItems[3].id} text={todoItems[3].text} />
      </ul>
    </div>
  );
}

export default App;
