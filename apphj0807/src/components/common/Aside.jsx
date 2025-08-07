import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Quiz from '../../pages/Quiz';

const StyledAside = styled.aside`
  & > a {
    text-decoration: none;
    color: #000;
    padding: 30px;
    width: 200px;
    border: 3px solid #fff;
    border-radius: 50px;
    box-sizing: border-box;
    text-align: center;
    background: #f5eaff;
    font-size: 20px;
    font-weight: 600;
    transition: ease-in-out 0.2s;

    &:hover {
      color: #fff;
      background-color: #d09cff;
    }
  }
`;

const Aside = () => {
  return (
    <StyledAside>
      <Link to={'/start'}>캐릭터테스트</Link>
      <Link to={'/menu2'}>메뉴 2</Link>
      <Link to={'/menu3'}>메뉴 3</Link>
    </StyledAside>
  );
};

export default Aside;
