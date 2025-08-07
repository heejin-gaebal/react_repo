import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Styledstart = styled.div`
  border: 2px solid #7f2fc7;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & .start{
    display: block;
    text-decoration: none;
    font-size: 40px;
    font-weight: 600;
    border: 3px solid #7f2fc7;
    border-radius: 50px;
    color: #7f2fc7;
    padding: 30px 40px;
    transition: ease-in-out 0.2s;
    &:hover{
      color: #fff;
    background-color: #d09cff;
    }
  }
`;

const Quest = styled.p`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 80px;
`

const StartPage = () => {
  return (
    <Styledstart>
      <div>
        <Quest>나랑 어울리는 산리오 캐릭터는?</Quest>
        <Link className='start' to={"/start/quiz"}>시작하기</Link>
      </div>
      <Outlet/>
    </Styledstart>
  );
};

export default StartPage;