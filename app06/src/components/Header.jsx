import styled from 'styled-components';

const Layout = styled.div`
  width: 100%;
  height: 100%;
  background: #f8dadf;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 20px;
`;

const Header = () => {
  return (
    <Layout>
      {/* <strong>로고</strong>
      <strong>WELCOME HOME</strong>
      <strong>MYPAGE</strong> */}
    </Layout>
  );
};

export default Header;
