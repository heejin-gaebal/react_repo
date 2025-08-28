import './App.css';
import { Routes, Route } from 'react-router-dom';
import MemberLogin from './components/member/MemberLogin';

function App() {
  return (
    <>
      <h1>WELCOME</h1>
      <hr />
      <Routes>
        <Route path="/member/login" element={<MemberLogin />} />
      </Routes>
    </>
  );
}

export default App;
