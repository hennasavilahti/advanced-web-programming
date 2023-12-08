// add the correct import that will provide the context
import { useAuth } from './AuthContext';

const UserStatus = () => {
  const { isAuthenticated, user, login, logout } = useAuth();

  return (
    <div>
      <h2>User Status: {isAuthenticated ? 'Logged In' : 'Logged Out'}</h2>
      <p>User Info: {user ? user.name : 'No User'}</p>
      <button onClick={isAuthenticated ? logout : login}>
        {isAuthenticated ? 'Logout' : 'Login'}
      </button>
    </div>
  );
};

export default UserStatus;
