import { useState } from 'react';
import styled from 'styled-components';

const Layout = styled.div`
  width: 100%;
  margin: auto;
  text-align: center;

  & > form input {
    height: 30px;
    margin-bottom: 5px;
  }

  & > table {
    margin: auto;
    text-align: center;
  }
`;

// form태그에 submit 발생하면 input 4개의 값 객체받고 storage에 저장
const BoardMainPage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [writer, setWriter] = useState('');
  const [category, setCategory] = useState('');

  // dataList에 대한 state 생성!
  const [dataList, setDataList] = useState([]);

  function handleSubmit(evt) {
    evt.preventDefault(); //기본 이벤트 막기
    // 값 받아서 객체변환
    const vo = {
      title,
      content,
      writer,
      category,
    };

    //로컬스토리지에 리스트 형태로 저장하기
    const str = localStorage.getItem('voList'); //문자열

    const voList = str ? JSON.parse(str) : []; //문자열을 json형식으로 변환
    // str에 값이 있으면 JSON.parse(str) | null이면 [] <삼항연산자>
    voList.push(vo);

    localStorage.setItem('voList', JSON.stringify(voList));
  }

  function handleChangeTitle(evt) {
    setTitle(evt.target.value);
  }
  function handleChangeContent(evt) {
    setContent(evt.target.value);
  }
  function handleChangeWriter(evt) {
    setWriter(evt.target.value);
  }
  function handleChangeCategory(evt) {
    setCategory(evt.target.value);
  }

  //////////// 게시글 불러오기 ////////////
  function loadBoardList() {
    //storage에서 JSON형식 문자열 얻기
    const str = localStorage.getItem('voList');
    setDataList(JSON.parse(str));
  }

  return (
    <Layout>
      <h1>📰Board Page📰</h1>
      <hr />

      <h2>게시글 등록</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="제목 입력!"
          onChange={handleChangeTitle}
        />
        <br />
        <input
          type="text"
          name="content"
          placeholder="내용 입력!"
          onChange={handleChangeContent}
        />
        <br />
        <input
          type="text"
          name="writer"
          placeholder="작성자 입력!"
          onChange={handleChangeWriter}
        />
        <br />
        <input
          type="text"
          name="category"
          placeholder="카테고리 입력!"
          onChange={handleChangeCategory}
        />
        <br />
        <br />
        <input type="submit" value="게시글 작성" />
      </form>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h2>게시글 목록</h2>
      <button onClick={loadBoardList}>게시글 보기</button>
      <br />
      <br />

      <table border={1}>
        <thead>
          <tr>
            <th>제목</th>
            <th>내용</th>
            <th>작성자</th>
            <th>카테고리</th>
          </tr>
        </thead>
        <tbody>
          {dataList.map((data, idx) => (
            <tr>
              <td>{data.title}</td>
              <td>{data.content}</td>
              <td>{data.writer}</td>
              <td>{data.category}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </Layout>
  );
};

export default BoardMainPage;
