import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MyHeader = styled.header`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  margin: 25px 0;
`;

const MyNav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  margin: 25px 0;

  & > a {
    text-decoration: none;
    color: #a77edd;
  }
`;

const Header = () => {
  return (
    <>
      <MyHeader>
        <div>
          <Link to={'/'}>Home 로고</Link>
        </div>
        <div>App17 Redux ToolKit 활용</div>
        <div>로그인 정보</div>
      </MyHeader>
      <MyNav>
        <Link to={'/board/list'}>게시글</Link>
        <Link to={'/notice/list'}>공지사항</Link>
        <Link to={'/gallery/list'}>갤러리</Link>
      </MyNav>
    </>
  );
};

export default Header;
