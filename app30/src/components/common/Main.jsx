import { styled } from '@mui/material/styles';
import { Route, Routes } from 'react-router-dom';
import BoardList from '../board/BoardList';
import BoardInsert from '../board/BoardInsert';
import NoticeList from '../notice/NoticeList';
import NoticeInsert from '../notice/NoticeInsert';

const LayoutMain = styled('main')`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  background-color: ${({ theme }) => {
    return theme.palette.kh.main;
  }};
  color: ${({ theme }) => {
    return theme.palette.kh.contrastText;
  }};
`;

const Main = () => {
  return (
    <LayoutMain>
      <Routes>
        <Route path="/board/list" element={<BoardList />} />
        <Route path="/board/insert" element={<BoardInsert />} />
        <Route path="/notice/list" element={<NoticeList />} />
        <Route path="/notice/insert" element={<NoticeInsert />} />
        <Route path="*" element={<h1>home</h1>} />
      </Routes>
    </LayoutMain>
  );
};

export default Main;
