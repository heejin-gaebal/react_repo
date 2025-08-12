import React, { useState } from 'react';
import useFormDate from '../../hooks/useFormData';
import useFetchPost from '../../hooks/useFetchPost';

const NoticeInsert = () => {
  // const [formData, setFormData] = useState({ title: '', content: '' });

  // const handleChange = (evt) => {
  //   setFormData({
  //     ...formData,
  //     [evt.target.name]: evt.target.value,
  //   });
  // };

  const initState = { title: '', content: '' };
  const { formData, handleChange } = useFormDate(initState);

  async function handleSubmit(evt) {
    evt.preventDefault();
    const url = 'http://127.0.0.1:8080/api/notice';
    const resp = await useFetchPost(url, formData);
    const statusCode = resp.status;
    if (statusCode == 200) {
      alert('공지사항 등록 성공!');
    }
  }

  return (
    <div>
      <h1>공지사항 작성</h1>
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

export default NoticeInsert;
