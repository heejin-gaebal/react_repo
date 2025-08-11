import { styled } from '@mui/material/styles';
import Header from '../components/common/Header';
import Nav from '../components/common/Nav';
import Aside from '../components/common/Aside';
import Main from '../components/common/Main';
import Footer from '../components/common/Footer';

const LayoutDiv = styled('div')`
  width: 100vw;
  min-height: 100vh;
  background-color: #cef1f7;
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
        <Aside />
        <Main />
        <Aside />
      </MiddleDiv>
      <Footer />
    </LayoutDiv>
  );
};

export default MainLayout;
