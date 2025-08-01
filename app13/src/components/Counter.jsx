import { useContext, useState } from 'react';
import CounterDisplay from './CounterDisplay';
import CounterPlusBtn from './CounterPlusBtn';
import CounterMinusBtn from './CounterMinusBtn';
import CounterCalcBtn from './CounterCalcBtn';
import { MyContext, useMyContext } from '../context/MyContext';

const Counter = () => {
  // MyContext사용하겠다
  // const value = useContext(MyContext);
  // const value = useMyContext();
  const { state, dispatch } = useMyContext();
  //state, dispatch가 담겨있다

  // const [num, setNum] = useState(50); 리듀스만들면서 주석

  return (
    <>
      <h1>Counter</h1>
      {/* 컴포넌트의 파라미터에 {자바스크립트}x의 num값을 담기  */}
      <CounterDisplay x={state.num} />
      <CounterCalcBtn
        bgc={'skyblue'}
        str="PLUS"
        f={() => {
          dispatch({ type: 'plus' });
        }}
      />
      <CounterCalcBtn
        // bgc={'pink'}
        str="MINUS"
        f={() => {
          dispatch({ type: 'minus' });
        }}
      />
      <CounterCalcBtn
        bgc={'pink'}
        str="RESET"
        f={() => {
          dispatch({ type: 'reset' });
        }}
      />
      {/* <CounterPlusBtn num={num} setNum={setNum} />
      <CounterMinusBtn num={num} setNum={setNum} /> */}
    </>
  );
};

export default Counter;
