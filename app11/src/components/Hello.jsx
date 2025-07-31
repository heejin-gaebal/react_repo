import { useContext } from 'react';
import World from './World';
import { NumContext, StrContext } from '../context/MyContext';

const Hello = () => {
  //context사용 - 어떤 context를 쓸건지 지정
  console.log('hello re-render 잘됨');

  const strValue = useContext(StrContext);
  const numValue = useContext(NumContext);

  console.log(strValue);
  console.log(numValue);

  return (
    <>
      <h3>Hello!!</h3>
      {/* <World /> */}
    </>
  );
};

export default Hello;
