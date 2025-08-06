const TodoList = () => {
  const str = localStorage.getItem('todo');
  return (
    <>
      <h1>Todo List</h1>
      <hr />
      <h2> 할일 : {str}</h2>
    </>
  );
};

export default TodoList;
