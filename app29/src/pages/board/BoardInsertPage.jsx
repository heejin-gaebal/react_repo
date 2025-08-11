import { useState } from 'react';

const BoardInsertPage = () => {
  //vo라는 변수는 이 컴포넌트에서만 사용할 것이고 공유할일 없으므로 useState() tkdyd
  const [formData, setFormData] = useState({ title: '', content: '' });

  function handleSubmit(evt) {
    evt.preventDefault();

    fetch(`http://192.168.20.213:8080/api/board`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        console.log('data : ', data);
      });
  }

  function handleChange(evt) {
    // setFormData(기존객체 + 새로운 데이터);
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  }

  return (
    <>
      <h1>Board Insert</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="제목입력"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="content"
          placeholder="내용입력"
          onChange={handleChange}
        />
        <br />
        <br />
        <input type="submit" value="등록하기" />
      </form>
    </>
  );
};

export default BoardInsertPage;
