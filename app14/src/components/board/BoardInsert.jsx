import { useState } from 'react';

const BoardInsert = () => {
  function handleSubmit(evt) {
    evt.preventDefault();
    //패킷만들어서 서버한테 보내기
    const [title, setTitle] = useState({});
    const vo = {
      title,
      content,
    };
    const url = `http://127.0.0.1:8080/api/board`;
    const option = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(vo),
    };
    fetch(url, option);
  }

  return (
    <>
      <h1>📰Board Insert📰</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="제목을 입력해주세요" />
        <br />
        <textarea name="content" placeholder="내용을 입력해주세요"></textarea>
        <input type="submit" value="게시글 작성!!" />
      </form>
    </>
  );
};

export default BoardInsert;
