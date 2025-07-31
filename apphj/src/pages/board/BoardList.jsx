import { useState } from 'react';
import styled from 'styled-components';

const Layout = styled.div`
  width: 100vw;
  height: 500px;
  padding: 30px;
  box-sizing: border-box;
  text-align: center;

  & > table {
    margin: auto;
  }
`;

const BoardList = () => {
  const [dataList, setDataList] = useState([]);
  function loadBookList() {
    const str = localStorage.getItem('voList');
    setDataList(JSON.parse(str));
  }

  return (
    <Layout>
      <h1>BOOK LIST</h1>
      <hr />
      <br />
      <button onClick={loadBookList}>책 조회하기</button>
      <br />
      <br />
      <table border={1}>
        <thead>
          <tr>
            <th>제목</th>
            <th>줄거리</th>
            <th>작가</th>
            <th>장르</th>
          </tr>
        </thead>
        <tbody>
          {dataList.map((data, idx) => (
            <tr>
              <td>{data.title}</td>
              <td>{data.content}</td>
              <td>{data.writer}</td>
              <td>{data.genre}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
};

export default BoardList;
