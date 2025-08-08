import { useState } from 'react';
import styled from 'styled-components';

const MyButton = styled.button`
  height: 70px;
  border-radius: 5px;
  font-size: 1.2em;
  padding: 0 20px;
  font-weight: 700;
  white-space: nowrap;
  background-color: ${({ x }) => {
    return x ? 'skyblue' : 'pink';
  }};
  /* 
    props인자값을 받아 리턴~~ 
    props.x가 true면 핑크 아니면 하늘
  */
`;

const Test02 = () => {
  const [isOn, setIsOn] = useState(true);

  return (
    <>
      <MyButton
        x={isOn}
        onClick={() => {
          setIsOn(!isOn);
        }}
      >
        Toggle Button
      </MyButton>
    </>
  );
};

export default Test02;
