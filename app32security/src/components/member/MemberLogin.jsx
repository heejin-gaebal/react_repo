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
  } //폼

  function callUserApi() {
    const token = localStorage.getItem('accessToken');
    const url = 'http://127.0.0.1:8080/api/test/user';
    const option = {
      //get 방식이라 method|body 생략
      headers: {
        Authorization: 'Bearer ' + token,
      },
    };
    fetch(url, option);
  }

  function callAdminApi() {
    const token = localStorage.getItem('accessToken');
    const url = 'http://127.0.0.1:8080/api/test/admin';
    const option = {
      //get 방식이라 method|body 생략
      headers: {
        Authorization: 'Bearer ' + token,
      },
    };
    fetch(url, option);
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
      <hr />
      <button onClick={callUserApi}>call User API</button> <br />
      <button onClick={callAdminApi}>call Admin API</button>
    </>
  );
};

export default MemberLogin;
