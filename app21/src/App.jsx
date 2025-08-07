import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="main/*" element={<MainLayout />} />
          <Route path="admin/*" element={<h1>Admin Layout</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
