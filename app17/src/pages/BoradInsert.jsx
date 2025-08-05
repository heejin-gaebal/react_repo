import { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

const BoradInsert = () => {
  const [vo, setVo] = useState({});

  function handleSubmit(evt) {
    evt.preventDefault();
    fetch(`http://127.0.0.1:8080/api/board`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(vo),
    })
      .then((resp) => resp.text())
      .then((data) => {
        if (data == 1) {
          alert('게시글 작성 성공');
        } else {
          alert('게시글 작성 실패');
        }
      });
  }

  function handleChange(evt) {
    setVo({ ...vo, [evt.target.name]: evt.target.value }); //기존객체 유지(...vo)
  }
  return (
    <>
      <Header />
      <h1>게시글 등록하기</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={vo.title}
          placeholder="제목 입력"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="content"
          value={vo.content}
          placeholder="내용 입력"
          onChange={handleChange}
        />
        <br />
        <input type="submit" value="작성하기" />
      </form>
      <Link to={'/board/list'}>게시글 목록 돌아가기</Link>
      <Footer />
    </>
  );
};

export default BoradInsert;
