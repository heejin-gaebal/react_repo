import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const StyledGoods = styled.div`
  border: 2px solid #7f2fc7;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & .start {
    display: block;
    text-decoration: none;
    font-size: 40px;
    font-weight: 600;
    border: 3px solid #7f2fc7;
    border-radius: 50px;
    color: #7f2fc7;
    padding: 30px 40px;
    transition: ease-in-out 0.2s;
    &:hover {
      color: #fff;
      background-color: #d09cff;
    }
  }
`;

const GoodsShop = () => {
  return (
    <StyledGoods>
      <div>
        <img
          src="https://item.kakaocdn.net/do/bea5ff9ff37fba97b062788704a4e04ef43ad912ad8dd55b04db6a64cddaf76d"
          alt=""
        />
        <Link className="start" to={''}>
          산리오 굿즈샵 방문하기
        </Link>
      </div>
      <Outlet />
    </StyledGoods>
  );
};

export default GoodsShop;
