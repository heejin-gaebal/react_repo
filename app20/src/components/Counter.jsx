import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Hello from './Hello';

const Counter = () => {
  console.log('Counter Render~~!!');

  const [num, setNum] = useState(0);

  function calc() {
    let sum = 0;
    for (let i = 1; i <= 100; ++i) {
      sum += i;
    }
    return sum;
  }

  const f = useCallback(calc, []);

  function plusFive() {
    setNum((prev) => {
      return prev + 1;
    });
    setNum((prev) => {
      return prev + 1;
    });
    setNum((prev) => {
      return prev + 1;
    });
    setNum((prev) => {
      return prev + 1;
    });
    setNum((prev) => {
      return prev + 1;
    });
  }

  const result = useMemo(calc, []);
  console.log('result : ' + result);

  //useRef
  const x = useRef();
  console.log('x', x.current); //x를 참조하는 애가 나옴
  useEffect(() => {
    x.current.focus(); // input에 포커스를 준다
  }, []);

  return (
    <>
      <h1>Counter</h1>
      <h1>Cnt : {num}</h1>
      <button
        onClick={plusFive}
        //내부함수는 인자값(기존값)을 전달하면서 실행
      >
        PLUS
      </button>
      <hr />
      <input type="text" ref={x} />
      <hr />
      <Hello a="10" b="20" f={f} />
      {/* 
        컴포넌트에 함수를 인자값으로 넣고 리랜더되면 기존함수가 아닌 새로운 함수로 감지되어 자식도 리랜더됨
        이를 방지하기 위해 useCallback 사용 / 함수는 리랜더되지않음
        => 함수를 넘기면서 useCallback에 담아서 넘기면 해당 callback으로 받으면 자식은 렌더링이 안된다
        [버튼을 눌러서 작동되는 calc함수를 ]
        React.memo를 통해서 만들어진 컴포넌트는, props가 변경되면 리렌더링 된다.
      */}
    </>
  );
};

export default Counter;
