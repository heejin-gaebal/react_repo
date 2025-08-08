import styled from 'styled-components';
import Aside from './Aside';
import Content from './Content';
import { Route, Routes } from 'react-router-dom';
import StartPage from '../../pages/StartPage';
import Quiz from '../../pages/Quiz';
import FanCafe from '../../pages/FanCafe';
import GoodsShop from '../../pages/GoodsShop';

const StyledMain = styled.main`
  display: flex;

  & aside {
    width: 15%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background: #e4c6ff;
  }
  & #content {
    width: 85%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & img {
    width: -webkit-fill-available;
    height: -webkit-fill-available;
    object-fit: cover;
  }
`;

const Main = () => {
  return (
    <StyledMain>
      <Aside />
      <Routes>
        <Route path="*" element={<Content />}>
          <Route
            path="*"
            element={
              <img
                src="https://cdn.wallpapersafari.com/56/1/EFG6Hj.png"
                alt="bg"
              />
            }
          />
          <Route path="start" element={<StartPage />} />
          <Route path="start/quiz" element={<Quiz />} />
          <Route path="menu2" element={<FanCafe />} />
          <Route path="menu3" element={<GoodsShop />} />
        </Route>
      </Routes>
    </StyledMain>
  );
};

export default Main;
