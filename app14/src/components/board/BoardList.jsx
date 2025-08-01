import { useEffect, useState } from 'react';

const BoardList = () => {
  console.log('BoardList render~~~01');

  const [voList, setVoList] = useState([]);

  // function getBoardList() {
  //   //fetch로 voList 받기
  //   const vo01 = { title: '야옹이가', content: '야옹야옹' };
  //   const vo02 = { title: '멍뭉이가', content: '멍멍멍멍' };
  //   const vo03 = { title: '병아리가', content: '쨱쨱쨱쨱' };
  //   voList.push(vo01);
  //   voList.push(vo02);
  //   voList.push(vo03);

  //   setVoList([...voList]);
  //   console.log(voList);
  //   /*
  //     voList의 값이 바껴야지 state가 바뀐거로 판단함
  //     안의 vo요소들이 바뀌는건 상관없음
  //   */
  // }

  //fetch로 voList 받기 - 패치
  // useEffect(함수);
  function f01() {
    // get방식
    fetch(`http://127.0.0.1:8080/api/board`)
      .then((resp) => resp.json())
      .then((data) => {
        setVoList(data);
      });
  }
  useEffect(f01, []);
  //맨처음 마운트 됨 -> 이펙트|패치 -> state -> 패치함수의 결과로 re-render되어 2번 랜더링

  return (
    <>
      <h1>📰Board List📰</h1>
      <hr />
      <table border={1}>
        <thead>
          <tr>
            <th>제목</th>
            <th>내용</th>
          </tr>
        </thead>
        <tbody>
          {voList.map((vo, idx) => {
            return (
              <tr>
                <td>{vo.title}</td>
                <td>{vo.content}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default BoardList;
