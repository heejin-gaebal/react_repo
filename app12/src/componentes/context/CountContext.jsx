import { createContext, useContext, useReducer, useState } from 'react';

const MyContext = createContext();

const MyContextProvider = (props) => {
  const initialState = 999;
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
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MyContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

const GetValue = () => {
  return useContext(MyContext);
};

export { MyContext, MyContextProvider, GetValue };
