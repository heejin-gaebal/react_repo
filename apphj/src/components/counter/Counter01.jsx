import { useState } from 'react';
import styled from 'styled-components';
const CountDiv = styled.div`
  margin-bottom: 10px;
  & > h1 {
    margin-top: 0;
    display: inline-block;
  }
  & > strong {
    display: inline-block;
    margin: 0 20px;
  }
`;

const Counter01 = () => {
  const [value, setValue] = useState(1);
  return (
    <CountDiv>
      <h1>Counter01</h1>
      <strong>숫자 : {value}</strong>
      <button
        onClick={() => {
          setValue(value + 1);
        }}
      >
        PLUS
      </button>
    </CountDiv>
  );
};

const Counter02 = () => {
  const [value, setValue] = useState(2);
  return (
    <CountDiv>
      <h1>Counter02</h1>
      <strong>숫자 : {value}</strong>
      <button
        onClick={() => {
          setValue(value * 2);
        }}
      >
        PLUS
      </button>
    </CountDiv>
  );
};

const Counter03 = () => {
  const [value, setValue] = useState(3);
  return (
    <CountDiv>
      <h1>Counter03</h1>
      <strong>숫자 : {value}</strong>
      <button
        onClick={() => {
          setValue(value * 3);
        }}
      ></button>
    </CountDiv>
  );
};

export { Counter01, Counter02, Counter03 };
