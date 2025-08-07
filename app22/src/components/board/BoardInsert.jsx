import React from 'react';

const BoardInsert = () => {
  return (
    <>
      <h1>게시글</h1>
      <h3>게시글 작성하기</h3>
      <form>
        <input type="text" placeholder="입력해주세요" />
        <br />
        <input type="text" placeholder="입력해주세요" />
        <br />
        <textarea name="" id="" placeholder="입력해주세요"></textarea>
        <br />
        <input type="submit" value={'등록하기'} />
      </form>
    </>
  );
};

export default BoardInsert;
