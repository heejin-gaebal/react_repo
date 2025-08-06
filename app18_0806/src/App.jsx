import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Counter from './pages/counter/Counter';
// import BoardList from './pages/board/BoardList';
// import BoardInsert from './pages/board/BoardInsert';
import {
  CounterContextProvider,
  MyBoardContextProvider,
} from './components/MyContext';

function App() {
  return (
    <>
      <CounterContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/counter" element={<Counter />} />
            {/* <Route path="/board/list" element={<BoardList />} />
            <Route path="/board/insert" element={<BoardInsert />} /> */}
          </Routes>
        </BrowserRouter>
      </CounterContextProvider>
    </>
  );
}

export default App;
