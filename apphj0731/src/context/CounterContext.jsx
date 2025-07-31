import { createContext, useContext, useReducer, useState } from 'react';

const NumContext = createContext();

const NumContextProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'plus':
        return state + 1;
      case 'minus':
        return state - 1;
      case 'reset':
        return initialState;
    }
  };
  const initialState = 100;

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <NumContext.Provider value={{ state, dispatch }}>
      {children}
    </NumContext.Provider>
  );
};

const useNumContext = () => {
  return useContext(NumContext);
};

export { NumContext, NumContextProvider, useNumContext };
