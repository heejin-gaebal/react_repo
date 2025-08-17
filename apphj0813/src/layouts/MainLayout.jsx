import { styled } from "@mui/material/styles";
import Header from "../components/common/Header";
import Nav from "../components/common/Nav";
import Aside from "../components/common/Aside";
import Main from "../components/common/Main";
import Footer from "../components/common/Footer";

const LayoutDiv = styled("div")`
 width: 100vw;
 height: 100vh;
 display: grid;
 grid-template-rows: 100px 50px 1fr 100px;
 grid-template-columns: 1fr;
place-items: center center;
`

const MiddleDiv = styled('div')`
  display: grid;
  grid-template-columns: var(--aside-width) 1fr var(--aside-width);
  grid-template-rows: 1fr;
`;

const MainLayout = () => {
  return (
    <LayoutDiv>
      <Header/>
      <Nav/>
      <MiddleDiv>
        <Aside/>
        <Main/>
      </MiddleDiv>
      <Footer/>
    </LayoutDiv>
  );
};

export default MainLayout;