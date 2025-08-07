import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import BoardInsert from './components/board/BoardInsert';
import BoardList from './components/board/BoardList';
import NoticeInsert from './components/notice/NoticeInsert';
import NoticeList from './components/notice/NoticeList';
import GalleryInsert from './components/gallery/GalleryInsert';
import GalleryList from './components/gallery/GalleryList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<MainLayout />}>
          <Route path="board/insert" element={<BoardInsert />} />
          <Route path="board/list" element={<BoardList />} />
          <Route path="notice/insert" element={<NoticeInsert />} />
          <Route path="notice/list" element={<NoticeList />} />
          <Route path="gallery/insert" element={<GalleryInsert />} />
          <Route path="gallery/list" element={<GalleryList />} />
          <Route path="*" element={<h1>야호오오~~</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
