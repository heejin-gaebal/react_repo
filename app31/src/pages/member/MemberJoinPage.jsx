import React, { useState } from 'react';

// 요청 url 변수 처리
const API_URL = import.meta.env.VITE_API_URL;

const MemberJoinPage = () => {
  const [formData, setFormData] = useState({
    userId: '',
    userPwd: '',
    userNick: '',
  });

  function handleSubmit(evt) {
    evt.preventDefault();

    const url = `${API_URL}/api/member/join`;
    const option = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    };
    fetch(url, option)
      .then((resp) => resp.json())
      .then((data) => {
        console.log('JSON result : ', data);
      });
  }

  function handleChange(evt) {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="userId"
          placeholder="id"
          onChange={handleChange}
        />
        <br />
        <input
          type="password"
          name="userPwd"
          placeholder="pwd"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="userNick"
          placeholder="nick"
          onChange={handleChange}
        />
        <br />
        <input type="submit" value={'회원가입'} />
      </form>
    </>
  );
};

export default MemberJoinPage;
