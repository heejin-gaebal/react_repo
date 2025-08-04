import { useSelector, useDispatch } from 'react-redux';
import { minus, plus } from '../redux/counter/counterSlice';

const Counter = () => {
  const cnt = useSelector((state) => state.counter.cnt); //함수를 넣어서 state가져오기 => cnt : 0

  const dispatch = useDispatch();
  return (
    <>
      <h1>Counter</h1>
      <h2>CNT : {cnt}</h2>
      <button
        onClick={() => {
          dispatch(plus());
        }}
      >
        plus
      </button>
      <button
        onClick={() => {
          dispatch(minus());
        }}
      >
        minus
      </button>
    </>
  );
};

export default Counter;
