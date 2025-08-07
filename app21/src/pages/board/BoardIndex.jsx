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

const BoardIndex = () => {
  return (
    <>
      <h1>Board Index</h1>
      <LayoutDiv>
        <nav>
          <Link to={'/main/board/insert'}>Insert</Link>
          <br />
          <Link to={'/main/board/list'}>List</Link>
        </nav>
        <Outlet />
        {/* 
          <Outlet />
          Route의 부모의 레이아웃을 그대로 유지하면서
          Route의 자식을 Route의 부모단으로 꺼내서 사용할 때
          - children이랑 비슷함
        */}
      </LayoutDiv>
    </>
  );
};

export default BoardIndex;
