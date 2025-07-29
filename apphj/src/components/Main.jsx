import styled from 'styled-components';
import { Counter01, Counter02, Counter03 } from './counter/Counter01';

const Layout = styled.div`
  width: 100vw;
  height: 500px;
  padding: 30px;
  box-sizing: border-box;
`;

const Main = () => {
  return (
    <Layout>
      <Counter01 />
      <Counter02 />
      <Counter03 />
    </Layout>
  );
};

export default Main;
