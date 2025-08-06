import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import TodoInsert from './pages/TodoInsert';
import TodoList from './pages/TodoList';

function App() {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <h1>
          <Link to={'/insert'}>INSERT</Link>
          <br />
          <Link to={'/list'}>LIST</Link>
        </h1>
        <Routes>
          <Route path="insert" element={<TodoInsert />} />
          <Route path="list" element={<TodoList />} />
          <Route path="*" element={<h1>TO-DO</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
