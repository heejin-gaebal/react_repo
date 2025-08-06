import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Layout = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 20px;
  font-weight: 900;
`;

const HomePage = () => {
  return (
    <>
      <h1>Home</h1>
      <Layout>
        <Link to={'/counter'}>
          <h1>Counter</h1>
        </Link>
        <Link to={'/board/list'}>
          <h1>Board List</h1>
        </Link>
      </Layout>
    </>
  );
};

export default HomePage;
