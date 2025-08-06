import { boardList } from '../../redux/BoardSlice';

const BoardList = () => {
  return (
    <>
      <h1>Board List</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성일시</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
      <br />
      <br />
      <button>게시물 등록하기</button>
    </>
  );
};

export default BoardList;
