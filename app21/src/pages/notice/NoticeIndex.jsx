import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const LayoutDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-template-rows: 1fr;
`;

const NoticeIndex = () => {
  return (
    <>
      <h1>Notice Index</h1>
      <h2>공지사항</h2>
      <LayoutDiv>
        <nav>
          <Link to={'/main/notice/list'}>Notice List</Link>
          <br />
          <Link to={'/main/notice/insert'}>Notice Insert</Link>
        </nav>
        <Outlet />
      </LayoutDiv>
    </>
  );
};

export default NoticeIndex;
