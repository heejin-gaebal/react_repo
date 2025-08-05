import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setVoList } from '../redux/boardSlice';

const BoardList = () => {
  const { voList } = useSelector((state) => state.board);
  const dispatch = useDispatch();
  // const [voList, setVoList] = useState([]);
  // const vo = { no: '1', title: '제목01', createAt: '2025-08-05' };
  // voList.push(vo);
  //패치함수로 넣어주기 -> 패치함수가 한번만실행되도록 useEffect사용
  useEffect(() => {
    fetch(`http://127.0.0.1:8080/api/board`)
      .then((resp) => resp.json())
      .then((data) => {
        dispatch(setVoList(data));
      });
  }, []);
  /*
    useEffect의 의존성배열
    state변화로 리랜더링 / 패치함수 실행으로 리랜더링으로 무한반복되므로 useEffect를 사용
    [배열]이 변화가 있어야 함수가 실행되는데 [빈 배열]로 두면 변화가 없으므로
    최초실행만 되고 다시 실행될 일이 없게 만듬
  */

  return (
    <>
      <Header />
      <h1>게시글 목록</h1>
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
            return (
              <tr>
                <td>{vo.no}</td>
                <td>{vo.title}</td>
                <td>{vo.createAt}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <br />
      <Link to={'/board/insert'}>게시글 작성하기</Link>
      <Footer />
    </>
  );
};

export default BoardList;
