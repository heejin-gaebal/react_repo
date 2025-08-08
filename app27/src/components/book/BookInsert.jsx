import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BookInsert = () => {
  const navi = useNavigate();

  //리액트훅은 일반함수 바깥에 존재해야 함
  const [bookVo, setBookVo] = useState({
    title: '',
    price: 0,
  });

  function handleSubmit(evt) {
    evt.preventDefault(); //기본 이벤트 막기

    const str = localStorage.getItem('bookVoList'); //기존배열
    const bookVoList = str ? JSON.parse(str) : []; //삼항연산자 사용하고 json 파싱
    bookVoList.push(bookVo); //신규 객체
    localStorage.setItem('bookVoList', JSON.stringify(bookVoList)); //json형식으로 보내기
    // localStorage.setItem('bookVoList', [기존배열+신규객체]);

    alert('도서 등록 완료');
    navi('/book/list');
  }

  function handleChange(evt) {
    setBookVo({ ...bookVo, [evt.target.name]: evt.target.value });
    /*
      bookVo[evt.target.name] = evt.target.value;
      setBookVo(bookVo); 
      --> 기존값이 존재하든 말든 값을 대체해주는 방식 : setTitle과 똑같은 방식
     */
  }

  return (
    <div>
      <h1>도서 등록</h1>
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
          name="price"
          placeholder="가격입력"
          onChange={handleChange}
        />
        <br />
        <input type="submit" value="도서등록!" />
      </form>
    </div>
  );
};

export default BookInsert;
