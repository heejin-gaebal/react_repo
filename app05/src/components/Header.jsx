import styled from 'styled-components';

const Layout = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-rows: 2fr;
  grid-template-columns: 2fr 6fr 2fr;
  place-items: center center;
`;

const Nav = styled.nav`
  width: 100%;
  height: 100%;
  grid-column: span 3;
  border: 3px solid #eea2c8;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 20px;
  font-weight: 600;

  & > a {
    text-decoration: none;
    color: #a1587d;
  }
`;
const Header = () => {
  return (
    <Layout>
      <div>Logo</div>
      <h1>WELCOME TO MY HOME</h1>
      <div>유저정보</div>
      <Nav>
        <a href="javascript:;">게시글</a>
        <a href="javascript:;">공지사항</a>
        <a href="javascript:;">갤러리</a>
        <a href="javascript:;">장바구니</a>
      </Nav>
    </Layout>
  );
};

export default Header;
