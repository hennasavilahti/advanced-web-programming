import { useRef, useState } from 'react';
import axios from 'axios';

import './DataInput.css';

const DataInput = ({ setPosts, setError, setIsLoading }) => {
  const titleRef = useRef(null);
  const bodyRef = useRef(null);

  const addPostHandler = async (post) => {
    try {
      setError(null);
      setIsLoading(true);

      const response = await axios.post(
        'https://jsonplaceholder.typicode.com/posts',
        post,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      setPosts((prevPosts) => [
        ...prevPosts,
        { id: prevPosts.length + 1, ...post },
      ]);
    } catch (error) {
      setError('Failed to add post.');
    }

    setIsLoading(false);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const post = {
      title: titleRef.current.value,
      body: bodyRef.current.value,
    };
    addPostHandler(post);
  };

  return (
    <div className="post__form">
      <form onSubmit={submitHandler}>
        <div className="post__form__control">
          <input id="title" placeholder="Title" ref={titleRef} />
        </div>
        <div className="post__form__control">
          <textarea id="body" placeholder="Body" ref={bodyRef} />
        </div>
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default DataInput;
