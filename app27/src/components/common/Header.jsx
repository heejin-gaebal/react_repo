import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const StyledHeader = styled('div')`
  width: 100vw;
  height: 150px;
  box-sizing: border-box;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const StyledNav = styled('nav')`
  display: flex;
  justify-content: space-evenly;
  padding: 10px 0;
  background-color: #caebbf;
  & > a {
    text-decoration: none;
    color: #000;
    font-size: 18px;
    font-weight: 600;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <h1>WELCOME</h1>
      <StyledNav>
        <Link to={'/book/insert'}>도서 등록</Link>
        <Link to={'/book/list'}>도서 목록</Link>
        <Link to={'/mypage'}>마이페이지</Link>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
