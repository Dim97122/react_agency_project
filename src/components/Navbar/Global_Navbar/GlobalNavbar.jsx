import React from 'react';
import { withUser } from '../../../contexts/UserContext';
import { getCounter } from '../../../contexts/CounterContext';
import { Link } from 'react-router-dom';

const GlobalNavbar = ({ user, counter }) => {
  console.log(counter.currentNumber);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/">
          <div className="navbar-brand">LOGO</div>
        </Link>
        <div className="navbar-nav">
          <Link to="/about">
            <div className="nav-item nav-link">About </div>
          </Link>
          <Link to="/works">
            <div className="nav-item nav-link">Works </div>
          </Link>
          <div className="nav-item nav-link">{user.first_name}</div>
          <div>
            <button onClick={counter.increment}> + </button>
            <button onClick={counter.decrement}> - </button>
          </div>
          <div>
            {counter.currentNumber}
          </div>
        </div>
      </nav>
    </>
  );
}
export default withUser(getCounter(GlobalNavbar));
