import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import BoardList from './pages/board/BoardList';
import BoardInsert from './pages/board/BoardInsert';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Main/>}></Route>
            <Route path='/board/list' element={<BoardList/>}></Route>
            <Route path='/board/insert' element={<BoardInsert/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
