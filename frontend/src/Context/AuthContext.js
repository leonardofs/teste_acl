import React, { createContext} from 'react';

import useAuth from './hooks/useAuth';

const Context = createContext();

function AuthProvider({ children }) {


  return (
    <Context.Provider value={useAuth()}>
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };