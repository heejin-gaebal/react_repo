import { createContext, useContext, useReducer } from 'react';

//컨텍스트로 사용할 카운터컨텍스트 생성
const CounterContext = createContext();

//카운터컨텍스트의공간을 제공할 provider
const CounterContextProvider = ({ children }) => {
  //선언
  const initialState = { num: 0 };
  const reducer = (state, action) => {
    console.log(1234);

    switch (action.type) {
      case 'plus':
        return { ...state, num: state.num + 1 };
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  // 리턴 - html
  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

//컨텍스트를 사용하기 위한 useContext 생성
const useCounterContext = () => useContext(CounterContext);

export { CounterContextProvider, useCounterContext };
