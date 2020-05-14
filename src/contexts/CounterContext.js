import React, { createContext } from 'react';

const CounterContext = createContext('');

export const getCounter = Component => props => (
  <CounterContext.Consumer>
    {value => <Component {...props} counter={value} />}
  </CounterContext.Consumer>
);

export default CounterContext;
  
