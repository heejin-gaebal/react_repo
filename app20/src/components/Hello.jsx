import React from 'react';

const Hello = React.memo((props) => {
  //부모가 렌더링될때 자식도 렌더링이 되는 막음
  //전달받는 props가 바뀌면 렌더링 됨
  console.log('hello rendering~~');
  console.log('props :', props);

  return (
    <>
      <h1>Hello useMemo!!</h1>
    </>
  );
});

export default Hello;
