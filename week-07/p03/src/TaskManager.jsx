// Add the import for the reducer hook
import { useReducer } from 'react';

const TaskManager = () => {
  //Implement the reducer function
  const taskReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return [
          ...state,
          { id: Date.now(), text: action.text, completed: false },
        ];
      case 'TOGGLE_TASK':
        return state.map((task) =>
          task.id === action.id ? { ...task, completed: true } : task
        );
      default:
        return state;
    }
  };

  // initialise the reducer hook
  const [tasks, dispatch] = useReducer(taskReducer, []);

  // Create the add task handler, that calls the reducer dispatch
  const addTask = (text) => {
    dispatch({ type: 'ADD_TASK', text });
  };

  // Create the toggle task handler, that calls the reducer dispatch
  const toggleTask = (id) => {
    dispatch({ type: 'TOGGLE_TASK', id });
  };

  return (
    <div>
      <h1>Tasks</h1>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            onClick={() => toggleTask(task.id)}
            style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
          >
            {task.text}
          </li>
        ))}
      </ul>
      <button onClick={() => addTask('New Task')}>➕ Add Task</button>
    </div>
  );
};

export default TaskManager;
