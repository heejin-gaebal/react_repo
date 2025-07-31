import { useState } from 'react';

const TodoPage = () => {
  const [value, setValue] = useState('');

  function handleSubmit(evt) {
    evt.preventDefault(); //기본이벤트 막기
    localStorage.setItem('todo', value);
    alert('할일 등록 완료~!');
  }

  return (
    <>
      <h1>TODO📕</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="할일을 입력하세용"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button onClick={() => {}}>할일 등록 ✨</button>
      </form>
      <br />
      <hr />
      <button
        onClick={() => {
          const result = localStorage.getItem('todo');
          alert(result);
        }}
      >
        할일 목록 📄
      </button>
    </>
  );
};

export default TodoPage;
