import { useState } from 'react';
import BoardList from './BoardList';
import Spinner from './Spinner';
import styled from 'styled-components';

const Layout = styled.div`
  text-align: center;
`;

const Test01 = () => {
  const [isLoading, setIsLoading] = useState(false);

  function f01() {
    setIsLoading(true);
    console.log('3초가 걸리는 작업이 시작합니다...Loading');
    setTimeout(() => {
      setIsLoading(false);
      console.log('3초가 걸리는 작업이 끝났습니다!!');
    }, 3000);
  }

  return (
    <Layout>
      <h1>App25</h1>
      <h1>Spinner 연습</h1>
      <button onClick={f01}>로딩이 걸리는 버튼</button>
      {isLoading ? <Spinner /> : <BoardList />}
      {/* false값이므로 로딩중이면 스피너 아니면 테이블 */}
    </Layout>
  );
};

export default Test01;
