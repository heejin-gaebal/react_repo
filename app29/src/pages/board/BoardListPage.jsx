import { useEffect, useState } from 'react';

const BoardListPage = () => {
  const [voList, setVoList] = useState([]);

  useEffect(() => {
    fetch(`http://192.168.20.213:8080/api/board`)
      .then((resp) => resp.json())
      .then((data) => {
        setVoList(data);
      });
  }, []);

  return (
    <>
      <h1>Board List</h1>
      <hr />
      <table border={1}>
        <thead>
          <tr>
            <th>no</th>
            <th>title</th>
            <th>content</th>
            <th>createAt</th>
          </tr>
        </thead>
        <tbody>
          {voList.map((vo, idx) => {
            return (
              // key={vo.no} 해당 요소 추적을 위해 중복되지 않을 키값 부여
              <tr key={vo.no}>
                <td>{vo.no}</td>
                <td>{vo.title}</td>
                <td>{vo.content}</td>
                <td>{vo.createAt}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default BoardListPage;
