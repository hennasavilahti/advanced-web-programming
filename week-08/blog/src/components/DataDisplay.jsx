import { useCallback, useEffect } from 'react';
import axios from 'axios';
import ListItem from './ListItem';

const DataDisplay = ({
  posts,
  setPosts,
  error,
  setError,
  isLoading,
  setIsLoading,
}) => {
  const fetchPosts = useCallback(async () => {
    try {
      setError(null);
      setIsLoading(true);

      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      );
      setPosts(response.data.slice(0, 10));
    } catch (error) {
      setError('Failed to fetch posts.');
      console.log(error.message);
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  let content = <p>No post data found</p>;

  if (posts.length > 0) {
    content = (
      <ul style={{ textAlign: 'center', width: '100%', margin: '0' }}>
        {posts.map((post) => (
          <ListItem key={post.id} title={post.title} body={post.body} />
        ))}
      </ul>
    );
  }

  if (isLoading) {
    content = <p> 🔃 Loading...</p>;
  }

  if (error) {
    content = <p>⚠️ {error}</p>;
  }

  return <>{content}</>;
};

export default DataDisplay;
