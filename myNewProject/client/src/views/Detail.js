import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
const Detail = (props) => {
  const [person, setPerson] = useState({});
  useEffect(() => {
    axios.get('http://localhost:8000/api/people/' + props.id).then((res) =>
      setPerson({
        ...res.data,
      }),
    );
  });
  return (
    <div>
      <div>
        <p>First Name: {person.firstName}</p>
        <p>Last Name: {person.lastName}</p>
      </div>
      <Link to={'/people'}>
        <input type='button' value=' <= People' />
      </Link>
      <Link to={'/people/' + props.id + '/edit'}>
        <input type='button' value='Edit' />
      </Link>
    </div>
  );
};
export default Detail;
