const TodoInsert = () => {
  let str = '';

  function enrollTodo() {
    localStorage.setItem('todo', str);
  }

  function handleChange(evt) {
    str = evt.target.value;
  }

  return (
    <>
      <h1>Todo Insert</h1>
      <hr />
      <input type="text" placeholder="To-Do" onChange={handleChange} />
      <button onClick={enrollTodo}>등록하기</button>
    </>
  );
};

export default TodoInsert;
