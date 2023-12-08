import { useState, useEffect, useCallback } from 'react';
import User from './User';
import UserForm from './UserForm';

import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsers = useCallback(async () => {
    try {
      setError(null);
      setIsLoading(true);
      const response = await fetch('https://reqres.in/api/users?delay=3');
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const json = await response.json();
      console.log(json.data);
      setUsers(json.data);
    } catch (error) {
      setError(error);
      console.error(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  let content = <p>No user data found</p>;

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Fetching data... </p>;
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

  const addUserHandler = async (user) => {
    console.log(user);
    try {
      const response = await fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        throw new Error('Something went wrong, could not add data');
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <h1>Incorporating data to React</h1>
      <div className="card">
        <UserForm addUser={addUserHandler} />
      </div>
      <div className="card">{content}</div>
    </>
  );
}

export default App;
