import { useEffect, useState } from 'react';

const Hello = () => {
  console.log('Hello Component 렌더링~~');
  const [num, setNum] = useState(0);

  // useEffect(함수, 의존성 배열) : 함수의 리턴값으로 cleanUp전달가능
  //렌더링 이후때 실행됐으면하는 함수가 있을 때 사용
  function f01() {
    const x = setInterval(() => {
      console.log('3초 인터벌');
    }, 3000);
    // 클린업함수
    return () => {
      clearInterval(x);
    };
  }
  /*
    mount(render)
    effect //timer
    변경시 re-render
    effect X
  */
  //return 에 함수를 주는데 클린업함수를 준다
  //언마운트 됐을때 실행
  useEffect(f01, [num]);
  /*
    의존성 배열 없을 시
    이렇게 무한실행될수있음
    mount(render)
    effect //fetch -> data -> state
    update(re-render)
    effect //fetch -> data -> state
    update(re-render)
    effect //fetch -> data -> state.....

    최초 렌더링 후 딱 한번만 실행됐으면 할때 이와 같은 상황 의존성 배열로 해결
  */

  return (
    <>
      <h1>🎀Hello!!🎀</h1>
      <h2>Number : {num}</h2>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        plus
      </button>
    </>
  );
};

export default Hello;
