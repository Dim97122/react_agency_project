import React, { createContext } from 'react';

const UserContext = createContext('');

export const withUser = Component => props => (
  <UserContext.Consumer>
    {value => <Component {...props} user={value} />}
  </UserContext.Consumer>
);

export default UserContext;
