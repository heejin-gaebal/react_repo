import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BoardInsertPage from './pages/board/BoardInsertPage';
import BoardListPage from './pages/board/BoardListPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="board">
          <Route index element={<h1>Board Home</h1>} />
          <Route path="insert" element={<BoardInsertPage />} />
          <Route path="list" element={<BoardListPage />} />
        </Route>
        <Route path="*" element={<h1>HOME</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
