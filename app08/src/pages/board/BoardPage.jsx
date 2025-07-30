import { useState } from 'react';
import styled from 'styled-components';

const Layout = styled.div`
  width: 100%;
  margin: auto;
  text-align: center;

  & > table {
    margin: auto;
  }
`;

const BoardPage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  function handleSubmit(evt) {
    evt.preventDefault();
    const boardVo = {
      title,
      content,
    };

    let dbVoList = localStorage.getItem('boardVoList');
    //dbVoList가 배열이 아니고 값이 없을때 새로 배열형태로 만들어줌
    if (dbVoList === null) {
      dbVoList = [];
    } else {
      dbVoList = JSON.parse(dbVoList);
    }
    const boardVoList = dbVoList;
    boardVoList.push(boardVo);
    localStorage.setItem('boardVoList', JSON.stringify(boardVoList));
  }

  function handleChangeTitle(evt) {
    // evt.target => input
    setTitle(evt.target.value);
  }

  function handleChangeContent(evt) {
    // evt.target => textarea
    setContent(evt.target.value);
  }

  const [storageVoList, setStorageVoList] = useState([]);

  return (
    <Layout>
      <h1>BoardPage</h1>
      <hr />
      <h2>게시글 등록</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={title}
          placeholder="타이틀을 입력하세용"
          onChange={handleChangeTitle}
        />
        <br />
        <textarea
          name="content"
          value={content}
          placeholder="내용을 입력하세용"
          onChange={handleChangeContent}
        ></textarea>
        <br />
        <input type="submit" value={'제출'} />
        <br />
        <br />
      </form>
      <hr />
      <h2>게시글 목록</h2>
      <button
        onClick={() => {
          setStorageVoList(JSON.parse(localStorage.getItem('boardVoList')));
        }}
      >
        게시글 조회
      </button>
      <br />
      <br />

      <table border={1}>
        <thead>
          <tr>
            <th>제목</th>
            <th>내용</th>
          </tr>
        </thead>
        <tbody>
          {storageVoList.map((vo, idx) => {
            return (
              <tr>
                <td>{vo.title}</td>
                <td>{vo.content}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <br />
      <br />
      <br />
      <br />
    </Layout>
  );
};

export default BoardPage;
