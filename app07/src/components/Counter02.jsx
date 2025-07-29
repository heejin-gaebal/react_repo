import { useState } from 'react';

const Counter02 = () => {
  const [value, setValue] = useState(22); //초기값 셋팅

  return (
    <>
      <h1>Counter02</h1>
      <h3>숫자 : {value}</h3>
      <button
        onClick={() => {
          setValue(value + 1);
        }}
      >
        Plus
      </button>
    </>
  );
};

export default Counter02;
