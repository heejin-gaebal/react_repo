import { useEffect, useState } from 'react';
import Footer from '../../components/common/Footer';
import Header from '../../components/common/Header';
import { useNavigate } from 'react-router-dom';

const BoardListPage = () => {
  // let voList = []; //일반적인 변수는 랜더링과 무관하니까 리액트 훅 사용
  const [voList, setVoList] = useState([]);

  // function f01() {
  //   fetch(`http://127.0.0.1:8080/api/board`)
  //     .then((resp) => resp.json())
  //     .then((data) => {
  //       setVoList(data);
  //     });
  // }
  //useEffct를 사용하여 패치함수만 한번 실행되게하고 무한렌더링을 막는다
  useEffect(function f01() {
    fetch(`http://127.0.0.1:8080/api/board`)
      .then((resp) => resp.json())
      .then((data) => {
        setVoList(data);
      });
  }, []);

  const navi = useNavigate(); //리턴값으로 함수가 나옴

  return (
    <>
      <Header />
      <h1>Board List</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성일시</th>
          </tr>
        </thead>
        <tbody>
          {voList.map((vo, idx) => {
            //map 함수란 어떤 배열의 요소를 하나씩 가져와서 작업하고 결과물들을 다시 배열로 return
            return (
              <tr>
                <td>{vo.no}</td>
                <td>{vo.title}</td>
                <td>{vo.content}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button
        onClick={() => {
          navi('/board/insert');
        }}
      >
        게시글 작성
      </button>
      <Footer />
    </>
  );
};

export default BoardListPage;
