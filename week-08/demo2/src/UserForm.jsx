import { useRef } from 'react';

import './UserForm.css';

const UserForm = ({ addUser }) => {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);

  const submitHandler = (event) => {
    event.preventDefault();
    const user = {
      first_name: firstNameRef.current.value,
      last_name: lastNameRef.current.value,
      email: emailRef.current.value,
    };
    addUser(user);
  };

  return (
    <div>
      <h3>Add new user</h3>
      <form onSubmit={submitHandler}>
        <div className="user__form__control">
          <label htmlFor="first_name">Firstname</label>
          <input id="first_name" ref={firstNameRef} />
        </div>
        <div className="user__form__control">
          <label htmlFor="last_name">Lastname</label>
          <input id="last_name" ref={lastNameRef} />
        </div>
        <div className="user__form__control">
          <label htmlFor="email">Email</label>
          <input id="email" ref={emailRef} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
