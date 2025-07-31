import { useContext, useState } from 'react';
import styled from 'styled-components';
import { MyContext, useMyContext, GetValue } from './context/CountContext';

const Layout = styled.div`
  width: 100%;
  margin: auto;
  text-align: center;
`;

const Counter02 = () => {
  // const [num, setNum] = useState(456); //리턴값이 배열.. 요소2개있는 state / setter
  // useState 는 private으로 막혀잇기에 num이라는 변수는 변경불가
  // num에 값을 지정해서 바꿔준다고 해도 useState의 value에 닿을수없음
  // let num = 10; 이런거 불가능

  //MyContext의 저장공간을 사용하겠다
  const { state, dispatch } = GetValue();

  return (
    <Layout>
      <h1>Counter02</h1>
      <h2>Number : {state}</h2>
      <button
        onClick={() => {
          dispatch({ type: 'plus' });
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
    </Layout>
  );
};

export default Counter02;
