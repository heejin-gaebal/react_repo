import { styled } from '@mui/material/styles';
import Header from '../components/common/Header';
import Nav from '../components/common/Nav';
import Aside from '../components/common/Aside';
import Main from '../components/common/Main';
import Footer from '../components/common/Footer';

const LayoutDiv = styled('div')`
  width: 100vw;
  min-height: 100vh;
  display: grid;
  grid-template-rows: var(--header-height) var(--nav-height) 1fr var(
      --footer-height
    );
  grid-template-columns: 1fr;
`;

const MiddleDiv = styled('div')`
  display: grid;
  grid-template-columns: var(--aside-width) 1fr var(--aside-width);
  grid-template-rows: 1fr;
`;

const MainLayout = () => {
  return (
    <LayoutDiv>
      <Header />
      <Nav />
      <MiddleDiv>
        <Aside
          adUrl={
            'https://mblogthumb-phinf.pstatic.net/MjAyMDA3MjZfNTkg/MDAxNTk1NzU5OTc3MzIw.3P8EubS_N56pRxRKhg_5LVcTfhbLv0r945KhOxLKsHQg.r8btHRPx4Rl_Ld1XZRvIjdO_mr8kKty99gl74g0phCcg.PNG.lastmistake/%EC%BF%A0%EB%A1%9C%EB%AF%B83.png?type=w800'
          }
        />
        <Main />
        <Aside
          adUrl={
            'https://mblogthumb-phinf.pstatic.net/MjAyMDA3MjZfNTkg/MDAxNTk1NzU5OTc3MzIw.3P8EubS_N56pRxRKhg_5LVcTfhbLv0r945KhOxLKsHQg.r8btHRPx4Rl_Ld1XZRvIjdO_mr8kKty99gl74g0phCcg.PNG.lastmistake/%EC%BF%A0%EB%A1%9C%EB%AF%B83.png?type=w800'
          }
        />
      </MiddleDiv>
      <Footer />
    </LayoutDiv>
  );
};

export default MainLayout;
