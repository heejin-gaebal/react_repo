import { useReducer } from 'react';

const Counter = () => {
  const initialState = 100;
  // const [변수, 함수] = useReducer(변수(리듀서), 초기값[객체]);
  const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
      case 'PLUS':
        return state + 1;
      //return이 break역할!
      case 'MINUS':
        return state - 1;
      case 'RESET':
        return initialState;
    }
    // state값 변경
    // if (action.type === 'PLUS') {
    //   return state + 1;
    // } else if (action.type === 'MINUS') {
    //   return state - 1;
    // } else if (action.type === 'RESET') {
    //   return initialState; //초기값으로 원복
    // }
  };
  const [num, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>카운트 : {num}</h1>
      <button
        onClick={() => {
          dispatch({ type: 'PLUS' });
          // dispatch가 키:값을 액션의 타입에 전달
        }}
      >
        PLUS
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'MINUS' });
        }}
      >
        MINUS
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'RESET' });
        }}
      >
        RESET
      </button>
    </>
  );
};

export default Counter;
