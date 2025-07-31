import { NumContextProvider, useNumContext } from '../context/CounterContext';

const Counter = () => {
  const { state, dispatch } = useNumContext();
  return (
    <>
      <h1>카운터</h1>
      <h1>숫자 : {state}</h1>
      <button
        onClick={() => {
          dispatch({
            type: 'plus',
          });
        }}
      >
        plus
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'minus' });
        }}
      >
        minus
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'reset' });
        }}
      >
        reset
      </button>
    </>
  );
};

export default Counter;
