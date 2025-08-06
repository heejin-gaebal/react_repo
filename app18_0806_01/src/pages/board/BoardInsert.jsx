const BoardInsert = () => {
  function handleSubmit(evt) {
    evt.preventDefault();
  }

  function handleChange(evt) {
    evt.target.value;
  }
  return (
    <>
      <h1>Board Insert</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="제목 입력"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="content"
          placeholder="내용 입력"
          onChange={handleChange}
        />
        <br />
        <input type="submit" value="게시글 등록하기" />
      </form>
    </>
  );
};

export default BoardInsert;
