import React, { useState } from 'react';
const PersonForm = (props) => {
  const { initialFirstName, initialLastName, onSubmitProp } = props;
  const [firstName, setFirstName] = useState(initialFirstName);
  const [lastName, setLastName] = useState(initialLastName);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSubmitProp({ firstName, lastName });
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className='container'>
        <div className='form-control'>
          <h1>Person Form</h1>
          <p>
            <label>First Name</label>
            <input
              type='text'
              name='firstName'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </p>
          <p>
            <label>Last Name</label>
            <input
              type='text'
              name='lastName'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </p>
          <input className='button' type='submit' />
        </div>
      </div>
    </form>
  );
};

export default PersonForm;
