import React, { useState } from 'react';

// 요청 url 변수 처리
const API_URL = import.meta.env.VITE_API_URL;

const BoardInsertPage = () => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
  });

  function handleChange(evt) {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
    });
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    const url = `${API_URL}/api/board`;
    const option = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
      credentials: 'include', //crossOrigin일경우 해당 url 포함하게 됨
    };
    fetch(url, option)
      .then((resp) => resp.json())
      .then((data) => {
        console.log('BOARD INSERT result : ', data);
      });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="title"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="content"
          placeholder="content"
          onChange={handleChange}
        />
        <br />
        <input type="submit" value={'글 등록'} />
        <br />
      </form>
    </>
  );
};

export default BoardInsertPage;
