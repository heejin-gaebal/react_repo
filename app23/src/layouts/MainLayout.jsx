import styled from 'styled-components';
import Aside from '../components/common/Aside';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { Route, Routes } from 'react-router-dom';
import BoardInsert from '../components/board/BoardInsert';
import BoardList from '../components/board/BoardList';
import NoticeInsert from '../components/notice/NoticeInsert';
import NoticeList from '../components/notice/NoticeList';

const LayoutDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #d7fdc9;
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: 1fr;
`;

const WrapperDiv = styled.div`
  display: grid;
  grid-template-rows: 150px 1fr 100px;
  grid-template-columns: 1fr;
`;

const MainLayout = () => {
  return (
    <LayoutDiv>
      <Aside />
      <WrapperDiv>
        <Header />
        <main>
          <Routes>
            <Route path="board/insert" element={<BoardInsert />}></Route>
            <Route path="board/list" element={<BoardList />}></Route>
            <Route path="notice/insert" element={<NoticeInsert />}></Route>
            <Route path="notice/list" element={<NoticeList />}></Route>
            <Route path="*" element={<h1>homepage</h1>}></Route>
          </Routes>
        </main>
        <Footer />
      </WrapperDiv>
    </LayoutDiv>
  );
};

export default MainLayout;
