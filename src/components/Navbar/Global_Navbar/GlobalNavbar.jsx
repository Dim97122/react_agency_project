import React from 'react';
import { Link } from 'react-router-dom';

const GlobalNavbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/works">Works</Link>
        </li>
      </ul>
    </nav>
  );
}
export default GlobalNavbar;
