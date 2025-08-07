import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: 1px 1px 8px #ded3e9;
  color: #7f2fc7;

  & img{
    width: 90px;
    height: 90px;
    object-fit: contain;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <Link to={"/"}>
        <img src="https://i.namu.wiki/i/l9JWhPivO-KKFbsrt4fEwBh-KCMDLsmA1f93kmd_lJLNnPxmZHmU7GoARSDXJJ4atDBU_dDKQcM8s93h-H_PxQ.svg" alt="kuromi" />
      </Link>
      <h1>WELCOME</h1>
      <h1>Mypage</h1>
    </StyledHeader>
  );
};

export default Header;
