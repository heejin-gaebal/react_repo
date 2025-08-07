import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LayoutDiv = styled.div`
  background-color: #baf8e0;
  display: grid;
  grid-template-rows: 150px 100px;
  grid-template-columns: 1fr;
  & > div {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 20px;
    font-weight: 900;
  }
`;

const Nav = styled.nav`
  background-color: #bad3f8;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  & > a {
    color: #000;
    text-decoration: none;
    font-size: 20px;
    font-weight: 900;
  }
`;

const Header = () => {
  return (
    <LayoutDiv>
      <div>
        <div>Logo</div>
        <div>Welcome REACT</div>
        <div>Mypage</div>
      </div>
      <Nav>
        <Link to={'/board/list'}>게시판</Link>
        <Link to={'/notice/list'}>공지사항</Link>
        <Link to={'/gallery/list'}>갤러리</Link>
      </Nav>
    </LayoutDiv>
  );
};

export default Header;
