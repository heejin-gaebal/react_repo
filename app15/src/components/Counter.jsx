import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
// import { useMyContext } from '../context/MyContext';
// import { MyContext, useMyContext } from '../context/MyContext';

const Layout = styled.div`
  margin: auto;
  text-align: center;
`;

const Counter = () => {
  // context 사용하기 ---------------------------------------------------
  // const { num, setNum } = useMyContext(); //객체가 들어가있으므로 구조분해할당으로 {객체}
  // const { state, dispatch } = useMyContext();

  //redux 사용하기 ------------------------------------------------------
  //state를 인자로 받는 함수의 리턴값을 이용
  // store 내부의 state의 속성중 cnt꺼내기

  // state를 화면에 보여주기 reducer를 사용
  // => dispatch를 사용해서 acticon을 reducer한테 전달한다
  const counterState = useSelector((state) => {
    //state를 가져오려고 useSelector로 선택함
    // return state.cnt;
    return state.c;
  });
  console.log(counterState);
  const dispatch = useDispatch(); //함수가 리턴 | dispatch를 쓰기위해 useDispatch로 가져옴

  return (
    <Layout>
      <h1>Counter</h1>
      <h2>Num : {counterState.cnt}</h2>
      <button
        onClick={() => {
          dispatch({ type: 'plus' });
        }}
      >
        Plus
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'minus' });
        }}
      >
        Minus
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'plus', data: 10 });
        }}
      >
        Plus Ten
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'minus', data: 10 });
        }}
      >
        Minus Ten
      </button>
    </Layout>
  );
};

export default Counter;
