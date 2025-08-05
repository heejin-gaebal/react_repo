import { useSelector, useDispatch } from 'react-redux';
import { plus, minus } from '../redux/counter/counterSlice';

const Counter = () => {
  const cnt = useSelector((state) => state.counter.cnt);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Counter</h1>
      <h2>카운트 : {cnt}</h2>
      <button
        onClick={() => {
          dispatch(plus());
        }}
      >
        플러스
      </button>
      <button
        onClick={() => {
          dispatch(minus());
        }}
      >
        마이너스
      </button>
    </>
  );
};

export default Counter;
