import { useState } from 'react';

const Counter = () => {
  const [num, setNum] = useState(0); //초기값 셋팅 - 리턴값 배열
  // const num = arr[0]; //value
  // const setNum = arr[1]; //setValue 함수

  return (
    <>
      <h1>값 : {num}</h1>
      <button
        onClick={() => {
          setNum(num + 1); //함수 안에 기존값+1
        }}
      >
        PLUS
      </button>
    </>
  );
};

export default Counter;

/*
  [ state ]
  일반적인 변수는 컴포넌트와 연결안되므로 state 변수는 컴포넌트와 연결이 가능
 */
