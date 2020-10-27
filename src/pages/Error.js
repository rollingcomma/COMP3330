import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div>
      <h1>Oops! Page not found!</h1>
      <span>Go Back to </span>
      <Link to="/">home page. </Link>
    </div>)
}

export default Error