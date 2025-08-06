import { useState } from 'react';
import { useCounterContext } from '../../components/MyContext';

const Counter = () => {
  const [calc, setCalc] = useState(0);

  const { state, dispatch } = useCounterContext();

  function handleCount(evt) {
    evt.preventDefault();
    setCalc(evt.target.value);
  }

  // function handleBtn(evt) {
  //   evt.preventDefault();
  //   dispatch()
  // }

  return (
    <>
      <h1>input 문자열 연습</h1>
      <h1>{calc}</h1>
      <hr />
      <h1>Counter 연습</h1>
      <h1>Counter : {state.num}</h1>
      <button
        onClick={() => {
          dispatch({ type: 'plus' });
        }}
      >
        Plus
      </button>
      <button
        onClick={() => {
          // setNum(num - 1);
        }}
      >
        Minus
      </button>
      <button onClick={() => {}}>Reset</button>

      <hr />
      <h1>input으로 값 넣기</h1>
      <input
        type="text"
        name="count"
        placeholder="값을 입력해주세용"
        onChange={handleCount}
      />
      {/* <button onClick={handleBtn}>+</button>
      <button onClick={handleBtn}>-</button> */}
    </>
  );
};

export default Counter;
