const BoardList = () => {
  return (
    <table border={1}>
      <thead>
        <tr>
          <th>번호</th>
          <th>제목</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>제목01</td>
        </tr>
        <tr>
          <td>2</td>
          <td>제목02</td>
        </tr>
        <tr>
          <td>3</td>
          <td>제목03</td>
        </tr>
      </tbody>
    </table>
  );
};

export default BoardList;
