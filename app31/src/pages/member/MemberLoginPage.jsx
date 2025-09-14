import React, { useState } from 'react';

const API_URL = import.meta.env.VITE_API_URL;

const MemberLoginPage = () => {
  const [formData, setFormData] = useState({
    userId: '',
    userPwd: '',
  });

  function handleChange(evt) {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
    });
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    const url = `${API_URL}/api/member/login`;
    const option = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
      credentials: 'include',
    };
    fetch(url, option)
      .then((resp) => resp.json())
      .then((data) => {
        console.log('LOGIN result : ', data);
      });
  }

  return (
    <div>
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

        <input type="submit" value={'로그인'} />
      </form>
    </div>
  );
};

export default MemberLoginPage;
