import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BoardList from './pages/board/BoardList';
import BoardInsert from './pages/board/BoardInsert';
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/board/list" element={<BoardList />} />
          <Route path="/board/insert" element={<BoardInsert />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
