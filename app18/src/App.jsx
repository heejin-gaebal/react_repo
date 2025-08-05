import './App.css';
import BoardInsertPage from './pages/board/BoardInsertPage';
import BoardListPage from './pages/board/BoardListPage';
import HomePage from './pages/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/board">
            <Route path="list" element={<BoardListPage />} />
            <Route path="insert" element={<BoardInsertPage />} />
          </Route>
          <Route path="/notice/list" element={<h1>NoticeList</h1>} />
          <Route path="/gallery/list" element={<h1>GalleyList</h1>} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
