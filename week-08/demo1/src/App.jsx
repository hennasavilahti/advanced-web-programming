import { useState, useEffect, useCallback } from 'react';
import User from './User';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsers = useCallback(async () => {
    try {
      setError(null);
      setIsLoading(true);
      const response = await fetch('https://reqres.in/api/users?delay=2');

      if (!response.ok) {
        throw new Error('Something dodgy happened!');
      }

      const json = await response.json();
      console.log(json.data);
      setUsers(json.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.error(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  let content = <p>No users available</p>;

  if (error) {
    content = <p>{error.message}</p>;
  }

  if (isLoading) {
    content = <p>🚛 Fetching users ...</p>;
  }

  if (users.length > 0) {
    content = (
      <ul>
        {users.map((user) => (
          <User
            key={user.id}
            firstName={user.first_name}
            lastName={user.last_name}
            email={user.email}
          />
        ))}
      </ul>
    );
  }

  return (
    <>
      <h1>Incorporating data to React</h1>
      <div className="card">
        <button onClick={fetchUsers}>Fetch Users</button>
      </div>
      <div className="card">{content}</div>
    </>
  );
}
export default App;
