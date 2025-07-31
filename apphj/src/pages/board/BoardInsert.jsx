import { useState } from 'react';
import styled from 'styled-components'

const Layout = styled.div`
  width: 100vw;
  height: 500px;
  padding: 30px;
  box-sizing: border-box;
  text-align:center;
  
  & > form input {height: 30px; margin-bottom: 5px;}
`;

const BoardInsert = () => {
    //컴포넌트의 데이터를 기억하고 바꿀 수있게 만드는 useState 사용
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [writer, setWriter] = useState('');
    const [genre, setGenre] = useState('');

    function handleSubmitBoard(evt){
        evt.preventDefault();

        //데이터 들어갈 vo만들어주기
        const vo = {
            title,
            content,
            writer,
            genre,
        }

        //로컬스토리지에 리스트형태로 저장
        const str = localStorage.getItem("voList");
        // str에 값이 있으면 json형변환하고 volist담고 없으면 새 배열생성
        const voList = str ? JSON.parse(str) : [];
        voList.push(vo);

        //데이터를 로컬스토리지에 덮어쓰기
        localStorage.setItem('voList', JSON.stringify(voList));
    }

    function handleChangeTitle(evt){
        setTitle(evt.target.value); 
    }
    function handleChangeContent(evt){
        setContent(evt.target.value);
    }
    function handleChangeWriter(evt){
        setWriter(evt.target.value);
    }
    function handleChangeGenre(evt){
        setGenre(evt.target.value);
    }
    return (
        <Layout>
            <h1>BOOK STORE</h1>
            <hr />
            <br />
            <form onSubmit={handleSubmitBoard}>
                <input type="text" name='title' placeholder='책 제목' onChange={handleChangeTitle}/><br />
                <input type="text" name='content' placeholder='줄거리' onChange={handleChangeContent}/><br />
                <input type="text" name='writer' placeholder='작가' onChange={handleChangeWriter}/><br />
                <input type="text" name='genre' placeholder='장르' onChange={handleChangeGenre}/><br />
                <input type="submit" value="책 등록하기"/>
            </form>
        </Layout>
    );
};

export default BoardInsert;