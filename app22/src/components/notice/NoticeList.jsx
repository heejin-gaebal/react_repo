import React from 'react';

const NoticeList = () => {
  return (
    <>
      <h1>공지사항</h1>
      <h1>공지사항 리스트</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>감자티김 첵오</td>
            <td>2025-08-07</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default NoticeList;
