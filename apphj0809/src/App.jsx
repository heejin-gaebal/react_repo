import './App.css';
import MainLayout from './components/layouts/MainLayout';
import MyDashBoard from './components/MyDashBoard';
import DiaryInsert from './pages/diary/DiaryInsert';
import DiaryList from './pages/diary/DiaryList';
import Login from './pages/Login';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login/>}/>
        <Route path="main" element={<MainLayout />}>
          <Route index element={<MyDashBoard />} />
          <Route path="diary/list" element={<DiaryList />} />
          <Route path="diary/insert" element={<DiaryInsert />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
