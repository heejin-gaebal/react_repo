import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import MemberJoinPage from './pages/member/MemberJoinPage';
import MemberLoginPage from './pages/member/MemberLoginPage';
import BoardInsertPage from './pages/board/BoardInsertPage';
import BoardListPage from './pages/board/BoardListPage';

const Nav = styled('nav')`
  display: flex;
  justify-content: space-evenly;

  a {
    text-decoration: none;
    color: #000;
    font-weight: 600;
  }
`;

function App() {
  return (
    <>
      <Link to={'/'}>
        <h1 align="center">React Again</h1>
      </Link>
      <hr />
      <Nav>
        <Link to={'/member/join'}>회원가입</Link>
        <Link to={'/member/login'}>로그인</Link>
        <Link to={'/board/insert'}>게시글작성</Link>
        <Link to={'/board/list'}>게시글목록</Link>
      </Nav>
      <hr />
      <Routes>
        <Route index element={<h2>원하는 메뉴 선택하세요</h2>} />
        <Route path="/member/join" element={<MemberJoinPage />} />
        <Route path="/member/login" element={<MemberLoginPage />} />
        <Route path="/board/insert" element={<BoardInsertPage />} />
        <Route path="/board/list" element={<BoardListPage />} />
      </Routes>
    </>
  );
}

export default App;
