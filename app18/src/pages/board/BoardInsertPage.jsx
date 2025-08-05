import { useState } from 'react';
import Footer from '../../components/common/Footer';
import Header from '../../components/common/Header';
import { useNavigate } from 'react-router-dom';

const BoardInsertPage = () => {
  const [vo, setVo] = useState({
    title: '',
    content: '',
    //기존에 갖고있는 value값이 없으므로 빈문자열을 넣어준 상태
  });
  const navi = useNavigate();

  function handleSubmit(evt) {
    evt.preventDefault();

    fetch(`http://127.0.0.1:8080/api/board`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(vo),
    })
      .then((resp) => resp.text()) //응답이 숫자 1이므로 제이슨형식으로 받는것이 아닌 text()로 받는다
      .then((data) => {
        if (data === '1') {
          alert('insert success!!');
          navi('/board/list');
        } else {
          alert('insert fail....');
        }
      });
  }

  function handleChange(evt) {
    setVo({ ...vo, [evt.target.name]: evt.target.value });
  }

  return (
    <>
      <Header />
      <h1>Board Insert</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="제목"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="content"
          placeholder="내용"
          onChange={handleChange}
        />
        <br />
        <input type="submit" value="작성하기!!" />
      </form>
      <Footer />
    </>
  );
};

export default BoardInsertPage;
