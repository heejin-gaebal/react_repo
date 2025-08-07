import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import BoardInsert from '../pages/board/BoardInsert';
import BoardList from '../pages/board/BoardList';
import BoardIndex from '../pages/board/BoardIndex';
import NoticeIndex from '../pages/notice/NoticeIndex';
import NoticeInsert from '../pages/notice/NoticeInsert';
import NoticeList from '../pages/notice/NoticeList';
import GalleryIndex from '../pages/gallery/GalleryIndex';
import GalleryInsert from '../pages/gallery/GalleryInsert';
import GalleryList from '../pages/gallery/GalleryList';

const LayoutDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #d5f2f7;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 200px 1fr 150px;
  place-items: strach strach;
  text-align: center;
`;

const MainLayout = () => {
  return (
    <LayoutDiv>
      <h1>Header</h1>
      <main>
        <Routes>
          <Route path="board" element={<BoardIndex />}>
            <Route path="insert" element={<BoardInsert />} />
            <Route path="list" element={<BoardList />} />
          </Route>
          <Route path="notice" element={<NoticeIndex />}>
            <Route path="insert" element={<NoticeInsert />} />
            <Route path="list" element={<NoticeList />} />
          </Route>
          <Route path="gallery" element={<GalleryIndex />}>
            <Route path="insert" element={<GalleryInsert />} />
            <Route path="list" element={<GalleryList />} />
          </Route>
        </Routes>
      </main>
      <h1>Footer</h1>
    </LayoutDiv>
  );
};

export default MainLayout;
