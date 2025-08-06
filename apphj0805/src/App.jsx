import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BoardListPage from './pages/board/BoardListPage';
import BoardInsertPage from './pages/board/BoardInsertPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
      <h1>app0805 복습</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/board">
            <Route path="list" element={<BoardListPage />} />
            <Route path="insert" element={<BoardInsertPage />} />
          </Route>
          <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
