import React from 'react';

const MemberLogin = () => {
  function handleSubmit(evt) {
    evt.preventDefault();

    const url = 'http://127.0.0.1:8080/login';
    const option = {
      method: 'POST',
      headers: {
        // 'Content-Type': 'application/json',
      },
    };
    fetch(url, option).then((resp) => {
      // resp.headers.forEach((v, k) => { //모든헤더정보 출력해봄
      //   console.log(k, ':', v);
      // });
      const value = resp.headers.get('Authorization'); //토큰을 발급받았고
      const accessToken = value.split(' ')[1];
      localStorage.setItem('accessToken', accessToken); //토큰을 저장
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="userId" placeholder="userId" />
        <br />
        <input type="text" name="userPwd" placeholder="userPwd" />
        <br />
        <input type="submit" value="LOGIN" />
      </form>
    </>
  );
};

export default MemberLogin;
