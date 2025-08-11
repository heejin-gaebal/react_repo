import { useDispatch, useSelector } from 'react-redux';
import { minus, minusOne, plus, plusOne } from '../redux/counterSlice';
const Counter = () => {
  // const state = useSelector(전역공간의 어떤 객체.counter);
  // obj를 받는데 obj는 여러가지 key:value가 있는 객체
  const state = useSelector((obj) => {
    return obj.counter;
  });
  console.log(state);

  // 리듀서한테 전달해서 함수 호출하기
  const dispatch = useDispatch();

  return (
    <>
      <h1>Counter</h1>
      <h1>Num : {state.cnt}</h1>
      <button
        onClick={() => {
          dispatch(plusOne());
        }}
      >
        Plus One
      </button>
      <button
        onClick={() => {
          dispatch(minusOne());
        }}
      >
        Minus One
      </button>{' '}
      <br />
      <br />
      <button
        onClick={() => {
          dispatch(plus(10));
          //plus(5) 이렇게 값을 주면 action.payload에 전달되어 실행이 된다.
          //이런 값 전달은 input 태그에서 사용자에게 직접 받으면 된다.
        }}
      >
        Plus N
      </button>
      <button
        onClick={() => {
          dispatch(minus(10));
        }}
      >
        Minus N
      </button>
    </>
  );
};

export default Counter;
