import { styled } from "@mui/material/styles";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import { useState } from "react";
import SideBar from "./SideBar";

const StyledMain = styled("div")`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 70px 1fr 70px;
  transition: grid-template-columns 0.3s ease;
  position: relative;

  & .sidebar-open {
    grid-template-columns: 250px 1fr; /* 사이드바 열기 */
  }
`
const Overlay = styled("div")`
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  opacity: ${props => props.show ? 1 : 0};
  visibility: ${props => props.show ? 'visible' : 'hidden'};
  transition: opacity 0.3s ease, visibility 0.3s ease;
`;

const MainLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      <StyledMain>
      <Header onToggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
      <Main/>
      <Footer/>
      </StyledMain>

      <Overlay show={sidebarOpen} onClick={closeSidebar} />
      <SideBar isOpen={sidebarOpen} onClose={closeSidebar} />
    </>
  );
};

export default MainLayout;