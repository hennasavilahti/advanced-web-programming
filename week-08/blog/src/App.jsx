import { useState } from 'react';
import DataDisplay from './components/DataDisplay';
import ErrorBoundary from './components/ErrorBoundary';
import DataInput from './components/DataInput';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <div>
      <ErrorBoundary>
        <DataDisplay
          posts={posts}
          setPosts={setPosts}
          error={error}
          setError={setError}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
      </ErrorBoundary>

      <ErrorBoundary>
        <DataInput
          setPosts={setPosts}
          setError={setError}
          setIsLoading={setIsLoading}
        />
      </ErrorBoundary>
    </div>
  );
};

export default App;
