import Hello from './Hello';

const World = () => {
  console.log('world re-render 잘됨');

  return (
    <>
      <h3>World!!!</h3>
      <Hello />
    </>
  );
};

export default World;
