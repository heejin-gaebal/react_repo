import React from 'react';

const GalleryInsert = () => {
  return (
    <>
      <h1>갤러리</h1>
      <h3>갤러리 작성하기</h3>
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

export default GalleryInsert;
