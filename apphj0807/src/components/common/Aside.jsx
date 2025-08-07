import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledAside = styled.aside`
  & > a {
    text-decoration: none;
    color: #000;
    padding: 30px;
    width: 200px;
    border: 1px solid #000;
    border-radius: 50px;
    box-sizing: border-box;
    text-align: center;

    &:hover {
      background-color: #fcd1d1;
    }
  }
`;

const Aside = () => {
  return (
    <StyledAside>
      <Link to={'/menu1'}>메뉴 1</Link>
      <Link to={'/menu2'}>메뉴 2</Link>
      <Link to={'/menu3'}>메뉴 3</Link>
    </StyledAside>
  );
};

export default Aside;
