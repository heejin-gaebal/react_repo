import React, { useState } from 'react';
import useFetchPost from '../../hooks/useFetchPost';

const BoardInsert = () => {
  const [formData, setFormData] = useState({ title: '', content: '' });

  const handleChange = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
    });
  };

  async function handleSubmit(evt) {
    evt.preventDefault();
    const url = 'http://127.0.0.1:8080/api/board';
    const resp = await useFetchPost(url, formData);
    const statusCode = resp.status;
    if (statusCode == 200) {
      alert('게시글 등록 성공!');
    }
  }

  return (
    <div>
      <h1>게시글 작성</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="제목 입력"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="content"
          placeholder="내용 입력"
          onChange={handleChange}
        />
        <br />
        <input type="submit" value="등록하기" />
        <br />
      </form>
    </div>
  );
};

export default BoardInsert;
