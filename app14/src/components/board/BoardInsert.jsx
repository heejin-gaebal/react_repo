import { useState } from 'react';

const BoardInsert = () => {
  //일반 함수에서는 reactHook은 사용할 수없음
  const [vo, setVo] = useState({
    title: '',
    content: '',
  });

  function handleSubmit(evt) {
    evt.preventDefault();
    //패킷만들어서 서버한테 보내기

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

  function handleChange(evt) {
    setVo({ ...vo, [evt.target.name]: evt.target.value });
  }
  return (
    <>
      <h1>📰Board Insert📰</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="제목을 입력해주세요"
          value={vo.title}
          onChange={handleChange}
        />
        <br />
        <textarea
          name="content"
          placeholder="내용을 입력해주세요"
          value={vo.content}
          onChange={handleChange}
        ></textarea>
        <input type="submit" value="게시글 작성!!" />
      </form>
    </>
  );
};

export default BoardInsert;
