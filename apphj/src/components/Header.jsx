import styled from 'styled-components';

const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: #eec0c0;

  & > a {
    text-decoration: none;
    font-weight: 600;
    font-size: 20px;
    color: #000;
  }
`;

const Header = () => {
  return (
    <Layout>
      <a href="javascript:;">Logo</a>
      <a href="javascript:;">WELCOME MY HOME</a>
      <a href="javascript:;">MYPAGE</a>
    </Layout>
  );
};

export default Header;
