import { useNumContext, useStrContenxt } from '../context/MyContext';

const Hello = () => {
  //context사용 - 어떤 context를 쓸건지 지정
  console.log('hello re-render 잘됨');

  const [str, setStr] = useStrContenxt();
  const { num, plus, minus } = useNumContext();

  console.log(str);
  console.log(num);

  return (
    <>
      <h1>Hello!!</h1>
      <h2>str : {str}</h2>
      <h2>num : {num}</h2>
      <button onClick={plus}>Plus</button>
      <button onClick={minus}>Minus</button>
    </>
  );
};

export default Hello;
