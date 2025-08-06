const BoardInsertPage = () => {
  function handleSubmit() {}
  return (
    <>
      <h1>Board Insert</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="제목 입력" />
        <br />
        <input type="text" name="content" placeholder="내용 입력" />
        <br />
        <input type="submit" value="작성하기" />
      </form>
    </>
  );
};

export default BoardInsertPage;
