import { Link } from 'react-router-dom';
import styled from 'styled-components';
//export 할때 default로 나오는지 별칭으로 나오는지

//백틱을 이용해 함수를 호출하는 방식
const DivTag = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 18px;
  font-weight: 900;
  & > a {
    text-decoration: none;
    width: 200px;
    height: 70px;
    color: #3d94e0;
    background: #bbdaf5;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    transition: ease-in-out 0.2s;

    &:hover {
      color: #fff;
      background: #358fdd;
    }
  }
`;

const Header = () => {
  return (
    <>
      <h1>Header</h1>
      <DivTag>
        <Link to={'/board/list'}>BOARD</Link>
        <Link to={'/notice/list'}>NOTICE</Link>
        <Link to={'/gallery/list'}>GALLERY</Link>
      </DivTag>
    </>
  );
};

export default Header;
