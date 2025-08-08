import { useEffect } from 'react';
import { useState } from 'react';

const BookList = () => {
  const [bookVoList, setBookVoList] = useState([]);
  const str = localStorage.getItem('bookVoList');
  const temp = JSON.parse(str);

  useEffect(() => {
    setBookVoList(temp);
  }, []);

  return (
    <div>
      <h1>도서 목록</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>제목</th>
            <th>가격</th>
          </tr>
        </thead>
        <tbody>
          {bookVoList.map((bookVo, idx) => {
            return (
              <tr>
                <td>{bookVo.title}</td>
                <td>{bookVo.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;
