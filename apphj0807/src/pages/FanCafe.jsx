import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const StyledCafe = styled.div`
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

const FanCafe = () => {
  return (
    <StyledCafe>
      <div>
        <img src="https://stickershop.line-scdn.net/stickershop/v1/product/15527/LINEStorePC/main.png?v=1" alt="" />
        <Link className='start' to={""}>팬카페 방문하기</Link>
      </div>
      <Outlet/>
    </StyledCafe>
  );
};

export default FanCafe;