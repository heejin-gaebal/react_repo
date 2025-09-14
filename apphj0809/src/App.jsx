import './App.css';
import MainLayout from './components/layouts/MainLayout';
import MyDashBoard from './components/MyDashBoard';
import AboutMe from './pages/AboutMe';
import DiaryInsert from './pages/diary/DiaryInsert';
import DiaryList from './pages/diary/DiaryList';
import Login from './pages/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route index element={<AboutMe/>} />
        <Route path="about" element={<Portfolio/>} />
        {/* <Route path='login' element={<Login />} /> */}
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
